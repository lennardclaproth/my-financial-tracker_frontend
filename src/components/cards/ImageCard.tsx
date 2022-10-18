import Card, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material";
import { shouldForwardProp } from "@mui/styled-engine";
import Image, { StaticImageData } from "next/image";

const StyledCard = styled(Card, { shouldForwardProp })<CustomCardProps>(
  ({ theme, cardwidth, cardheight }) => ({
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: cardwidth,
    height: cardheight || "100%",
  })
);

interface CustomCardProps extends CardProps {
  cardheight?: string | number;
  cardwidth?: string | number;
  imageheight: string | number;
  imagewidth: string | number;
  image: StaticImageData;
  alt: string;
}

export default function ImageCard(props: CustomCardProps) {
  return (
      <StyledCard
        cardheight={props.cardheight}
        cardwidth={props.cardwidth}
        imageheight={props.imageheight}
        imagewidth={props.imagewidth}
        image={props.image}
        alt={props.alt}
        className={props.className}
        sx={[{},
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
          ]}
      >
        <Image
          src={props.image}
          width={props.imagewidth}
          height={props.imageheight}
          alt={props.alt}
        />
      </StyledCard>
  );
}
