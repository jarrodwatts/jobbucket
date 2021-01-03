import React, { SetStateAction } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value: number) {
  return `$${value}k`;
}

function convertIfMillion(val: string) {
  if (val == "1000k") {
    return "1M";
  } else {
    return val;
  }
}

export default function SalaryRangeSlider({
  salaryValue,
  setSalaryValue,
}: {
  salaryValue: number[];
  setSalaryValue: React.Dispatch<SetStateAction<number[]>>;
}) {
  const classes = useStyles();

  const handleChange = (event: any, newValue: number | number[]) => {
    setSalaryValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        gutterBottom
        style={{ marginBottom: "28px" }}
      >
        Salary range:
      </Typography>
      <Slider
        value={salaryValue}
        min={0}
        max={1000}
        valueLabelFormat={(x) => convertIfMillion(x + "k")}
        step={10}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
