import SendMoneyCard from "../../../components/SendMoneyCard";
import P2PTransactionCard from "../../../components/P2PTransaction";
import P2PBalanceCard from "../../../components/P2PBalance";

export default function P2P() {


  return (
    <div>
      <div className="flex gap-2 mt-3">
        <SendMoneyCard></SendMoneyCard>
        <P2PBalanceCard></P2PBalanceCard>
      </div>
      <div>
        <P2PTransactionCard></P2PTransactionCard>
      </div>
    </div>
  )
}
