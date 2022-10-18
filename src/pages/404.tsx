import ImageCard from "../components/cards/ImageCard";
// import PageNotFoundImage from "../drawings/page-not-found.png";
import Image from "next/image";
import { Box } from "@mui/material";
// pages/404.js
export default function Custom404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        marginLeft:"-2rem",
        marginTop: "-5rem",
      }}
    >
      {/* <Image width={700} height={700} src={PageNotFoundImage}></Image> */}
    </Box>
  );
}
