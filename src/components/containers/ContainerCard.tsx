import Card, { CardProps } from "@mui/material/Card";
import { styled, SxProps } from "@mui/material";
import { shouldForwardProp } from "@mui/styled-engine";
import { Component, ReactElement } from "react";

const StyledCard = styled(Card, { shouldForwardProp })<CustomCardProps>(
  ({ theme }) => ({
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    padding: theme.spacing(3),
    height: "100%",
  })
);

interface CustomCardProps extends CardProps {
  header?: ReactElement<any>;
  body: ReactElement<any>[] | ReactElement<any>;
  footer?: ReactElement<any>;
  sx?: SxProps;
  className?: string;
}

export default function ContainerCard({
  header,
  body,
  footer,
  sx,
  className
}: CustomCardProps) {
  return (
    <StyledCard
      className={className}
      body={body}
      sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {header}
      {body}
      {footer}
    </StyledCard>
  );
}
