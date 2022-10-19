import theme from "../../theme/Theme";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import HorizontalFlexBox from "../containers/HorizontalFlexBox";
import {
  Button,
  Divider,
  getTabsUtilityClass,
  SxProps,
  Tab,
  Tabs,
} from "@mui/material";
import VerticalFlexBox from "../containers/VerticalFlexBox";

interface customProps {
  setActiveView: (value: number) => void;
  activeView: number;
  sx: SxProps;
  functions?: any;
  tabs?: any;
  title: string;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getTabs(props: any) {
  return (
    <Tabs
      value={props.activeView}
      onChange={(event, value) => {
        console.log(value);
        props.setActiveView(value);
      }}
    >
      {props.tabs?.map((tab, index) => {
        return (
          <Tab
            key={`${tab.viewName}-${index}`}
            icon={tab.icon}
            iconPosition="start"
            label={tab.viewName}
            {...a11yProps(tab.index)}
            value={tab.index}
            sx={{
              minHeight: "3rem",
              borderRadius: "8px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              marginLeft: theme.spacing(1),
              "&:hover": { backgroundColor: "rgba(19, 42, 19, .03)" },
            }}
          />
        );
      })}
    </Tabs>
  );
}

// TODO: make into generic header component
// TODO: implement sx into props
const Header = (props: customProps) => {
  //   console.log(props);
  return (
    <VerticalFlexBox
      sx={[
        { width: "100%", height: "100%", padding: 0, margin: 0 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <HorizontalFlexBox sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4">{props.title}</Typography>
        {props.tabs ? (
          getTabs(props)
        ) : (
          <HorizontalFlexBox>{props.functions}</HorizontalFlexBox>
        )}
      </HorizontalFlexBox>
      <Divider />
    </VerticalFlexBox>
  );
};

export default Header;
