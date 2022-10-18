import * as React from "react";
import Box from "@mui/material/Box";
import { Grow, IconButton, SvgIcon, Typography } from "@mui/material";
import theme from "../../theme/Theme";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneRounded";
import { Step, StepProps } from "./types";

function resetSteps(steps: Step[], stepToResetTo: Step) {
    
  for (const step of steps) {
    if(step.stepIndex >= stepToResetTo.stepIndex){
        step.completed = false;
    }
}
}
function preventStep(step: Step, activeStep: Step) {
  if (step.stepIndex > activeStep.stepIndex) {
    return true;
  }
  return false;
}

async function handleStep(
  steps: Step[],
  activeStep: Step,
  step: Step,
  setActiveStep: (step: Step) => void
) {
  if (preventStep(step, activeStep)) {
    return;
  }
  setActiveStep(step);
  resetSteps(steps, step);
}

// TODO: refactor if statements. possibly make into functions which returns manageable component chunks

export default function StepperComponent({
  activeStep,
  setActiveStep,
  step,
  steps,
}: StepProps) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: theme.spacing(1),
      }}
    >
      <IconButton
        aria-label="fingerprint"
        color="primary"
        sx={{
          opacity:
            activeStep.stepIndex !== step.stepIndex && !step?.completed
              ? "0.3"
              : "1",
        }}
        disableRipple={
          activeStep.stepIndex !== step.stepIndex && !step?.completed
        }
        onClick={() => {
          handleStep(steps, activeStep, step, setActiveStep);
        }}
      >
        {step.completed && step.stepIndex !== steps.length ? (
          <Grow
            in={step.completed}
            {...(step.completed ? { timeout: 500 } : {})}
          >
            <SvgIcon component={DoneRoundedIcon} />
          </Grow>
        ) : (
          <SvgIcon component={step.icon} />
        )}
        {step.completed && step.stepIndex === steps.length ? (
          <Grow
            in={step.completed}
            {...(step.completed ? { timeout: 500 } : {})}
          >
            <SvgIcon component={DoneAllRoundedIcon} />
          </Grow>
        ) : (
          false
        )}
      </IconButton>
      <Typography
        color={theme.palette.primary.main}
        variant="subtitle2"
        sx={{
          opacity:
            activeStep.stepIndex !== step.stepIndex && !step.completed
              ? "0.3"
              : "1",
        }}
      >
        {step?.label}
      </Typography>
    </Box>
  );
}
