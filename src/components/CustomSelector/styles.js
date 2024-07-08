import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    selector: {
      width: "100%",
    },
    label: {
      fontSize: ({ customStyles }) => customStyles.fontSize,
      fontWeight: ({ customStyles }) => customStyles.fontWeight,
      color: theme.primaryColor,
    },
    select: {
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: theme.borderRadius.small,
      border: "none",
      padding: 10,
      marginTop: 6,
    },
  }),
  {
    name: "custom-selector",
  }
);

export default useStyles;
