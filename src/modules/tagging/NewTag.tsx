import { Button, TextField, Typography } from "@mui/material";
import ImageCard from "components/cards/ImageCard";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import Right from "components/Drawers/Right";
import Header from "components/headers/Header";
import { taggingButtons } from "modules/cash-flow/static-data/Views";
import { useState } from "react";
import theme from "theme/Theme";
import tag from "illustrations/illustrations-svg/tag.svg";

export default function NewTag(props) {
    const [activeTagView, setActiveTagView] = useState(1);

  return (
    <Right
      open={props.drawerActive}
      onClose={() => {
        props.setDrawerActive(false);
      }}
    >
      <HorizontalFlexBox sx={{ width: "100%" }}>
        <Header
          title={"Tagging"}
          activeView={activeTagView}
          setActiveView={setActiveTagView}
          tabs={taggingButtons}
          sx={{
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            marginTop: theme.spacing(3),
          }}
        />
      </HorizontalFlexBox>
      <HorizontalFlexBox sx={{ justifyContent: "center" }}>
        <ImageCard
          cardheight={"200px"}
          cardwidth={"400px"}
          imageheight={"200px"}
          imagewidth={"400px"}
          image={tag}
          alt={"fileArrowUploadGreen"}
          sx={{ boxShadow: "none", padding: 0 }}
        />
      </HorizontalFlexBox>
      <HorizontalFlexBox sx={{ padding: 0 }}>
        <VerticalFlexBox>
          <Typography variant="h6" paragraph align="center">
            Welcome to the tagging page!
          </Typography>
          <Typography variant="body1" paragraph align="center">
            You can select a tag from the select field or create a new one.
          </Typography>
        </VerticalFlexBox>
      </HorizontalFlexBox>
      <HorizontalFlexBox>
        {/* <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        size="large"
                        // startIcon={<FileOpenRounded />}
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
                        new Tag
                      </Button> */}
        {/* <SelectList /> */}
        <TextField
          error={false}
          id="standard-error-helper-text"
          label="Give your tag a name"
          variant="standard"
          required
        />
      </HorizontalFlexBox>
    </Right>
  );
}
