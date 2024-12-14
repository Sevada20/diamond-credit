import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    capacityContainer: {},
    capacity: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    indicatorContainer: {
      display: "flex",
      height: 3,
      marginTop: 5,
    },
    capacityIndicator: {
      borderRadius: 1,
      backgroundColor: theme.primaryColor,
    },
    remainingCapacity: {
      borderRadius: 1,
      backgroundColor: theme.backgroundInput,
    },
  }),
  {
    name: "capacity",
  }
);

export default useStyles;
