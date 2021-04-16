import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/Events-list';

const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query?.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const [year, month] = filterData;

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter</p>;
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!events || !events.length) {
    return <p>No Events Found</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default FilteredEventPage;
