import { SvgIcon } from "@mui/material";

interface Step {
  icon: typeof SvgIcon;
  label: string;
  stepIndex: number;
  completed: boolean;
}

interface StepperProps {
  activeStep: Step;
  setActiveStep: (step: Step) => void;
  steps: Array<Step>;
}

interface StepProps extends StepperProps {
  step: Step;
}

export type { Step, StepperProps, StepProps };
