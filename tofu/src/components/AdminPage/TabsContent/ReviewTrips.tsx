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
          <div className={styles["short__information"]}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                {trip.departureTime}
              </p>
            </div>

            <p style={{ fontSize: "15px", marginBottom: "2rem" }}>
              {trip.departureStation}
            </p>

            <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
              Перевізник: {trip.carrier}
            </h2>
          </div>

          <div className={styles["short__information-s"]}>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
              {trip.arrivalTime}
            </p>
            <p>{trip.arrivalStation}</p>
          </div>

          <div className={styles["price__section"]}>
            <h3>{trip.price.toFixed(2)} грн</h3>
            <button
              type="button"
              className="btn btn-danger"
              style={{ width: "150px" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewTrips;
