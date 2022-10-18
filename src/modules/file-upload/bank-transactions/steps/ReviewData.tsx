import { Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ImageCard from "components/cards/ImageCard";
import ContainerCard from "components/containers/ContainerCard";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import flag from "illustrations/illustrations-svg/flag-2.svg";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import theme from "theme/Theme";

// TODO: add typings

function getHeader() {
  return (
    <ImageCard
      image={flag}
      sx={{ boxShadow: "none" }}
      cardheight={"200px"}
      imageheight={"200px"}
      imagewidth={"400px"}
      alt={""}
    />
  );
}

function getBody() {
  return (
    <VerticalFlexBox sx={{padding:0}}>
      <Typography variant="h6" paragraph sx={{ color: grey[700] }} align="center">
        Almost done!
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: grey[600] }}
        align="center"
      >
        You can now decide to preview your data and check it before you upload
        it, save it by clicking the save button or discard it.
      </Typography>
    </VerticalFlexBox>
  );
}

function getFooter(activeOption) {
  return (
    <VerticalFlexBox sx={{padding:0}}>
      <Button
        variant="contained"
        component="label"
        color="primary"
        size="large"
        fullWidth
        // disabled={activeOption.fileHandler.mappedData.length <= 0}
        sx={{
          borderRadius: "10px",
          color: theme.palette.secondary.main,
        }}
        disableElevation
        startIcon={<SaveRoundedIcon />}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        component="label"
        color="primary"
        size="large"
        fullWidth
        // disabled={activeOption.fileHandler.mappedData.length <= 0}
        sx={{
          borderRadius: "10px",
          mt: 1,
          // color: theme.palette.secondary.main,
        }}
        disableElevation
        startIcon={<VisibilityRoundedIcon />}
        onClick={() => setPreviewActive(true)}
      >
        preview
      </Button>
      <Button
        variant="text"
        component="label"
        color="error"
        size="large"
        fullWidth
        disableElevation
        sx={{
          borderRadius: "10px",
          mt: 1,
          // color: theme.palette.secondary.main,
        }}
        startIcon={<DeleteRoundedIcon />}
      >
        Discard
      </Button>
    </VerticalFlexBox>
  );
}

export default function ReviewData({ activeOption, saveData, previewData, discardData }) {
  return (
    <VerticalFlexBox sx={{ alignItems: "center" }}>
      <ContainerCard
        header={getHeader()}
        body={getBody()}
        footer={getFooter(activeOption)}
        sx={{ width: "450px" }}
      />
    </VerticalFlexBox>
  );
}
