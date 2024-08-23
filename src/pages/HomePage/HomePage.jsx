import {
  documentsData,
  tasks,
  moneyOutAndIn,
} from "@/assets/data/documentsData";
import FinancialCardList from "@/components/FinancialCardList/FinancialCardList";
import greetingIcon from "@/assets/icons/homePageIcons/greetingIcon.svg";
import DocumentList from "./DocumentList/DocumentList";
import Tasks from "./Tasks/Tasks";
import MoneyOutAndInCard from "./MoneyOutAndInCard/MoneyOutAndInCard";
import styles from "./styles";
const HomePage = () => {
  const classes = styles();

  return (
    <div className={classes.homePageContainer}>
      <div className={classes.greeting}>
        <b className={classes.titleGreeting}>Ողջույն, User Name</b>
        <img src={greetingIcon} alt="greetingIcon" />
      </div>
      <div className={classes.firstSectionRow}>
        <div className={classes.financialCardListWrapper}>
          <FinancialCardList />
        </div>
        <div className={classes.documentsAndTasksContainer}>
          <DocumentList documents={documentsData} />
          <Tasks tasks={tasks} />
        </div>
      </div>
      <div className={classes.secondSectionRow}>
        <div style={{ display: "flex", gap: 15 }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {moneyOutAndIn.map((item) => (
              <MoneyOutAndInCard key={item.id} {...item} />
            ))}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                borderRadius: 30,
                width: "100%",
                height: 103,
                backgroundColor: "green",
              }}
            >
              block1
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                width: "100%",
              }}
            >
              <div
                style={{
                  borderRadius: 30,
                  backgroundColor: "red",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  borderRadius: 30,
                  backgroundColor: "red",
                  height: 240,
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: 30,
            width: "100%",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
