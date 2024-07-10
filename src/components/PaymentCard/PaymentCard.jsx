import fileIcon from "@/assets/icons/contractsIcons/fileIcon.svg";
import useStyles from "./styles";

const PaymentCard = ({
  id,
  isChecked,
  date,
  percent,
  fine,
  principalAmount,
  onCheckboxChange,
}) => {
  const classes = useStyles({ isChecked });

  return (
    <tr className={classes.paymentCardContainer}>
      <td className={classes.tableDateCell}>
        <span className={classes.paymentCardLabel}>{date}</span>
      </td>
      <td className={classes.tableCell}>{percent} Դ</td>
      <td className={classes.tableCell}>{fine} Դ</td>
      <td className={classes.tableCell}>
        {principalAmount && `${principalAmount} Դ`}
      </td>
      <td className={classes.tableCell}>Զեղչ</td>
      <td className={`${classes.tableCell} ${classes.fileIcon}`}>
        <img src={fileIcon} alt="file icon" />
      </td>
    </tr>
  );
};

export default PaymentCard;
