import Card, { CardProps } from "@mui/material/Card";
import {
    Divider,
  Grid,
  iconButtonClasses,
  styled,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import {
  CropSquareRounded,
  EuroRounded,
  HorizontalRuleRounded,
  NorthEastRounded,
  SouthEastRounded,
} from "@mui/icons-material";
import theme from "../../theme/Theme";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

// TODO: cleanup implement inverted color and Icon as well, split component into more manageable chunks 

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "cardColor" && prop !== "fontColor" && prop !== "divider",
})<CustomCardProps>(({ theme, cardColor, fontColor, divider }) => ({
  background: divider ? "white" : cardColor,
  color: fontColor || grey[800],
  borderRadius: divider ? 0 :"16px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0)",
  backdropFilter: "blur(1px)",
  webKitBackgroundFilter: "blur(5px)",
  padding: divider ? 0 : theme.spacing(1),
  margin: divider ? 0 : theme.spacing(1),
  marginRight: divider ? theme.spacing(1) : 0, 
  marginLeft: divider ? theme.spacing(1) : 0,
  marginTop: divider ? theme.spacing(1) : 0
}));

interface CustomCardProps extends CardProps {
  cardColor: string;
  title: string;
  fontColor?: string;
  icon?: string;
  amount?: Number;
  percentage?: Number;
  divider?: boolean
  sx?:SxProps<Theme>;
}

function getIcon(percentage: Number | undefined) {
  const icon = {
    type: CropSquareRounded,
    color: theme.palette.grey[500],
  };

  if (typeof percentage !== "undefined") {
    if (percentage > 0) {
      icon.type = NorthEastRounded;
      icon.color = theme.palette.success.light;
    } else if (percentage < 0) {
      icon.type = SouthEastRounded;
      icon.color = theme.palette.error.light;
    } else if (percentage == 0) {
      icon.type = DragHandleRoundedIcon;
      icon.color = theme.palette.info.light;
    }
  }

  return icon;
}

export default function InfoCard(props: CustomCardProps) {
  const icon = getIcon(props.percentage);

  return (
    <StyledCard
      cardColor={props.cardColor}
      fontColor={props.fontColor}
      divider={props.divider}
      title={props.title}
      className={props.className}
      sx={[{},
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{fontWeight: "bold"}}>{props.title}</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            lineHeight: "1.75rem",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            <EuroRounded fontSize="inherit" />
            {props.amount?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </Typography>
        </Grid>
        {typeof props.percentage !== "undefined" && (
          <Grid item xs={true}>
            <Box display="flex" justifyContent="flex-end">
              <Typography
                variant="h6"
                sx={{
                  display: "inline-flex",
                  verticalAlign: "text-bottom",
                  boxSizing: "inherit",
                  textAlign: "center",
                  alignItems: "center",
                  color: props.divider? icon.color : props.fontColor
                }}
              >
                <SvgIcon
                  component={icon.type}
                  fontSize="inherit"
                  sx={{ color: icon.color }}
                />
                {props.percentage?.toFixed(2).toString()}%
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      {props.divider ? <Divider sx={{background: props.cardColor, height:"3px"}}/>: false}
    </StyledCard>
  );
}
