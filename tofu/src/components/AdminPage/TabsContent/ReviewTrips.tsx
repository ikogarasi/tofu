import { Trip } from "../AdminPage";
import styles from "../AdminPage.module.css";

interface Props {
  trips: Trip[];
}

const ReviewTrips = ({ trips }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}
    >
      {trips.map((trip, i) => (
        <div key={i} className={styles["result__set"]}>
          <div className="col">
            <div className="d-flex flex-row justify-content-between w-100">
              <div className="col-4">
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                  {trip.departureTime}
                </p>
                <p style={{ fontSize: "15px", marginBottom: "2rem" }}>
                  {trip.departureStation}
                </p>
              </div>
              <div className="col-4">
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                  {trip.arrivalTime}
                </p>
                <p>{trip.arrivalStation}</p>
              </div>
              <div className={`col-4 ${styles["price__section"]}`}>
                <h3>{trip.price.toFixed(2)} грн</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm">
                <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
                  Перевізник: {trip.carrier}
                </h2>
              </div>
              <div className={`col-md-6 col-sm ${styles["remove__button"]}`}>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "150px" }}
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
