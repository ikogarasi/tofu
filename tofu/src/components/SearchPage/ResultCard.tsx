import classes from "./ResultCard.module.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Ticket } from "../../store/slices/ticketsSlice";

interface ResCard {
  ticket: Ticket;
}

const ResultCard = ({ ticket }: ResCard) => {


  return (
    <div className={classes["result-set"]}>
      <div className={classes["short-information"]}>
        <div className={classes["date-section"]}>
          <p className={classes["time"]}>
            {new Date(ticket.startDate).getHours()}:{new Date(ticket.startDate).getMinutes()}
          </p>
          <div className={classes["line-between"]}></div>
          <p className={classes["time"]}>
            {new Date(ticket.endDate).getHours()}:{new Date(ticket.endDate).getMinutes()}
          </p>
        </div>

        <p className={classes["place-departure"]}>{ticket.from}</p>

        <h2 className={classes["info-carrier"]}>
          Перевізник: {ticket.carriersName}
        </h2>
      </div>

      <div className={classes["short-information-s"]}>
        <p>
        {new Date(ticket.endDate).getHours()}:{new Date(ticket.endDate).getMinutes()} <br />
          {ticket.to}
        </p>
      </div>

      <div className={classes["price-section"]}>
        <h3>{ticket.price} грн</h3>
        <p className={classes["ticket-count"]}>{ticket.amount} квитки</p>
        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
          Продовжити
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
