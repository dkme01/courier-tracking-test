import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  StepIconProps,
} from "@material-ui/core";
import { House, LocalShipping, Receipt } from "@material-ui/icons";
import classNames from "classnames";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#688BC3",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#688BC3",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    color: "#EECB57",
    backgroundColor: "#3F5398",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    color: "#EECB57",
    backgroundColor: "#3F5398",
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Receipt />,
    2: <LocalShipping />,
    3: <House />,
  };

  return (
    <div
      className={classNames(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Invoice Emmited", "Traveling to Destination", "Delivered"];
}

export default function CustomSteps(props: any) {
  const classes = useStyles();
  const steps = getSteps();
  const activeStep = steps.indexOf(props.activeStep);

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
