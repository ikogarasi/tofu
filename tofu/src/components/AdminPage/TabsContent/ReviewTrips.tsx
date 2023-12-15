import styles from "../AdminPage.module.css";
import {
  useFetchAllTicketsQuery,
  useRemoveTicketMutation,
} from "../../../services/ticketApi";

const ReviewTrips = () => {
  const { data: tickets = [] } = useFetchAllTicketsQuery();
  const [removeTicket] = useRemoveTicketMutation();

  const onDeleteClick = async (ticketId: number) => {
    await removeTicket(ticketId);
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}
    >
      {tickets.map((ticket) => (
        <div key={ticket.id} className={styles["result__set"]}>
          <div className="col">
            <div className="d-flex flex-row justify-content-between w-100">
              <div className="col-4">
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                  {new Date(ticket.startDate).toDateString()}
                </p>
                <p style={{ fontSize: "15px", marginBottom: "2rem" }}>
                  {ticket.from}
                </p>
              </div>
              <div className="col-4">
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                  {new Date(ticket.endDate).toDateString()}
                </p>
                <p>{ticket.to}</p>
              </div>
              <div className={`col-4 ${styles["price__section"]}`}>
                <h3>{ticket.price.toFixed(2)} грн</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm">
                <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
                  Перевізник: {ticket.carrier.title}
                </h2>
              </div>
              <div className={`col-md-6 col-sm ${styles["remove__button"]}`}>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "150px" }}
                  onClick={() => onDeleteClick(Number(ticket.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewTrips;
