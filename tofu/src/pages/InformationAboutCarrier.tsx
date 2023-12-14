import classes from "./InformationAboutCarrier.module.css";
import FlixBus from "../images/FlixBus.jpg";
import { TextField, Rating, Button } from "@mui/material";
import { useState } from "react";

export interface Comment {
  email: string,
  date: string,
  commentText: string,
  rate: number,
}

const InformationAboutCarrier = () => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className={classes["main-layout"]}>
        <div className={classes["information-about-carrier"]}>
          <img
            src={FlixBus}
            className={classes["carrier-img"]}
            width="399"
            height="383"
          />
          <div className={classes["description"]}>
            <h1 className={classes["description-title"]}>FlixBus</h1>
            <p className={classes["description-paragraph"]}>
              Flixmobility GmbH — німецька транспортна компанія, що
              спеціалізується на організації пасажирських автобусних
              перевезеннях. Заснована 2013 року в Мюнхені. Станом на 2017 рік,
              компанія здійснювала рейси на 1400 напрямках у 27 країнах Європи.
              2017 FlixBus перевіз 60 млн пасажирів.
            </p>
          </div>
          <div className={classes["impressions-layout"]}>
            <h2>Share your impression</h2>
            <TextField
              className={classes["impression-text-area"]}
              id="outlined-multiline-flexible"
              label="Comment"
              multiline
              rows={4}
              maxRows={4}
            />
            <div>
              <Rating
                sx={{ fontSize: 70 }}
                size="large"
                name="simple-controlled"
                value={rating}
                onChange={(event: any, newValue: any) => {
                  setRating(newValue);
                }}
              />
            </div>
            <Button variant="outlined">Outlined</Button>
          </div>
        </div>
        <div className={classes["divider"]}></div>

        <div className={classes["comments"]}>
          <span className={classes["comments-header"]}>Latest Reviews:</span>
          <div className="rate">
            <div className={classes["information-about-comment"]}>
              <span className={classes["user-email"]}>
                veronika.luhovska@gmail.com
              </span>
              <br />
              <span className={classes["comment-date"]}>16 June</span>
              <br />
              <span className={classes["comment-text"]}>Good, very coool!</span>
            </div>
            <div>
              <Rating
                sx={{ fontSize: 80 }}
                size="large"
                name="simple-controlled"
                value={rating}
                onChange={(event: any, newValue: any) => {
                  setRating(newValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationAboutCarrier;
