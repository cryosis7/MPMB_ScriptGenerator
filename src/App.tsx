import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useMemo, useState } from "react";
import { ContentForm } from "./Components/ContentForm";
import { ScriptBlock } from "./Components/ScriptBlock";
import { MagicItemProperties } from "./Content/MagicItem";
import {PropertyType} from "./Content/CommonAttributes";

export type FormData = {
  [key: string]: PropertyType;
};

function App() {
  const itemPropertiesSubset = useMemo(
    () =>
      MagicItemProperties.filter(
        (prop) => typeof prop.example === "string" || typeof prop.example === 'boolean'
      ).sort((a, b) => {
        if (a.required === b.required) {
          return 0;
        } else if (a.required) {
          return -1;
        }
        return 1;
      }),
    []
  );
  const defaultFormData = useMemo<FormData>(
    () =>
      itemPropertiesSubset.reduce((acc: FormData, prop) => {
        if (prop.allowedValues != null && prop.allowedValues.length > 0) {
          acc[prop.propertyName] = prop.example;
        }
        return acc;
      }, {}),
    [itemPropertiesSubset]
  );

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [showScript, setShowScript] = useState<boolean>(false);

  return (
    <div className="App">
      <Grid2 container columns={2} spacing={2} padding={2} disableEqualOverflow>
        <Grid2 container direction="column" xs={1} padding={6}>
          <ContentForm
            formData={formData}
            setFormData={setFormData}
            itemPropertiesSubset={itemPropertiesSubset}
            setShowScript={setShowScript}
          />
        </Grid2>
        {showScript && (
          <Grid2 xs={1}>
            <ScriptBlock content={formData} />
          </Grid2>
        )}
      </Grid2>
    </div>
  );
}

export default App;
