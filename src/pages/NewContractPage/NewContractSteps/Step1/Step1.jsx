import styles from "./styles";

const Step1 = ({
  goToNextStep,
  countries,
  cities,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  const classes = styles();

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
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
            {...register("surName")}
          />
          {errors.surName && <p>{errors.surName.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Հայրանուն</label>
          <input
            placeholder="․․․"
            className={classes.input}
            {...register("patronymic")}
          />
          {errors.patronymic && <p>{errors.patronymic.message}</p>}
        </div>
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Անձնագրի սերիա</label>
          <input
            placeholder="OO 00000000"
            className={classes.input}
            {...register("passportSeries")}
          />
          {errors.passportSeries && <p>{errors.passportSeries.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Վավերականություն</label>
          <input
            placeholder="օր/ամիս/տարի"
            className={classes.input}
            {...register("validity")}
          />
          {errors.validity && <p>{errors.validity.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Տրված</label>
          <input
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
            placeholder="ՕՐ"
            {...register("birthdayDay")}
            className={classes.dateInput}
          />
          <input
            placeholder="ԱՄԻՍ"
            {...register("birthdayMonth")}
            className={classes.dateInput}
          />
          <input
            placeholder="ՏԱՐԻ"
            {...register("birthdayYear")}
            className={classes.dateInput}
          />
        </div>
      </div>

      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <label className={classes.label}>Երկիր</label>
          <select className={classes.input} {...register("country")}>
            {Object.keys(countries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p>{errors.country.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Քաղաք</label>
          <select className={classes.input} {...register("city")}>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div className={classes.inputWrapper}>
          <label className={classes.label}>Փողոց/շենք</label>
          <input
            placeholder="Գայի պ․ 51/5"
            className={classes.input}
            {...register("streetBuilding")}
          />
          {errors.streetBuilding && <p>{errors.streetBuilding.message}</p>}
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

      <div className={classes.buttonsContainer}>
        <button type="button" className={classes.cancelBtn}>
          Չեղարկել
        </button>
        <button type="submit" className={classes.submitBtn}>
          Պահպանել
        </button>
        <button
          onClick={goToNextStep}
          type="button"
          className={classes.continueBtn}
        >
          Շարունակել
        </button>
      </div>
    </form>
  );
};

export default Step1;
