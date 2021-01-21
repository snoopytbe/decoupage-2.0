import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputRef={register}
        name="montant"
        label="Montant"
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
      />
      <Autocomplete
        id="combo-box-demo"
        options={constantes.data}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            inputRef={register}
            name="categorie"
            label="Combo box"
            variant="outlined"
          />
        )}
      />

      <input type="submit" />
    </form>
  );
}
