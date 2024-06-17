import { useForm } from "react-hook-form";
import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import styles from "./styles";
const ContractFilter = () => {
  const classes = styles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateFrom: new Date(2024, 0, 1),
      dateTo: new Date(2024, 0, 1),
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
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.contractFilter}>
        <div className={classes.inputsContainer}>
          <div className={classes.leftInputsContainer}>
            <div className={classes.inputsRow}>
              <div className={classes.leftInputGroup}>
                <label htmlFor="input1" className={classes.label}>
                  Անուն
                </label>
                <input
                  type="text"
                  {...register("name")}
                  id="input1"
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input2" className={classes.label}>
                  Ազգանուն
                </label>
                <input
                  type="text"
                  {...register("surname")}
                  id="input2"
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input3" className={classes.label}>
                  Հայրանուն
                </label>
                <input
                  type="text"
                  {...register("patronymic")}
                  id="input3"
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input4" className={classes.label}>
                  Անձնագիր
                </label>
                <input
                  type="text"
                  {...register("passport")}
                  id="input4"
                  className={classes.leftInput}
                />
              </div>
            </div>

            <div className={classes.inputsRow}>
              <div className={classes.leftInputGroup}>
                <label htmlFor="input5" className={classes.label}>
                  Հեռ․
                </label>
                <input
                  {...register("phone")}
                  id="input5"
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input6" className={classes.label}>
                  Գրավի տեսակ
                </label>
                <input
                  type="text"
                  id="input6"
                  {...register("collateralType")}
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input7" className={classes.label}>
                  Որոշում
                </label>
                <input
                  type="text"
                  {...register("decision")}
                  id="input7"
                  className={classes.leftInput}
                />
              </div>

              <div className={classes.leftInputGroup}>
                <label htmlFor="input8" className={classes.label}>
                  Կարգավիճակ
                </label>
                <select {...register("status")} className={classes.leftInput}>
                  <option value="">Ընտրել Կարգավիճակը</option>
                  <option value="saab">Ընդհանուր</option>
                  <option value="mercedes">Ակտիվ</option>
                  <option value="audi">Փակված</option>
                  <option value="audi">Իրացված</option>
                  <option value="audi">Ժամկետանց</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="input9" className={classes.label}>
                Օգտատեր
              </label>
              <select {...register("user")} className={classes.leftInput}>
                <option value="">Ընտրել Օգտատեր</option>
              </select>
            </div>
          </div>

          <div className={classes.rightInputsContainer}>
            <div className={classes.rightInputsColumn}>
              <div className={classes.rightInputGroup}>
                <label htmlFor="rightInput1" className={classes.label}>
                  Տրամադրված
                </label>
                <div className={classes.inputWithIcon}>
                  <img
                    className={classes.coinIcon}
                    src={coinIcon}
                    alt="Coin icon"
                  />
                  <div className={classes.inputWithIcon}>
                    <span className={classes.subLabel}>Սկսած</span>
                    <input
                      id="rightInput1"
                      {...register("providedFrom")}
                      className={classes.rightInput}
                      placeholder="10.000"
                    />
                  </div>
                </div>
              </div>

              <div className={classes.rightInputGroup}>
                <label htmlFor="rightInput2" className={classes.label}>
                  Գնահատված
                </label>
                <div className={classes.inputWithIcon}>
                  <img
                    className={classes.coinIcon}
                    src={coinIcon}
                    alt="Coin icon"
                  />
                  <div className={classes.inputWithIcon}>
                    <span className={classes.subLabel}>Սկսած</span>
                    <input
                      id="rightInput2"
                      {...register("evaluatedFrom")}
                      className={classes.rightInput}
                      placeholder="10.000"
                    />
                  </div>
                </div>
              </div>

              <div className={classes.rightInputGroup}>
                <MyDatePicker
                  register={register}
                  name="dateFrom"
                  errors={errors}
                  label="Ամսաթիվ"
                  subLabel="Սկսած"
                />
              </div>
            </div>

            <div
              style={{ marginTop: 18, gap: 28 }}
              className={classes.rightInputsColumn}
            >
              <div className={classes.inputWithIcon}>
                <span className={classes.subLabel}>Մինչև</span>
                <img
                  className={classes.coinIcon}
                  src={coinIcon}
                  alt="Coin icon"
                />
                <input
                  {...register("providedTo")}
                  className={classes.rightInput}
                  placeholder="1.000.000"
                />
              </div>
              <div className={classes.inputWithIcon}>
                <img
                  className={classes.coinIcon}
                  src={coinIcon}
                  alt="Coin icon"
                />
                <div>
                  <span className={classes.subLabel}>Մինչև</span>
                  <input
                    {...register("evaluatedTo")}
                    className={classes.rightInput}
                    placeholder="1.000.000"
                  />
                </div>
              </div>
              <MyDatePicker
                subLabel="Մինչև"
                register={register}
                errors={errors}
                name="dateTo"
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
    </form>
  );
};

export default ContractFilter;
