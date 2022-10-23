import { FileUploadProps, OptionTemplate } from "./types";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import { steps, options } from "./StaticData";
import { useState } from "react";
import Stepper from "components/stepper/Stepper";
import SelectBank from "./steps/SelectBank";
import SelectFile from "./steps/SelectFile";
import ReviewData from "./steps/ReviewData";
import { Divider } from "@mui/material";

// TODO: refactor
// TODO: implement Completed step

function loadData(activeBankOption: OptionTemplate, forceUpdate: () => void) {
  setTimeout(function () {
    if (activeBankOption.fileHandler.mappedData.length <= 0) {
      loadData(activeBankOption, forceUpdate);
    } else {
      forceUpdate();
    }
  }, 500);
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

function handleUpload({ activeOption }, event, forceUpdate) {
//   activeOption.fileHandler.handleUpload(event);
//   loadData(activeOption, forceUpdate);
}

function setNextStep({ activeStep, setActiveStep }) {
  activeStep.completed = true;
  const newIndex =
    steps.findIndex((step) => step.stepIndex === activeStep.stepIndex) + 1;
  setActiveStep(steps[newIndex]);
}

function setSelectedOption({ setActiveOption }, selectedOption) {
  setActiveOption(selectedOption);
}

function getStep(index, state, forceUpdate) {
  switch (index) {
    case 1:
      return (
        <SelectBank
          options={options}
          handleClick={(selectedOption) => {
            setSelectedOption(state.option, selectedOption);
            setNextStep(state.step);
          }}
        />
      );
    case 2:
      return (
        <SelectFile
          selectedOption={state.option.activeOption}
          handleUpload={(event) => {
            handleUpload(state.option, event, forceUpdate);
            setNextStep(state.step);
          }}
        />
      );
    case 3:
      return (<ReviewData activeOption={state.option.activeOption} />);
  }
}

function Wizard() {
  const forceUpdate = useForceUpdate();
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [activeOption, setActiveOption] = useState();
  const state = {
    step: {
      activeStep,
      setActiveStep,
    },
    option: {
      activeOption,
      setActiveOption,
    },
  };
  return (
    <VerticalFlexBox sx={{ width: "500px", padding: 0 }}>
      <Stepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
      />
      {getStep(activeStep.stepIndex, state, forceUpdate)}
    </VerticalFlexBox>
  );
}

export default Wizard;
