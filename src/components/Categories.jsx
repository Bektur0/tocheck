import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import data from "./data";

export default function ContainedButtons({ setByBrand }) {
  let categroyBar = ["All"];
  for (let el of data) {
    if (!categroyBar.includes(el.brand)) {
      categroyBar.push(el.brand);
    }
  }
  categroyBar.push("cart");

  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      direction="row"
      spacing={4}
    >
      {categroyBar.map((el) => {
        return (
          <Button onClick={() => setByBrand(event)} variant="contained">
            {el}
          </Button>
        );
      })}
    </Stack>
  );
}
