import Card, { CardProps } from "@mui/material/Card";
import {
  styled,
  Typography,
} from "@mui/material";
import theme from "../../theme/Theme";
import { Box } from "@mui/system";
import { TooltipProps } from "recharts/types/component/Tooltip";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import moment from "moment";

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "cardColor" && prop !== "fontColor",
})<CustomCardProps>(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  borderRadius: "16px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(1px)",
  webKitBackgroundFilter: "blur(5px)",
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  minWidth: "11rem",
}));

interface CustomCardProps extends CardProps {
  tooltipprops: TooltipProps<ValueType, NameType>;
  tooltipcolorkey: string;
}
// TODO: cleanup and change fontcolor
export default function ToolTipComponent(props: CustomCardProps) {
  return (
    <StyledCard
      tooltipprops={props.tooltipprops}
      tooltipcolorkey={props.tooltipcolorkey}
    >
      <Typography variant="subtitle1" color={theme.palette.primary.main}>{moment(props.tooltipprops.label).format("MMM YYYY")}</Typography>
      {props.tooltipprops.payload?.map((payloadItem, index) => {
        return (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            key={index}
          >
            <Typography
              variant="subtitle2"
              color={
                props.tooltipcolorkey === "fill"
                  ? payloadItem.payload.fill
                  : //   @ts-ignore
                    payloadItem.stroke
              }
            >
              {payloadItem.name}
            </Typography>
            <Box display="flex">
              <Typography
                variant="subtitle2"
                sx={{
                  display: "inline-flex",
                  verticalAlign: "text-bottom",
                  boxSizing: "inherit",
                  textAlign: "center",
                  alignItems: "center",
                }}
                color={
                  props.tooltipcolorkey === "fill"
                    ? payloadItem.payload.fill
                    : //   @ts-ignore
                      payloadItem.stroke
                }
              >
                {`€ ${payloadItem.value?.toLocaleString()}`}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </StyledCard>
  );
}
