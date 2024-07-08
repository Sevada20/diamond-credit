import { useForm } from "react-hook-form";
import { filtersFields } from "@/assets/data/filterFields";
import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import CustomInput from "../CustomInput/CustomInput";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import CustomSelector from "../CustomSelector/CustomSelector";
import styles from "./styles";
const ContractFilter = ({ showFilters }) => {
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
      decision: "",
      status: "",
      user: "",
      providedFrom: "",
      evaluatedFrom: "",
      providedTo: "",
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
      {showFilters && (
        <div className={classes.contractFilter}>
          <div className={classes.inputsContainer}>
            <div className={classes.leftInputsContainer}>
              {filtersFields.filterInputs.map((input) => (
                <CustomInput
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  name={input.name}
                  register={register}
                />
              ))}

              <CustomSelector
                options={filtersFields.statusSelectorOptions}
                label="Կարգավիճակ"
                name="status"
                defaultValue="Ընտրել կարգավիճակ"
                register={register}
              />
              <div className={classes.customSelectorWrapper}>
                <CustomSelector
                  options={filtersFields.userSelectorOptions}
                  label="Օգտատեր"
                  name="user"
                  defaultValue="Ընտրել Օգտատեր"
                  register={register}
                />
              </div>
            </div>

            <div className={classes.rightInputsContainer}>
              {filtersFields.filterInputsSizeMoney.map((input) => (
                <div key={input.id} className={classes.rightInputGroup}>
                  <label htmlFor="rightInput2" className={classes.label}>
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
                        id="rightInput2"
                        {...register(input.name)}
                        className={classes.rightInput}
                        placeholder="10.000"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className={classes.rightInputGroup}>
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
              <div className={classes.rightInputGroup}>
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
          <div className={classes.buttonsContainer}>
            <button type="submit" className={classes.searchButton}>
              Որոնել
            </button>
            <button type="button" className={classes.cancelButton}>
              Չեղարկել
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContractFilter;
