import Grid2 from "@mui/material/Unstable_Grid2";
import React, { FormEvent } from "react";
import { FormValues } from "../App";
import { FormProperty } from "./FormProperty";
import Button from "@mui/material/Button";
import { MPMBGenericProperty } from "../Content/CommonAttributes";

interface ContentFormProps {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  itemPropertiesSubset: MPMBGenericProperty<any>[];
  setShowScript: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentForm: React.FC<ContentFormProps> = ({
  formValues,
  setFormValues,
  itemPropertiesSubset,
  setShowScript,
}) => {
  const updateProperty: (property: string, value: any) => void = (
    property,
    value
  ) => {
    setFormValues({ ...formValues, [property]: value });
    setShowScript(false);
  };

  const handleSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setShowScript(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {itemPropertiesSubset.map((property) => (
        <FormProperty
          key={property.propertyName}
          property={property}
          updateProperty={updateProperty}
        />
      ))}
      <Grid2 textAlign="center">
        <Button type="submit" variant="contained">
          Generate
        </Button>
      </Grid2>
    </form>
  );
};
