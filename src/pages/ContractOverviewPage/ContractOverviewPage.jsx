import PaymentsList from "@/components/PaymentsList/PaymentsList";
import { paymentsList } from "@/assets/data/payments";
import styles from "./styles";

const ContractOverviewPage = () => {
  const classes = styles();
  return (
    <div className={classes.pageContainer}>
      <PaymentsList payments={paymentsList} />
    </div>
  );
};

export default ContractOverviewPage;
