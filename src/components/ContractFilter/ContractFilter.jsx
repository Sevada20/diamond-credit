import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import styles from "./styles";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useState } from "react";

const ContractFilter = () => {
  const classes = styles();
  const [date, setDate] = useState(new Date());

  return (
    <div className={classes.contractFilter}>
      {/* */}
      <div className={classes.datePicker}>
        <Flatpickr
          data-enable-time
          value={date}
          onChange={(selectedDates) => setDate(selectedDates[0])}
          options={{
            dateFormat: "Y-m-d H:i",
          }}
        />
      </div>
      {/*  */}

      <div className={classes.inputsContainer}>
        <div className={classes.leftInputsContainer}>
          <div className={classes.inputsRow}>
            <div className={classes.leftInputGroup}>
              <label htmlFor="input1" className={classes.label}>
                Անուն
              </label>
              <input id="input1" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input2" className={classes.label}>
                Ազգանուն
              </label>
              <input id="input2" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input3" className={classes.label}>
                Հայրանուն
              </label>
              <input id="input3" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input4" className={classes.label}>
                Անձնագիր
              </label>
              <input id="input4" className={classes.leftInput} />
            </div>
          </div>

          <div className={classes.inputsRow}>
            <div className={classes.leftInputGroup}>
              <label htmlFor="input5" className={classes.label}>
                Հեռ․
              </label>
              <input id="input5" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input6" className={classes.label}>
                Գրավի տեսակ
              </label>
              <input id="input6" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input7" className={classes.label}>
                Որոշում
              </label>
              <input id="input7" className={classes.leftInput} />
            </div>

            <div className={classes.leftInputGroup}>
              <label htmlFor="input8" className={classes.label}>
                Կարգավիճակ
              </label>
              <select className={classes.leftInput}>
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
            <select className={classes.leftInput}>
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
                    className={classes.rightInput}
                    placeholder="10.000"
                  />
                </div>
              </div>
            </div>

            <div className={classes.rightInputGroup}>
              <label htmlFor="rightInput2" className={classes.label}>
                Գնահարված
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
                    className={classes.rightInput}
                    placeholder="10.000"
                  />
                </div>
              </div>
            </div>

            <div className={classes.rightInputGroup}>
              <label htmlFor="rightInput3" className={classes.label}>
                Ամսաթիվ
              </label>
              <div className={classes.inputWithIcon}>
                <span className={classes.subLabel}>Սկսած</span>
                <input
                  type="date"
                  id="rightInput3"
                  className={`${classes.rightInput} ${classes.dateInput}}`}
                />
              </div>
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
              <input className={classes.rightInput} placeholder="1.000.000" />
            </div>
            <div className={classes.inputWithIcon}>
              <img
                className={classes.coinIcon}
                src={coinIcon}
                alt="Coin icon"
              />
              <div>
                <span className={classes.subLabel}>Մինչև</span>
                <input className={classes.rightInput} placeholder="1.000.000" />
              </div>
            </div>
            <div className={classes.inputWithIcon}>
              <span className={classes.subLabel}>Մինչև</span>
              <input
                type="date"
                className={`${classes.rightInput} ${classes.dateInput}}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonsContainer}>
        <button className={classes.searchButton}>Որոնել</button>
        <button className={classes.cancelButton}>Չեղարկել</button>
      </div>
    </div>
  );
};

export default ContractFilter;
