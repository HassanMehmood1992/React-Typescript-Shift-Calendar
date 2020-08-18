import "./App.scss";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Layout from "./layouts/default";
import React, { Component } from "react";
import Icon, { Stack } from "@mdi/react";
import { mdiAccount, mdiCheckboxBlankCircle } from "@mdi/js";
import Button from "@material-ui/core/Button";
import MyFirstGrid from "./components/GridLayout";
import {
  Typography,
  Grid,
  Paper,
  makeStyles,
  Theme,
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },

    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },

    active: {
      color: green.A700,
    },
    inactive: {
      color: theme.palette.warning.main,
    },
    error: {
      color: theme.palette.error.main,
    },
    formControl: {
      minWidth: 120,
    },
    weekDay: {
      minWidth: "600px",
    },
    container: {
      overflowX: "scroll",
      height: "90vh",
    },
  })
);

const App: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState<number>();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };
  return (
    <Layout>
      <Box m="50px">
        <Grid container>
          {/* <Grid item md={2}>
            <Box textAlign="center">
              <Card variant="outlined" square>
                Days
              </Card>
            </Box>
            {[1, 2, 3, 4].map((item) => {
              return (
                <Card variant="outlined" square>
                  <CardContent className="p-0">
                    <Box display="flex" alignItems="center">
                      <Box width="70%">
                        <Typography color="textPrimary" gutterBottom>
                          Machine 1
                        </Typography>
                      </Box>
                      <Box flexGrow="1"></Box>
                      <Box width="30%" flexShrink={0} textAlign="right">
                        <Icon
                          path={mdiCheckboxBlankCircle}
                          size="15px"
                          className={classes.active}
                        />
                      </Box>
                    </Box>

                    <Box display="flex">
                      <FormControl className={classes.formControl}>
                        <InputLabel>Schedule</InputLabel>
                        <Select value={age} onChange={handleChange}>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Details</Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid> */}
          <Grid item md={12}>
            <Card variant="outlined" square>
              <Grid container className={classes.container}>
               
                <div style={{ position: "static" }}>
                  <MyFirstGrid></MyFirstGrid>
                </div>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default App;
