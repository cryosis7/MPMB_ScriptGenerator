import { MPMBGenericProperty } from "../Content/CommonAttributes";
import { toTitleCase } from "../Utils";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect } from "react";

interface FormPropertyProps {
  property: MPMBGenericProperty<any>;
  updateProperty: (property: string, value: any) => void;
}

export const FormProperty: React.FC<FormPropertyProps> = ({
  property,
  updateProperty,
}) => {
  // Sets property if it's a default.
  useEffect(() => {
    if (property.allowedValues != null && property.allowedValues.length > 0) {
      updateProperty(property.propertyName, property.allowedValues[0]);
    }
  }, []);

  const getComponent: (
    property: MPMBGenericProperty<any>
  ) => React.ReactElement = (property) => {
    if (property.allowedValues != null && property.allowedValues.length > 0) {
      return (
        <TextField
          required={property.required}
          label={toTitleCase(property.propertyName)}
          select
          fullWidth
          defaultValue={property.allowedValues[0]}
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
        onChange={(event) =>
          updateProperty(property.propertyName, event.target.value)
        }
      />
    );
  };

  return <Grid2>{getComponent(property)}</Grid2>;
};
