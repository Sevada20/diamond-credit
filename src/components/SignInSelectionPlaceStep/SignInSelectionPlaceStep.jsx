import { Link } from "react-router-dom";

import styles from "./styles";
import getText from "../../utils/texts";
const SignInSelectionPlaceStep = () => {
  const classes = styles();

  return (
    <div className={classes.signInSelectionPlaceStep}>
      <Link className={`${classes.yerevanImgLink} ${classes.imgLink}`} to="/">
        <span className={classes.placeName}>
          {getText("signInSelectionPlaceStep", "gyumri")}
        </span>
      </Link>
      <Link className={`${classes.gyumriImgLink} ${classes.imgLink}`} to="/">
        <span className={classes.placeName}>
          {getText("signInSelectionPlaceStep", "yerevan")}
        </span>
      </Link>
    </div>
  );
};

export default SignInSelectionPlaceStep;
