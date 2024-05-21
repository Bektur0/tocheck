import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import data from "../assets/data";

export default function ContainedButtons({ setByGender }) {
  let categoryBar = [];

  for (let el of data) {
    if (!categoryBar.includes(el.gender)) {
      categoryBar.push(el.gender);
    }
  }

  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      direction="row"
      spacing={4}
    >
      {categoryBar.map((el, ind) => {
        return (
          <Button key={ind} onClick={setByGender} variant="contained">
            {el}
          </Button>
        );
      })}
    </Stack>
  );
}
