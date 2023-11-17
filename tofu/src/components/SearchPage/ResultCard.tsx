import classes from "./ResultCard.module.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ResultCard = () => {
  return (
    <div className={classes["result-set"]}>
      <div className={classes["short-information"]}>
        <div className={classes["date-section"]}>
          <p className={classes["time"]}>09:50</p>
          <div className={classes["line-between"]}></div>
          <p className={classes["time"]}>09:50</p>
        </div>

        <p className={classes["place-departure"]}>
          Львів (Стрийський автовокзал)
        </p>

        <h2 className={classes["info-carrier"]}>Перевізник: FlixBus</h2>
      </div>

      <div className={classes["short-information-s"]}>
        <p>
          09:50 <br />
          Київ (головний вокзал)
        </p>
      </div>

      <div className={classes["price-section"]}>
        <h3>500.00 грн</h3>
        <p className={classes["ticket-count"]}>4 квитки</p>
        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
          Продовжити
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
