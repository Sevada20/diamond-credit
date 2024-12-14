import { useState } from "react";
import getText from "@/utils/texts";
import SignInForm from "@/components/SignInForm/SignInForm";
import styles from "./styles";
const SignInMainStep = ({ nextStep }) => {
  const classes = styles();
  const [activeOption, setActiveOption] = useState("signIn");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={classes.signInFormWrapper}>
      <h1 className={classes.title}>{getText("signInMainStep", "welcome")}</h1>
      <div className={classes.authOptionBlock}>
        <span
          style={{
            borderBottom: activeOption === "signIn" ? "2px solid #fff" : "",
          }}
          onClick={() => handleOptionClick("signIn")}
          className={classes.authOption}
        >
          {getText("signInMainStep", "signIn")}
        </span>
        <span
          style={{
            borderBottom: activeOption === "signUp" ? "2px solid #fff" : "",
          }}
          onClick={() => handleOptionClick("signUp")}
          className={classes.authOption}
        >
          {getText("signInMainStep", "signUp")}
        </span>
      </div>
      <SignInForm nextStep={nextStep} />
    </div>
  );
};

export default SignInMainStep;
