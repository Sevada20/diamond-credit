import Branches from "../Branches/Branches";
import CollateralTypes from "../CollateralTypes/CollateralTypes";
import Duration from "../Duration/Duration";
import Percent from "../Percent/Percent";
import styles from "./styles";

const RenderConditionsSection = ({ activeSection }) => {
  const classes = styles();

  switch (activeSection) {
    case "percent":
      return <Percent />;
    case "duration":
      return <Duration />;
    case "collateralTypes":
      return <CollateralTypes />;
    case "branches":
      return <Branches />;
    default:
      break;
  }
};

export default RenderConditionsSection;
