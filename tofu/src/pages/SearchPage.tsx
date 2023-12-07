import classes from "./SearchPage.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import DirectionSelector from "../components/SearchPage/DirectionSelector";
import ResultCard from "../components/SearchPage/ResultCard";
import { RootState } from "../store/store";
import { Ticket } from "../store/slices/ticketsSlice";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Connection,
  setNewDepartureDate,
  setNewFromPoint,
  setNewPassengersAmount,
  setNewToPoint,
} from "../store/slices/connectionSliceHomePage";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const dispatch = useAppDispatch();

  const connection: Connection = useAppSelector((state: RootState) => {
    return state.connection;
  });

  const tickets: Ticket[] = useAppSelector((state: RootState) => {
    return state.tickets.filter((element: Ticket) => {
      return (
        element.from == connection.from &&
        element.to == connection.to &&
        element.amount == connection.passengersAmount &&
        element.startDate.toLocaleDateString("en-US") ==
          connection.departureDate.toLocaleDateString("en-US")
      );
    });
  });

  const onChangePassengersCount = (event: any) => {
    dispatch(setNewPassengersAmount(event.target.value));
  };

  const onChangeFromPoint = (event: any) => {
    dispatch(setNewFromPoint(event.target.value));
  };

  const onChangeToPoint = (event: any) => {
    dispatch(setNewToPoint(event.target.value));
  };

  const onSwap = () => {
    const from = connection.from;
    const to = connection.to;
    dispatch(setNewFromPoint(to));
    dispatch(setNewToPoint(from));
  };

  const clickOnPrevDate = () => {
    dispatch(
      setNewDepartureDate(
        new Date(connection.departureDate.getTime() - 86400000)
      )
    );
  };

  const clickOnNextDate = () => {
    dispatch(
      setNewDepartureDate(
        new Date(connection.departureDate.getTime() + 86400000)
      )
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes["main-part"]}>
        <div className={classes["checkbox-area"]}>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Подорож в один бік"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Зворотня подорож"
            />
          </RadioGroup>
        </div>

        <div className={classes["nessessory-information"]}>
          <DirectionSelector
            changeFromPoint={onChangeFromPoint}
            changeToPoint={onChangeToPoint}
            swap={onSwap}
            from={connection.from}
            to={connection.to}
          />

          <div className={classes["date-input-and-passengers"]}>
            <div className={classes["date-input"]}>
              <h6>Відправлення</h6>
              <div className={classes["input-group"]}>
                <DatePicker
                  value={dayjs(connection.departureDate)}
                  slotProps={{
                    inputAdornment: {
                      position: "start",
                    },
                  }}
                  components={{ OpenPickerIcon: CalendarMonthIcon }}
                />
              </div>
            </div>
          </div>

          <div className={classes["passengers-amount"]}>
            <h6>Пасажири</h6>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ width: 200 }}
              value={connection.passengersAmount}
              onChange={onChangePassengersCount}
            >
              <MenuItem value={1}>1 пасажир</MenuItem>
              <MenuItem value={2}>2 пасажири</MenuItem>
              <MenuItem value={3}>3 пасажири</MenuItem>
            </Select>
          </div>
        </div>
        <div className={classes["result-information-layout"]}>
          <div className={classes["select-date"]}>
            <div className={classes["date-selector"]} onClick={clickOnPrevDate}>
              <h3 className={classes["date-title"]}>
                {new Date(
                  connection.departureDate.getTime() - 86400000
                ).toLocaleDateString("en-US")}
              </h3>
            </div>

            <div className={classes["date-selector"]}>
              <h3 className={classes["date-title"]}>
                {connection.departureDate.toLocaleDateString("en-US")}
              </h3>
              <div className={classes["date-selected"]}></div>
            </div>

            <div className={classes["date-selector"]} onClick={clickOnNextDate}>
              <h3 className={classes["date-title"]}>
                {new Date(
                  connection.departureDate.getTime() + 86400000
                ).toLocaleDateString("en-US")}
              </h3>
            </div>
          </div>
          <div className={classes["flights"]}>
            <div>
              <div className={classes["amount-of-results-layout"]}>
                <p className={classes["results-title"]}>
                  {tickets?.length} результатів
                </p>
              </div>
              <div className={classes["more-results"]}>
                <h5 className={classes["more-results-title"]}>
                  Переглянути більше рейсів
                </h5>
              </div>
            </div>
          </div>
          {tickets != null &&
            tickets.map((element, index) => {
              return <ResultCard key={index} ticket={element} />;
            })}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchPage;
