import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/Events-list';
import EventsSearch from '../../components/events/events-search';

const EventsPage = () => {
  const events = getAllEvents();
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

export default EventsPage;
