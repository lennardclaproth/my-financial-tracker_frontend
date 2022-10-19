import {
  MenuItem,
  Typography,
} from "@mui/material";
import ImageCard from "components/cards/ImageCard";
import { ImportOptionsProps } from "../types";
import VerticalFlexBox from "components/containers/VerticalFlexBox";
import ContainerCard from "components/containers/ContainerCard";
import { grey } from "@mui/material/colors";
import person from "illustrations/illustrations-svg/triangles-boxes-circles-person.svg";
import HorizontalFlexBox from "components/containers/HorizontalFlexBox";
import theme from "theme/Theme"; 

function cardHeader() {
  return (
    <ImageCard
      cardheight={"200px"}
      cardwidth={"400px"}
      imageheight={"200px"}
      imagewidth={"400px"}
      image={person}
      alt={"bankImage"}
      sx={{ boxShadow: "none", padding: 0, marginLeft: theme.spacing(-1) }}
    />
  );
}

function cardBody() {
    return (
      <VerticalFlexBox sx={{padding:0, marginTop: theme.spacing(3)}}>
        <Typography variant="h3" align="center">
          Welcome!
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 0, color: grey[600] }}
          align="center"
        >
          Please select a bank from which you want to upload a file with
          transactions.
        </Typography>
      </VerticalFlexBox>
    );
  }

function cardFooter({options, handleClick}:ImportOptionsProps) {
  return (
    <HorizontalFlexBox
      sx={{
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {options.map((option, index) => {
        return (
          <VerticalFlexBox key={index} sx={{ width: "30%", padding: 0 }}>
            <MenuItem
              sx={{
                borderRadius: "10px",
                padding: 1,
                margin: "auto",
                mt: 0,
                width: "100px",
                height: "100px",
              }}
              onClick={() => handleClick(option)}
            >
              <ImageCard
                cardheight={"80px"}
                cardwidth={"80px"}
                imageheight={option.height}
                imagewidth={option.width}
                image={option.image}
                alt={option.alt}
                sx={{
                  padding: 0,
                  boxShadow: "none",
                  borderRadius: "6px",
                  margin: "auto",
                }}
              />
            </MenuItem>
          </VerticalFlexBox>
        );
      })}
    </HorizontalFlexBox>
  );
}

function SelectBank({ handleClick, options }: ImportOptionsProps) {
  return (
    <VerticalFlexBox>
      <ContainerCard
        sx={{ overflow: "auto", width: "450px", height: "100%" }}
        header={cardHeader()}
        body={cardBody()}
        footer={cardFooter({options, handleClick})}
      ></ContainerCard>
    </VerticalFlexBox>
  );
}

export default SelectBank;
