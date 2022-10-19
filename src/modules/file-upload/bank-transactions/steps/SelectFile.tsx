import { Button, Typography } from "@mui/material";
import ImageCard from "components/cards/ImageCard";
import theme from "theme/Theme";
import fileArrowUploadGreen from "illustrations/illustrations-svg/file-arrow-up-green.svg";
import { FileUploadProps } from "../types";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import ContainerCard from "components/containers/ContainerCard";
import { grey } from "@mui/material/colors";
import { OpenFileIcon } from "modules/icons/Icons";

// TODO: add typings

function cardHeader() {
  return (
    <ImageCard
      cardheight={"200px"}
      cardwidth={"400px"}
      imageheight={"200px"}
      imagewidth={"400px"}
      image={fileArrowUploadGreen}
      alt={"fileArrowUploadGreen"}
      sx={{ boxShadow: "none", padding: 0 }}
    />
  );
}

function cardBody(selectedOption) {
  return (
    <VerticalFlexBox sx={{padding:0, marginTop:theme.spacing(3)}}>
      <Typography
        variant="h3"
        align="center"
      >
        Select your file!
      </Typography>
      <Typography
        variant="body1"
        paragraph
        align="center"
        sx={{color: grey[600], mb: theme.spacing(3)}}
      >
        You can now upload your file. The filename should look like this:{" "}
        <b>{selectedOption.fileNameExample}</b>
      </Typography>
    </VerticalFlexBox>
  );
}

function cardFooter(handleUpload) {
  return (
    <Button
      variant="contained"
      component="label"
      color="primary"
      size="large"
      fullWidth
      startIcon={<OpenFileIcon />}
      sx={{
        borderRadius: "10px",
        color: theme.palette.secondary.main,
      }}
      disableElevation
    >
      <input
        hidden
        accept="csv"
        type="file"
        onChange={(event) => {
          handleUpload(event);
        }}
      />
      Select file
    </Button>
  );
}

export default function SelectFile({
  selectedOption,
  handleUpload,
}: FileUploadProps) {
    console.log(selectedOption)
  return (
    <VerticalFlexBox>
      <ContainerCard
        header={cardHeader()}
        body={cardBody(selectedOption)}
        footer={cardFooter(handleUpload)}
        sx={{ width: "450px" }}
      />
    </VerticalFlexBox>
  );
}
