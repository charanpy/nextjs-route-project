import EventList from '../components/events/Events-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {
  // const feauturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={props.items} />
    </div>
  );
}

export async function getStaticProps() {
  const feauturedEvents = await getFeaturedEvents();
  return {
    props: {
      items: feauturedEvents,
    },
    revalidate: 1800,
  };
}
