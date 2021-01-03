import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Link from "../src/Link";
import initFirebase from "../lib/initFirebase";
import { GetServerSideProps } from "next";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import firebase from "firebase";
import "firebase/firestore";
import Job from "../interfaces/Job";
import TechSearch from "../components/TechSearch";
import PerksSearch from "../components/PerksSearch";
import LocationSearch from "../components/LocationSearch";
import SalaryRangeSlider from "../components/SalaryRangeSlider";
import PlaceType from "../interfaces/PlaceType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "32px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Index({ jobs }: { jobs: Job[] }) {
  const [salaryValue, setSalaryValue] = React.useState<number[]>([0, 125]);
  const [locationValue, setLocationValue] = React.useState<PlaceType | null>(
    null
  );

  const handleSubmit = () => {
    console.log("submitted");
    console.log("Salary:", salaryValue);
    console.log("Location:", location);
  };

  console.log(jobs);
  console.log(salaryValue);
  console.log(locationValue);
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={1} justify="center">
          <Paper className={classes.paper}>
            <Grid container alignItems="center" item xs={12} spacing={3}>
              <Grid item xs={12} md={6}>
                <SalaryRangeSlider
                  salaryValue={salaryValue}
                  setSalaryValue={setSalaryValue}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <LocationSearch
                  locationValue={locationValue}
                  setLocationValue={setLocationValue}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%" }}
                  onClick={() => handleSubmit()}
                >
                  View Desired Tech Stacks for these filters 🔍
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  initFirebase();
  const db = firebase.firestore();
  let jobs: Job[] = [];

  await db
    .collection("jobs")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        let data = doc.data() as Job;
        jobs.push(data);
      });
    });

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
    },
  };
};
