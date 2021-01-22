import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import NumberFormat from "react-number-format";
import * as constantes from "../data/constantes";

export default function Formulaire() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("montant")); // watch input value by passing the name of it

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value
            }
          });
        }}
        thousandSeparator={" "}
        defaultValue="1234.565"
        decimalScale="2"
        allowEmptyFormatting
        fixedDecimalScale
        isNumericString
        suffix="€"
      />
    );
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={4}>
            <TextField
              inputRef={register}
              name="montant"
              label="Montant"
              disabled
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id="combo-box-demo"
              options={constantes.data}
              getOptionLabel={(option) => option.label}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputRef={register}
                  name="categorie"
                  label="Catégorie"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={4}>
            <TextField
              inputRef={register}
              name="montant2"
              label="Montant"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id="combo-box-demo2"
              options={constantes.data}
              getOptionLabel={(option) => option.label}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputRef={register}
                  name="categorie2"
                  label="Catégorie"
                />
              )}
            />
          </Grid>
        </Grid>
        <input type="submit" />
      </form>
    </div>
  );
}
