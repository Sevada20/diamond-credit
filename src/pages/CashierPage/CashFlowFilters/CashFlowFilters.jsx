import { useForm } from "react-hook-form";
import { filtersFields } from "@/assets/data/filterFields";
import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import styles from "./styles";
import CustomInput from "@/components/CustomInput/CustomInput";
import CustomSelector from "@/components/CustomSelector/CustomSelector";
import MyDatePicker from "@/components/MyDatePicker/MyDatePicker";
const CashFlowFilters = ({ showFilters }) => {
  const classes = styles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      patronymic: "",
      passport: "",
      phone: "",
      collateralType: "",
      delay: "",
      status: "",
      user: "",
      providedFrom: "",
      providedTo: "",
      evaluatedFrom: "",
      evaluatedTo: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDateChange =
    (name) =>
    ([selectedDate]) => {
      setValue(name, selectedDate);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.contractFilter}>
        <div className={classes.inputsContainer}>
          <div>
            <div className={classes.leftInputsContainer}>
              {filtersFields.cashFlowFilterInputs.map((input) => (
                <CustomInput
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  name={input.name}
                  register={register}
                />
              ))}
            </div>
            <div className={classes.selectorsContainer}>
              <CustomSelector
                options={filtersFields.userSelectorOptions}
                label="Գրավի տեսակ"
                name="collateralType"
                defaultValue="Ընտրել տեսակ"
                register={register}
              />
              <CustomSelector
                options={filtersFields.statusSelectorOptions}
                label="Կարգավիճակ"
                name="status"
                defaultValue="Ընտրել կարգավիճակ"
                register={register}
              />
              <CustomSelector
                options={filtersFields.userSelectorOptions}
                label="Օգտատեր"
                name="user"
                defaultValue="Ընտրել օգտատեր"
                register={register}
              />
            </div>
          </div>

          <div className={classes.rightInputsContainer}>
            <div className={classes.rightInputs}>
              {filtersFields.filterInputsSizeMoney.map((input) => (
                <div key={input.id} className={classes.rightInputGroupItem}>
                  <label htmlFor={input.id} className={classes.label}>
                    {input.label}
                  </label>
                  <div className={classes.inputWithIcon}>
                    <img
                      className={classes.coinIcon}
                      src={coinIcon}
                      alt="Coin icon"
                    />
                    <div className={classes.inputWithIcon}>
                      <span className={classes.subLabel}>{input.subLabel}</span>
                      <input
                        id={input.id}
                        {...register(input.name)}
                        className={classes.rightInput}
                        placeholder={input.placeholder}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.dateInputsContainer}>
              <div className={classes.inputWithIcon}>
                <MyDatePicker
                  register={register}
                  name="dateFrom"
                  errors={errors}
                  label="Ամսաթիվ"
                  subLabel="Սկսած"
                  value={watch("dateFrom")}
                  onChange={handleDateChange("dateFrom")}
                />
              </div>
              <div className={classes.inputWithIcon}>
                <MyDatePicker
                  subLabel="Մինչև"
                  register={register}
                  errors={errors}
                  name="dateTo"
                  value={watch("dateTo")}
                  onChange={handleDateChange("dateTo")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <button type="button" className={classes.cancelButton}>
            Չեղարկել
          </button>
          <button type="submit" className={classes.searchButton}>
            Որոնել
          </button>
        </div>
      </div>
    </form>
  );
};

export default CashFlowFilters;
