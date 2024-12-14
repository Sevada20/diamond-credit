import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    calendarWithEvents: {
      display: "flex",
      padding: 20,
      background: "#f9f9f9",
      borderRadius: 10,
    },
    calendarContainer: {
      flex: 1,
      paddingRight: 20,
    },
    eventsList: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    eventItem: {
      display: "flex",
      alignItems: "center",
      padding: 10,
      borderBottom: "1px solid #eee",
    },
    eventIcon: {
      fontSize: 24,
      marginRight: 10,
    },
    eventDetails: {
      display: "flex",
      flexDirection: "column",
    },
    eventTitle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    eventDate: {
      fontSize: 14,
      color: "#666",
    },
    eventType: {
      fontSize: 12,
      color: "#999",
    },
    dot: {
      height: 6,
      width: 6,
      backgroundColor: "#ff4d4f",
      borderRadius: "50%",
      margin: "3px auto",
    },
  },
  { name: "calendar-section" }
);

export default useStyles;
