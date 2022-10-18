import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import HorizontalFlexBox from "../containers/HorizontalFlexBox";
import { Button, Divider, SxProps } from "@mui/material";
import VerticalFlexBox from "../containers/VerticalFlexBox";

interface customProps {
  setActiveView: (value: string) => void;
  activeView: string;
  sx: SxProps;
  functions?: any;
  title: string;
}

// TODO: make into generic header component
// TODO: implement sx into props
const Header = (props: customProps) => {
  return (
    <VerticalFlexBox
      sx={[
        { width: "100%", height: "100%", padding: 0, margin:0 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <HorizontalFlexBox sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color={grey[800]}>
          {props.title}
        </Typography>
        <HorizontalFlexBox>{props.functions}</HorizontalFlexBox>
      </HorizontalFlexBox>
      <Divider />
    </VerticalFlexBox>
  );
};

export default Header;
