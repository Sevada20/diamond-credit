// import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
// import styles from "./styles";

// const events = [
//   {
//     date: new Date(2024, 1, 6),
//     title: "Համալսարաններ",
//     type: "Կրթական",
//   },
//   {
//     date: new Date(2024, 1, 10),
//     title: "Համալսարաններ",
//     type: "Կրթական",
//   },
//   {
//     date: new Date(2024, 1, 22),
//     title: "Համալսարաններ",
//     type: "Կրթական",
//   },
//   {
//     date: new Date(2024, 1, 26),
//     title: "Համալսարաններ",
//     type: "Կրթական",
//   },
// ];

// const CalendarWithEvents = () => {
//   const classes = styles();
//   const renderTileContent = ({ date, view }) => {
//     if (view === "month") {
//       const event = events.find(
//         (e) => e.date.toDateString() === date.toDateString()
//       );
//       if (event) {
//         return <div className="dot"></div>;
//       }
//     }
//   };

//   return (
//     <div className={classes.calendarWithEvents}>
//       <div className={classes.calendarContainer}>
//         <Calendar tileContent={renderTileContent} />
//       </div>
//       <div className={classes.eventsList}>
//         {events.map((event, index) => (
//           <div key={index} className={classes.eventItem}>
//             <div className={classes.eventDetails}>
//               <div className={classes.eventTitle}>{event.title}</div>
//               <div className={classes.eventDate}>
//                 {event.date.toLocaleDateString("hy-AM", {
//                   day: "numeric",
//                   month: "long",
//                 })}
//               </div>
//               <div className={classes.eventType}>{event.type}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarWithEvents;
