import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useMemo, useState } from "react";
import { ContentForm } from "./Components/ContentForm";
import { ScriptBlock } from "./Components/ScriptBlock";
import { MagicItemProperties } from "./Content/MagicItem";

// import './App.css';

// const itemPropertiesSubset = MagicItemProperties.filter(
//   (prop) => prop.required && typeof prop.example === "string"
// );

export type FormValues = {
  [key: string]: any;
}

// export interface ValidatedFormValues extends FormValues {
//     name: string,
//     type: string,
//     rarity: string,
//
//     // source:
// }

function App() {
  const itemPropertiesSubset = useMemo(
    () =>
      MagicItemProperties.filter(
        (prop) => prop.required && typeof prop.example === "string"
      ),
    []
  );
  const defaultFormValues = useMemo<FormValues>(
    () =>
      itemPropertiesSubset.reduce((acc: FormValues, prop) => {
        if (prop.allowedValues != null && prop.allowedValues.length > 0) {
          acc[prop.propertyName] = prop.example;
        }
        return acc;
      }, {}),
    [itemPropertiesSubset]
  );

  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
  const [showScript, setShowScript] = useState<boolean>(false);

  return (
    <div className="App">
      <Grid2 container columns={2} spacing={2} padding={2} disableEqualOverflow>
        <Grid2 container direction="column" xs={1} padding={6}>
          <ContentForm
            formValues={formValues}
            setFormValues={setFormValues}
            itemPropertiesSubset={itemPropertiesSubset}
            setShowScript={setShowScript}
          />
        </Grid2>
        {showScript && (
          <Grid2 xs={1}>
            <ScriptBlock content={formValues}/>
          </Grid2>
        )}
      </Grid2>
    </div>
  );
}

export default App;
