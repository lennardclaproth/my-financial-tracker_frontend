import * as React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import theme from "../../theme/Theme";
import StepButtonComponent from "./StepButton";
import HorizontalRule from "@mui/icons-material/HorizontalRule";
import { ArrowRightIcon } from "modules/icons/Icons";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";

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
    console.log(step)
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexGrow: "1"
      }}
    >
      {/* { step.stepIndex == 1 || 
      <Box sx={{ flexGrow: "1" }}>
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: theme.palette.primary.main,
            opacity: "0.3",
            width: "100%",
          }}
        />
      </Box>} */}
        <StepButtonComponent
          activeStep={activeStep}
          step={step}
          steps={steps}
          setActiveStep={setActiveStep}
        />
      { step.stepIndex == steps.length ||
       <HorizontalFlexBox sx={{ flexGrow: "1", justifyContent:"end"}}>
        {/* <Divider
          orientation="horizontal"
          sx={{
            borderColor: theme.palette.primary.main,
            opacity: "0.3",
            width: "100%",
          }}
        /> */}
        <ArrowRightIcon fontSize="inherit" sx={{opacity:".3"}}/>
      </HorizontalFlexBox> 
      }
    </Box>
  );
}
