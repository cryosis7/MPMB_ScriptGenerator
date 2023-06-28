import Grid2 from "@mui/material/Unstable_Grid2";
import React, { FormEvent } from "react";
import { FormData } from "../App";
import { FormProperty } from "./FormProperty";
import Button from "@mui/material/Button";
import { PropertyMetaData, PropertyType } from "../Content/CommonAttributes";

interface ContentFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  itemPropertiesSubset: PropertyMetaData<PropertyType>[];
  setShowScript: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentForm: React.FC<ContentFormProps> = ({
  formData,
  setFormData,
  itemPropertiesSubset,
  setShowScript,
}) => {
  const updateProperty: (property: string, value: PropertyType) => void = (
    property,
    value
  ) => {
    if (value) {
      setFormData({ ...formData, [property]: value });
    } else {
      delete formData[property];
      setFormData({...formData});
    }
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
          formData={formData}
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
