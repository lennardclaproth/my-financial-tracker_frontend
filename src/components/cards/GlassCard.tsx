import Card, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material";

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
    height: "100%",
    width: "100%",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    webKitBackgroundFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: theme.spacing(2),
  }));

export default function GlassCard(props: CardProps){
    return <StyledCard className={props.className}>{props.children}</StyledCard>
};
