import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/Events-list';
import EventsSearch from '../../components/events/events-search';

const EventsPage = ({ events }) => {
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
