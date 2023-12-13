import { InputAdornment, TextField } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import classes from "./DirectionSelector.module.css";
interface directionSelector {
  from: string;
  to: string;
  changeFromPoint: (event: any) => void
  changeToPoint: (event: any) => void
  swap: () => void
}

const DirectionSelector = ({ from, to , changeFromPoint, changeToPoint, swap}: directionSelector) => {

  return (
    <div className={classes["input-destination"]}>
      <TextField
        value={from}
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        onChange={changeFromPoint}
        variant="outlined"
      />
      <div onClick={swap} className={classes["swap-btn"]}>
        <SwapHorizOutlinedIcon fontSize="large" />
      </div>
      <TextField
        value={to}
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        onChange={changeToPoint}
        variant="outlined"
      />
    </div>
  );
};

export default DirectionSelector;
