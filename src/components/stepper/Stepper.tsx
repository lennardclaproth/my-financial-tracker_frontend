import * as React from "react";
import ContainerCard from "../containers/ContainerCard";
import theme from "../../theme/Theme";
import StepComponent from "./Step";
import { StepperProps } from "./types";

export default function Stepper({
  activeStep,
  setActiveStep,
  steps,
}: StepperProps) {
  return (
    <ContainerCard
      sx={{
        width: "60%",
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: "white",
        paddingTop: 0,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        justifyContent: "space-between",
        height: "64px",
      }}
      body={steps.map((step: any, index: number) => (
        <StepComponent
          key={index}
          steps={steps}
          step={step}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ))}
    />
  );
}
