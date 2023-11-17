import styles from "./BookingPage.module.css";

const About = () => {
  return (
    <div className="card">
      <div className="card-body pt-4">
        <h3>Про рейс</h3>
        <hr />
        <div className={`row mb-3 ${styles["station"]}`}>
          <div className="col-3">
            <div className={styles["bus-title"]}>11:05</div>
            <div className={styles["bus-date"]}>14 жовт.</div>
          </div>
          <div className="col-1">
            <div className={styles["dot-first"]}></div>
          </div>
          <div className="col-8">
            <div className={styles["bus-title"]}>Львів</div>
            <div className={styles["bus-station__address"]}>
              Автостанція №8, Двірцева площа; будинок 1
            </div>
          </div>
        </div>
        <div className={`row mb-3 ${styles["station"]}`}>
          <div className="col-3">
            <div className={styles["bus-title"]}>16:35</div>
            <div className={styles["bus-date"]}>14 жовт.</div>
          </div>
          <div className="col-1">
            <div className={styles["dot"]}></div>
          </div>
          <div className="col-8">
            <div className={styles["bus-title"]}>Краків</div>
            <div className={styles["bus-station__address"]}>
              Автостанція Краків, вулиця Босацька; будинок 18
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 text-start">
            <span>Ціна:</span>
          </div>
          <div className="col-6 text-end">
            <span className={styles["price"]}>560,</span>
            <span className={styles["price-afterdot"]}>00 грн.</span>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 text-start">
            <div className={styles["summary-price"]}>До сплати:</div>
            <div className={styles["summary-price"]}>(1 дорослий)</div>
          </div>
          <div className="col-6 text-end">
            <div className={styles["summary-price"]}>&nbsp;</div>
            <span className={styles["summary-price"]}>560,</span>
            <span className={styles["summary-price_afterdot"]}>00 грн.</span>
          </div>
        </div>
        <hr className="mb-3" />
        <div className="mb-1">
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=_U-CCqfBb6G43qbF&t=2"
            className="text-danger text-decoration-none"
          >
            Умови повернення
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
