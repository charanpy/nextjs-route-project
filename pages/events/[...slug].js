import React from 'react';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/Events-list';

const FilteredEventPage = ({ events }) => {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const [year, month] = params.slug;

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
    return {
      notFound: true,
    };
  }

  const events = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events,
    },
  };
}

export default FilteredEventPage;
