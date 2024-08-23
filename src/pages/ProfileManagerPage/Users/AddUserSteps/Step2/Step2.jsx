import { adminAdvantagesCheckboxes } from "@/assets/data/advantageCheckboxes";
import hideAdvantagesIcon from "@/assets/icons/iconMinus.svg";
import styles from "./styles";
import { useState } from "react";
import PlusIcon from "../../../../../assets/icons/PlusIcon";
const Step2 = ({ register }) => {
  const classes = styles();
  const [openBlocks, setOpenBlocks] = useState({});

  const toggleBlock = (id) => {
    setOpenBlocks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={classes.step1Container}>
      <span className={classes.title}>Արտոնություններ</span>
      <p className={classes.description}>
        Այստեղ կարող եք ավելացնել հավելյալ արտոնություններ
      </p>
      <div className={classes.advantagesContainer}>
        {adminAdvantagesCheckboxes.map((item) => (
          <div key={item.id} className={classes.advantagesBlock}>
            <div
              onClick={() => toggleBlock(item.id)}
              className={classes.showAdvantagesButton}
            >
              <div className={classes.showAdvantageIconWrapper}>
                {openBlocks[item.id] ? (
                  <img src={hideAdvantagesIcon} alt="hide advantages" />
                ) : (
                  <PlusIcon color="white" />
                )}
              </div>
              <span className={classes.label}>{item.label}</span>
            </div>
            {openBlocks[item.id] && (
              <div className={classes.advantagesList}>
                {item.checkboxes.map((advantage) => (
                  <div className={classes.advantage} key={advantage.id}>
                    <input
                      id={advantage.name}
                      {...register(advantage.name)}
                      className={classes.checkbox}
                      type="checkbox"
                    />
                    <label htmlFor={advantage.name} className={classes.label}>
                      {advantage.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
