import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import data from "../assets/data";

export default function ContainedButtons({ setByBrand }) {
  let categoryBar = ["All"];

  for (let el of data) {
    if (!categoryBar.includes(el.brand)) {
      categoryBar.push(el.brand);
    }
  }

  categoryBar.push("cart");

  return (
    <Stack
      style={{ display: "flex", justifyContent: "center" }}
      direction="row"
      spacing={4}
    >
      {categoryBar.map((el, ind) => {
        return (
          <Button key={ind} onClick={setByBrand} variant="contained">
            {el}
          </Button>
        );
      })}
    </Stack>
  );
}
