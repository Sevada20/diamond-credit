import { setPawnshopId } from "@/api/api";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/auth/slice";
import { useNavigate } from "react-router-dom";
import getText from "@/utils/texts";
import styles from "./styles";
const SignInSelectionPlaceStep = () => {
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelectPlace = async (pawnshopId) => {
    try {
      await setPawnshopId(pawnshopId);
      navigate("/");
    } catch (error) {
      console.error("Error setting pawnshop ID:", error);
    }
  };

  return (
    <div className={classes.signInSelectionPlaceStep}>
      <button
        onClick={() => handleSelectPlace(2)}
        className={`${classes.selectYerevanPawnshopIdBtn} ${classes.imgLink}`}
      >
        <span className={classes.placeName}>
          {getText("signInSelectionPlaceStep", "gyumri")}
        </span>
      </button>
      <button
        onClick={() => handleSelectPlace(1)}
        className={`${classes.selectGyumriPawnshopIdBtn} ${classes.imgLink}`}
      >
        <span className={classes.placeName}>
          {getText("signInSelectionPlaceStep", "yerevan")}
        </span>
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default SignInSelectionPlaceStep;
