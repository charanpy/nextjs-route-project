import {
  getEventById,
  getFeaturedEvents as getAllEvents,
} from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistic from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetail = ({ event }) => {
  if (!event) {
    <p>Loading</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  console.log(event);
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export default EventDetail;
