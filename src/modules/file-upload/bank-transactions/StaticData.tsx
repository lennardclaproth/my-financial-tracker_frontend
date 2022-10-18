import {
  AccountBalanceRounded,
  FileUploadRounded,
  SportsScoreRounded,
} from "@mui/icons-material";
import INGImage from "../../../bank-icons/ING.png";
import ABNImage from "../../../bank-icons/ABN-AMRO.png";
import N26Image from "../../../bank-icons/N26.png";
import IngFileHandler from "./upload-handlers/INGFileHandler";

const steps = [
  {
    stepIndex: 1,
    icon: AccountBalanceRounded,
    label: "Select bank",
    completed: false,
  },
  {
    stepIndex: 2,
    icon: FileUploadRounded,
    label: "Select file",
    completed: false,
  },
  {
    stepIndex: 3,
    icon: SportsScoreRounded,
    label: "Finalize import",
    completed: false,
  },
];

const options = [
  {
    name: "ING",
    image: INGImage,
    height: 60,
    width: 80,
    alt: "ING logo",
    fileHandler: new IngFileHandler(),
    fileNameExample: "NL10INGB0001234567_01-01-2022_01-02-2022.csv",
  },
  //   {
  //     name: "ABN amro",
  //     image: ABNImage,
  //     height: 65,
  //     width: 80,
  //     alt: "ING logo",
  //     fileHandler: new ABNFileHandler()
  //   },
  //   {
  //     name: "ABN amro",
  //     image: N26Image,
  //     height: 65,
  //     width: 80,
  //     alt: "ING logo",
  //     fileHandler: new ABNFileHandler()
  //   },
];

export { steps, options };
