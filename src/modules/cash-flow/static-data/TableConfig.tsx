import InfoCard from "components/cards/InfoCard";
import ImageCard from "components/cards/ImageCard";

const columnProps = [
  {
    accessor: "id",
    type: "string",
    isVisible: false,
    customComponent: false,
  },
  {
    accessor: "tagId",
    Header: "Tag",
    isVisible: true,
    type: "object",
    customComponent: (props: any) => <InfoCard {...props}>test</InfoCard>,
    propMapping: {
      iconColor: "tagColor",
      iconName: "iconName",
    },
  },
  {
    accessor: "importType",
    Header: "Type of bank",
    type: "image",
    isVisible: true,
    minWidth: 30,
    width:30,
    maxWidth:30,
    customComponent: (props: any) => (
      <ImageCard
        {...props}
        cardwidth={"40px"}
        cardheight={"40px"}
        sx={{ boxShadow: "none", padding:.5, borderRadius: "6px" }}
      ></ImageCard>
    ),
  },
  {
    accessor: "userId",
    type: "number",
    isVisible: false,
    customComponent: false,
  },
  {
    accessor: "dateTimeUnix",
    type: "number",
    isVisible: false,
    customComponent: false,
  },
  {
    accessor: "checksum",
    type: "string",
    isVisible: false,
    customComponent: false,
  },
  {
    accessor: "balance",
    type: "number",
    isVisible: false,
    customComponent: false,
  },
  {
    accessor: "senderReceiver",
    Header: "Omschrijving",
    type: "string",
    isVisible: true,
    customComponent: false,
  },
  {
    accessor: "dateTime",
    Header: "Date of transaction",
    type: "date",
    isVisible: true,
    customComponent: false,
  },
  {
    accessor: "amountInEur",
    Header: "Transaction amount ",
    type: "eur",
    isVisible: true,
    customComponent: false,
  },
];

export { columnProps };
