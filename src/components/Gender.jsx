import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import data from "./data";

export default function ContainedButtons({ setByGender }) {
  let categroyBar = [];
  for (let el of data) {
    if (!categroyBar.includes(el.gender)) {
      categroyBar.push(el.gender);
    }
  }

  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      direction="row"
      spacing={4}
    >
      {categroyBar.map((el) => {
        return (
          <Button onClick={() => setByGender(event)} variant="contained">
            {el}
          </Button>
        );
      })}
    </Stack>
  );
}
