import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import styles from "./styles";

const Step1 = ({
  goToNextStep,
  countries,
  armenianCities,
  register,
  errors,
  trigger,
  control,
  watch,
}) => {
  const classes = styles();

  const country = watch("country");

  const onBlurValidation = async (field) => {
    await trigger(field);
  };

  return (
    <form className={classes.formContainer}>
      <div className={classes.inputWrapper}>
        <label className={classes.label}>Հաճախորդի որոնում</label>
        <input
          placeholder="Արմինե Մինասյան"
          className={classes.input}
          {...register("clientsSearch")}
        />
        {errors.clientsSearch && <p>{errors.clientsSearch.message}</p>}
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Անուն</label>
          <input
            placeholder="Արմինե"
            className={classes.input}
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Մինասյան</label>
          <input
            placeholder="Ազգանուն"
            className={classes.input}
            {...register("surname")}
          />
          {errors.surname && <p>{errors.surname.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Հայրանուն</label>
          <input
            placeholder="..."
            className={classes.input}
            {...register("middle_name")}
          />
          {errors.middle_name && <p>{errors.middle_name.message}</p>}
        </div>
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Անձնագրի սերիա</label>
          <input
            maxLength={10}
            placeholder="OO 00000000"
            className={classes.input}
            {...register("passport")}
          />
          {errors.passport && <p>{errors.passport.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Վավերականություն</label>
          <Controller
            name="validity"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputMask
                {...field}
                mask="99.99.9999"
                placeholder="օր.ամիս.տարի"
                className={classes.input}
                onBlur={() => onBlurValidation("validity")}
              >
                {(inputProps) => <input type="text" {...inputProps} />}
              </InputMask>
            )}
          />
          {errors.validity && <p>{errors.validity.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Տրված</label>
          <input
            maxLength={3}
            placeholder="000"
            className={classes.input}
            {...register("given")}
          />
          {errors.given && <p>{errors.given.message}</p>}
        </div>
      </div>

      <div className={classes.dateInputsWrapper}>
        <label className={classes.label}>Ծննդյան տարեթիվ</label>
        <div className={classes.dateInputs}>
          <input
            maxLength={2}
            placeholder="ՕՐ"
            {...register("dobDay")}
            className={classes.dateInput}
          />
          <input
            maxLength={2}
            placeholder="ԱՄԻՍ"
            {...register("dobMonth")}
            className={classes.dateInput}
          />
          <input
            maxLength={4}
            placeholder="ՏԱՐԻ"
            {...register("dobYear")}
            className={classes.dateInput}
          />
        </div>
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Երկիր</label>
          <select className={classes.input} {...register("country")}>
            {countries.map((country) => (
              <option key={country.id} value={country.englishName}>
                {country.armenianName}
              </option>
            ))}
          </select>
          {errors.country && <p>{errors.country.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Քաղաք</label>
          {country === "Armenia" ? (
            <label>
              <select {...register("city")} className={classes.input}>
                <option value="">Երևան</option>
                {armenianCities.map((city) => (
                  <option key={city.id} value={city.englishName}>
                    {city.armenian}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <label>
              <input
                className={classes.input}
                type="text"
                {...register("city")}
                placeholder={
                  country === "Armenia"
                    ? "Երևան"
                    : country == "Georgia"
                    ? "Թբիլիսի"
                    : country == "Russia"
                    ? "Մոսկվա"
                    : "Թեհրան"
                }
              />
            </label>
          )}

          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Փողոց/շենք</label>
          <input
            placeholder="Գայի պ․ 51/5"
            className={classes.input}
            {...register("street")}
          />
          {errors.street && <p>{errors.street.message}</p>}
        </div>
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Էլ․ հասցե</label>
          <input
            placeholder="xxxxxxxx@gmail.com"
            className={classes.input}
            type="email"
            {...register("email")}
            onBlur={() => onBlurValidation("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Հեռախոսահամար</label>
          <input
            placeholder="(374)00 00 00 00"
            className={classes.input}
            {...register("phone")}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Լրացուցիչ</label>
          <input
            placeholder="(374)00 00 00 00"
            className={classes.input}
            {...register("additionalPhone")}
          />
          {errors.additionalPhone && <p>{errors.additionalPhone.message}</p>}
        </div>
      </div>
    </form>
  );
};

export default Step1;
