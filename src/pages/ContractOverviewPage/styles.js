import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    pageContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      marginInline: 25,
    },
  }),
  {
    name: "contract-overview-page",
  }
);

export default useStyles;
