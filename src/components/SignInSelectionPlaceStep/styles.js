import { createUseStyles } from "react-jss";
import YerevanImg from "../../assets/images/Yerevan.png";
import GyumriImg from "../../assets/images/Gyumri.png";

const baseStylesLinkImg = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px 0px 30px 30px",
};

const useStyles = createUseStyles(
  (theme) => ({
    signInSelectionPlaceStep: {
      display: "flex",
      alignItems: "center",
      margin: "0 auto",
    },
    imgLink: {
      width: "210px",
      height: "278px",
      margin: "10px",
      textDecoration: "none",
    },
    gyumriImgLink: {
      backgroundImage: `url(${GyumriImg})`,
      borderLeft: `4px solid ${theme.textBase}`,
      borderBottom: `4px solid ${theme.textBase}`,
      ...baseStylesLinkImg,
    },
    yerevanImgLink: {
      backgroundImage: `url( ${YerevanImg})`,
      borderLeft: `4px solid ${theme.textBase}`,
      borderBottom: `4px solid ${theme.textBase}`,
      ...baseStylesLinkImg,
    },
    placeName: { fontSize: "2rem", color: theme.textBase, fontWeight: 600 },
  }),
  {
    name: "signIn-selection-place-step",
  }
);

export default useStyles;
