import EventList from '../components/events/Events-list';
import { getFeaturedEvents } from '../dummy-data';

export default function Home() {
  const feauturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={feauturedEvents} />
    </div>
  );
}
