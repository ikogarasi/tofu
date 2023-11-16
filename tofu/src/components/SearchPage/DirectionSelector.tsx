import { InputAdornment, TextField } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import classes from "./DirectionSelector.module.css";

const DirectionSelector = () => {
  return (
    <div className={classes["input-destination"]}>
      <TextField
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <div className={classes["swap-btn"]}>
        <SwapHorizOutlinedIcon fontSize="large" />
      </div>
      <TextField
        sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
};

export default DirectionSelector;
