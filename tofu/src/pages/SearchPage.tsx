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
import { useState } from "react";
import DirectionSelector from "../components/SearchPage/DirectionSelector";
import ResultCard from "../components/SearchPage/ResultCard";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  AvailableDate,
  Connection,
  Ticket,
} from "../store/slices/connection.slice";
import dayjs from "dayjs";

const SearchPage = () => {
  const [countOfPassengers, setCountOfPassengers] = useState();
  const [date, setDate] = useState(dayjs("2023-11-10"));
  const connection: Connection | undefined = useSelector((state: RootState) => {
    const foundConnection = state.connection.find((element) => {
      return element.from === "Львів" && element.to === "Київ";
    });
    return foundConnection;
  });

  const [availableDates, setAvalableDates] = useState<AvailableDate | null>(
    () => {
      if (connection == undefined) {
        return null;
      }

      const item = connection.availableDates.find((element) => {
        return element.date === date.toDate();
      });
      if (item == undefined) {
        return null;
      }
      return item;
    }
  );

  const [tickets, setTickets] = useState<Ticket[] | null>(() => {
    if (availableDates == null) {
      return null;
    }
    return availableDates.tickets;
  });

  const onChangePassengersCount = (event: any) => {
    setCountOfPassengers(event.target.value);
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
          <DirectionSelector />

          <div className={classes["date-input-and-passengers"]}>
            <div className={classes["date-input"]}>
              <h6>Відправлення</h6>
              <div className={classes["input-group"]}>
                <DatePicker
                  value={date}
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
              value={countOfPassengers}
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
            <div className={classes["date-selector"]}>
              <h3 className={classes["date-title"]}>ср, 13 жовт</h3>
            </div>
            <div className={classes["date-selector"]}>
              <h3 className={classes["date-title"]}>чт, 14 жовт</h3>
              <div className={classes["date-selected"]}></div>
            </div>
            <div className={classes["date-selector"]}>
              <h3 className={classes["date-title"]}>пт, 15 жовт</h3>
            </div>
          </div>
          <div className={classes["flights"]}>
            <div>
              <div className={classes["amount-of-results-layout"]}>
                <p className={classes["results-title"]}>
                  UAH
                  <br />4 результатів
                </p>
              </div>
              <div className={classes["more-results"]}>
                <h5 className={classes["more-results-title"]}>
                  Переглянути більше рейсів
                </h5>
              </div>
            </div>
          </div>
          <ResultCard />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchPage;
