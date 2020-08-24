import GridLayout from "react-grid-layout";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Box,
  Card,
  makeStyles,
  Theme,
  createStyles,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardActions,
  Button,
} from "@material-ui/core";
import classes from "*.module.css";
import { green } from "@material-ui/core/colors";
import Icon, { Stack } from "@mdi/react";
import { mdiAccount, mdiCheckboxBlankCircle, mdiCheck } from "@mdi/js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridBorder: {
      border: "1px solid red;",
      height: "100%",
    },
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

const MyFirstGrid: React.FunctionComponent<{}> = ({ children }) => {
  // layout is an array of objects, see the demo for more complete usage
  const classes = useStyles();
  const [age, setAge] = React.useState<number>();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number);
  };
  const layout = [
    { i: "machine1", x: 0, y: 1, w: 1, h: 4, minW: 1, maxW: 3, static: true },
    { i: "machine2", x: 0, y: 5, w: 1, h: 4, minW: 1, maxW: 3, static: true },
    { i: "machine3", x: 0, y: 9, w: 1, h: 4, minW: 1, maxW: 3, static: true },
    { i: "machine4", x: 0, y: 13, w: 1, h: 4, minW: 1, maxW: 3, static: true },

    { i: "day1", x: 1, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day2", x: 4, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day3", x: 7, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day4", x: 10, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day5", x: 13, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day6", x: 16, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },
    { i: "day7", x: 19, y: 0, w: 3, h: 1, minW: 1, maxW: 3, static: true },

    { i: "schedule1", x: 1, y: 1, w: 3, h: 4, minW: 1, maxW: 3 },
    { i: "schedule2", x: 1, y: 1, w: 3, h: 4, minW: 1, maxW: 3 },
    { i: "schedule3", x: 1, y: 1, w: 3, h: 4, minW: 1, maxW: 3 },
    { i: "schedule4", x: 1, y: 1, w: 3, h: 4, minW: 1, maxW: 3 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={22}
      preventCollision={true}
      verticalCompact={false}
      rowHeight={30}
      width={4200}
    >
      <div key="machine1">
        <Card variant="outlined" square>
          <CardContent className="pa-0">
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
      </div>

      <div key="machine2">
        <Card variant="outlined" square>
          <CardContent className="pa-0">
            <Box display="flex" alignItems="center">
              <Box width="70%">
                <Typography color="textPrimary" gutterBottom>
                  Machine 2
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
      </div>

      <div key="machine3">
        <Card variant="outlined" square>
          <CardContent className="pa-0">
            <Box display="flex" alignItems="center">
              <Box width="70%">
                <Typography color="textPrimary" gutterBottom>
                  Machine 3
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
      </div>

      <div key="machine4">
        <Card variant="outlined" square>
          <CardContent className="pa-0">
            <Box display="flex" alignItems="center">
              <Box width="70%">
                <Typography color="textPrimary" gutterBottom>
                  Machine 4
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
      </div>

      <div key="day1" style={{ background: "blue" }}>
        pazartesi
      </div>
      <div key="day2" style={{ background: "orange" }}>
        sahle
      </div>
      <div key="day3" style={{ background: "purple" }}>
        carsemba
      </div>
      <div key="day4" style={{ background: "yellow" }}>
        persambe
      </div>
      <div key="day5" style={{ background: "aqua" }}>
        cuma
      </div>
      <div key="day6" style={{ background: "brown" }}>
        cumartesi
      </div>
      <div key="day7" style={{ background: "grey" }}>
        pazar
      </div>

      <div key="schedule1">
        <Box textAlign="center" className={classes.gridBorder}>
          <div style={{ paddingBottom: "10px" }}>Machine 1_XXX</div>
          <div>
            <ProgressBar>
              <ProgressBar
                striped
                variant="warning"
                now={20}
                label={`${2} hr`}
                key={1}
              />
              <ProgressBar
                striped
                variant="success"
                now={40}
                label={`${17} hr`}
                key={2}
              />
              <ProgressBar
                style={{ background: "#cacaca" }}
                now={40}
                label={`${6} hr`}
                key={2}
              />
            </ProgressBar>
          </div>
          <div style={{ padding: "10px 10px" }}>
            Material Available:{" "}
            <Icon path={mdiCheck} size="15px" className={classes.active} />
          </div>
          <div>Auftragsmenge produced: 195</div>
        </Box>
      </div>
      <div key="schedule2">
        {" "}
        <Box textAlign="center" className={classes.gridBorder}>
          Schedule for machine 2
        </Box>
      </div>
      <div key="schedule3">
        {" "}
        <Box textAlign="center" className={classes.gridBorder}>
          Schedule for machine 3
        </Box>
      </div>
      <div key="schedule4">
        {" "}
        <Box textAlign="center" className={classes.gridBorder}>
          Schedule for machine 4
        </Box>
      </div>
    </GridLayout>
  );
};
export default MyFirstGrid;
