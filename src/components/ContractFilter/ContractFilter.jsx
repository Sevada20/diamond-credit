import { useState } from "react";
import { useForm } from "react-hook-form";
import { filtersFields } from "@/assets/data/filterFields";
import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import downloadIcon from "@/assets/icons/contractsIcons/downloadIcon.svg";
import filterIcon from "@/assets/icons/contractsIcons/filterIcon.svg";
import arrowUpIcon from "@/assets/icons/contractsIcons/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/contractsIcons/arrowDownIcon.svg";
import CustomInput from "../CustomInput/CustomInput";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import styles from "./styles";
import CustomSelector from "../CustomSelector/CustomSelector";
const ContractFilter = () => {
  const classes = styles();
  const [showFilters, setShowFilters] = useState(false);
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
      dateFrom: new Date(2024, 0, 1),
      dateTo: new Date(2024, 0, 1),
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.controlsBar}>
        <div className={classes.buttonBlock}>
          <img src={downloadIcon} alt="download icon" />
          <span>ներբեռնել</span>
        </div>
        <div
          onClick={() => setShowFilters(!showFilters)}
          className={classes.buttonBlock}
        >
          <img src={filterIcon} alt="Filter icon" />
          <span>ֆիլտռել</span>
          {showFilters ? (
            <img src={arrowUpIcon} alt="arrow icon" />
          ) : (
            <img src={arrowDownIcon} alt="arrow icon" />
          )}
        </div>
      </div>
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
                  setValue={setValue}
                />
              </div>
              <div className={classes.rightInputGroup}>
                <MyDatePicker
                  subLabel="Մինչև"
                  register={register}
                  errors={errors}
                  name="dateTo"
                  value={watch("dateTo")}
                  setValue={setValue}
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
