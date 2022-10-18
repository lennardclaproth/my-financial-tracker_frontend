import * as React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import theme from "../../theme/Theme";
import StepButtonComponent from "./StepButton";

interface CustomStepperProps {
  activeStep: any;
  setActiveStep: any;
  step: any;
  steps: any;
}

export default function StepComponent({
  activeStep,
  setActiveStep,
  step,
  steps,
}: CustomStepperProps) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ flexGrow: "1" }}>
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: theme.palette.primary.main,
            opacity: "0.3",
            width: "100%",
          }}
        />
      </Box>
      <StepButtonComponent
        activeStep={activeStep}
        step={step}
        steps={steps}
        setActiveStep={setActiveStep}
      />
      <Box sx={{ flexGrow: "1" }}>
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: theme.palette.primary.main,
            opacity: "0.3",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
