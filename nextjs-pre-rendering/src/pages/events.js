import { useRouter } from "next/router";
import { useState } from "react";

function EventList({ evenList }) {
  const router = useRouter();
  const [events, setEvents] = useState(evenList);
  const fetchSports = async () => {
    const response = await fetch(
      " http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSports}>Get Sports</button>
      <h1>List of events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      evenList: data,
    },
  };
}
