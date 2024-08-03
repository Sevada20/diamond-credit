import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/auth/slice";
import { selectAuthData } from "@/store/slices/auth/slice";
import * as Yup from "yup";
import PasswordIcon from "@/assets/icons/signInIcons/PasswordIcon";
import UserIcon from "@/assets/icons/signInIcons/UserIcon";
import showPasswordIcon from "@/assets/icons/signInIcons/showPasswordIcon.svg";
import getText from "@/utils/texts";
import InputField from "../InputField/InputField";
import styles from "./styles";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
});
const SignInForm = ({ nextStep }) => {
  const classes = styles();
  const { user } = useSelector(selectAuthData);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role === "admin") {
      nextStep();
    } else if (user && user.role === "user") {
      navigate("/");
    }
  }, [user, navigate, nextStep]);

  const loginHandler = (values) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberPassword: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        loginHandler(values);
      }}
    >
      {({ errors, touched, values, handleChange }) => {
        return (
          <Form className={classes.signInForm}>
            <InputField
              label={getText("signInForm", "emailLabel")}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="kolian.karine@gmail.com"
              icon={UserIcon}
              error={errors?.email && touched?.email ? errors.email : null}
            />
            <InputField
              handlePasswordVisible={() => setPasswordVisible(!passwordVisible)}
              passwordVisible={passwordVisible}
              label={getText("signInForm", "passwordLabel")}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="153874wd354*"
              icon={PasswordIcon}
              showPasswordIcon={showPasswordIcon}
              error={
                errors?.password && touched?.password ? errors.password : null
              }
            />

            <div className={classes.formPasswordActions}>
              <div className={classes.checkboxGroup}>
                <Field
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
                  checked={values.rememberPassword}
                  className={classes.checkbox}
                  onChange={handleChange}
                />
                <label
                  className={classes.checkboxLabel}
                  htmlFor="rememberPassword"
                >
                  {getText("signInForm", "rememberPassword")}
                </label>
              </div>
              <span className={classes.forgotPassword}>
                {getText("signInForm", "forgotPassword")}
              </span>
            </div>
            <div className={classes.signInBtnWrapper}>
              <button className={classes.signInBtn} type="submit">
                {getText("signInForm", "signInButton")}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
