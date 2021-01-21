import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { updateDate } from "../redux/actions";
import { selectDate } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";

export default function DateDepense() {
  const dispatch = useDispatch();
  const [dateChoisie, setDateChoisie] = useState(useSelector(selectDate));

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          value={dateChoisie}
          onChange={(date) => {
            dispatch(updateDate(date));
            setDateChoisie(date);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
