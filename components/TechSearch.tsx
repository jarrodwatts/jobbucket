/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import tech from '../const/tech';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  })
);

export default function TechSearch() {
  const classes = useStyles();

  return (
    <div >
      {/* <Autocomplete
        multiple
        limitTags={1}
        id="tech-search"
        options={tech}
        getOptionLabel={(option) => option.name}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tech"
            placeholder="Tech"
          />
        )}
      /> */}
    </div>
  );
}
