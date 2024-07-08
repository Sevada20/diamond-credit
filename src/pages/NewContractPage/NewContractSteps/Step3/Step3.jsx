import CustomInput from "@/components/CustomInput/CustomInput";
import SearchIcon from "@/assets/icons/headerIcons/SearchIcon";
import styles from "./styles";
const Step3 = ({ register, errors }) => {
  const classes = styles();
  return (
    <div className={classes.step3container}>
      <div className={classes.searchInputWrapper}>
        <div className={classes.searchIconWrapper}>
          <SearchIcon />
        </div>
        <CustomInput
          customStyles={{ fontSize: 16, paddingLeft: 35 }}
          label="Տվյալների որոնում"
          name="searchUserBankData"
          register={register}
          placeholder="4830"
          errors={
            errors.searchUserBankData && errors.searchUserBankData.message
          }
        />
      </div>
      <div className={classes.inputsGroup}>
        <CustomInput
          customStyles={{ fontSize: 16 }}
          label="Բանկ"
          name="bank"
          register={register}
          placeholder="acba"
          errors={errors.bank && errors.bank.message}
        />
        <CustomInput
          customStyles={{ fontSize: 16 }}
          label="Քարտի համար(16 նիշ)"
          name="bankCardNumber"
          register={register}
          placeholder="xxxx xxxx xxxx xxxx"
          errors={errors.bankCardNumber && errors.bankCardNumber.message}
        />
        <CustomInput
          customStyles={{ fontSize: 16 }}
          label="Հաշվեհամար(15 նիշ)"
          name="bankAccountNumber"
          register={register}
          placeholder="00000 0000000000"
          errors={errors.bankAccountNumber && errors.bankAccountNumber.message}
        />
      </div>
    </div>
  );
};

export default Step3;
