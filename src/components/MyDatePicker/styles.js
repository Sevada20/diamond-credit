import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    flatpickrInput: {
      backgroundColor: "transparent",
      width: "100%",
      borderRadius: theme.borderRadius.small,
      border: `1px solid ${theme.textStrong}`,
      padding: 10,
      paddingLeft: "30px",
      marginTop: 6,
    },
    inputWithIcon: {
      position: "relative",
    },
    dateIcon: {
      position: "absolute",
      top: "55%",
      left: 12,
      transform: "translateY(-50%)",
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    subLabel: {
      fontSize: 8,
      color: theme.textStrong,
      position: "absolute",
      background: ({ customStyle }) =>
        customStyle ? customStyle : theme.backgroundSecondary,
      paddingInline: 6,
      left: 12,
    },
  }),
  {
    name: "my-date-picker",
  }
);

export default useStyles;
