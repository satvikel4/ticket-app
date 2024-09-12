import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { TicketCard } from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets ? (
          tickets.map((ticket, index) => (
            <div key={index} className="mb-4">
              <TicketCard ticket={ticket} />
            </div>
          ))
        ) : (
          <p>No tickets available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
