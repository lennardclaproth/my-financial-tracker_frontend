interface CashFlow {
  dateString: string;
  incoming: number;
  incomingDelta: number;
  netProfitLoss: number;
  netProfitLossDelta: number;
  outgoing: number;
  outgoingDelta: number;
}

interface Transaction {
  id: number;
  dateTimeUnix: number;
  importType: string;
  dateTime: Date;
  senderReceiver: string;
  amountInEur: number;
  balance: number;
  checksum: string;
  tagId: number;
  userId: number;
}

export type { CashFlow, Transaction };
