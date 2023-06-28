import { PropertyMetaData, PropertyType } from "../Content/CommonAttributes";
import { toTitleCase } from "../Utils";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormData } from "../App";
import { FormControlLabel, Switch } from "@mui/material";

interface FormPropertyProps {
  property: PropertyMetaData<PropertyType>;
  formData: FormData;
  updateProperty: (property: string, value: PropertyType) => void;
}

export const FormProperty: React.FC<FormPropertyProps> = ({
  property,
  formData,
  updateProperty,
}) => {
  const getComponent = () => {
    if (typeof property.example === "string") {
      return getTextComponent(property as PropertyMetaData<string>);
    } else if (typeof property.example === "boolean") {
      return getBooleanComponent(property as PropertyMetaData<boolean>);
    }
    return <></>;
  };

  const getBooleanComponent = (property: PropertyMetaData<boolean>) => {
    const checkedState = !!(formData?.[property.propertyName] ?? false);
    return (
      <FormControlLabel
        control={
          <Switch
            checked={checkedState}
            value={checkedState}
            onChange={(event, checked) =>
              updateProperty(property.propertyName, checked)
            }
          />
        }
        label={toTitleCase(property.propertyName)}
      />
    );
  };

  const getTextComponent = (property: PropertyMetaData<string>) => {
    if (property.allowedValues != null && property.allowedValues.length > 0) {
      return (
        <TextField
          required={property.required}
          label={toTitleCase(property.propertyName)}
          select
          fullWidth
          placeholder={property.allowedValues[0]}
          value={formData?.[property.propertyName] ?? ""}
          onChange={(event) =>
            updateProperty(property.propertyName, event.target.value)
          }
        >
          {property.allowedValues.map((option) => (
            <MenuItem key={option} value={option}>
              {toTitleCase(option)}
            </MenuItem>
          ))}
        </TextField>
      );
    }

    return (
      <TextField
        required={property.required}
        label={toTitleCase(property.propertyName)}
        placeholder={property.example}
        fullWidth
        autoComplete="off"
        value={formData?.[property.propertyName] ?? ""}
        onChange={(event) =>
          updateProperty(property.propertyName, event.target.value)
        }
      />
    );
  };

  return <Grid2>{getComponent()}</Grid2>;
};
