import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    activeUsersListContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "16px",
      maxWidth: "100%",
      paddingTop: 30,
    },
  }),
  {
    name: "activeUsersList",
  }
);

export default useStyles;
