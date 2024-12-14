import {
  documentsData,
  tasks,
  moneyOutAndIn,
} from "@/assets/data/documentsData";
import { clients } from "@/assets/data/clients";
import { useTheme } from "react-jss";
import PieChart from "@/components/PieChart/PieChart";
import FinancialCardList from "@/components/FinancialCardList/FinancialCardList";
import greetingIcon from "@/assets/icons/homePageIcons/greetingIcon.svg";
import DocumentList from "./DocumentList/DocumentList";
import Tasks from "./Tasks/Tasks";
import MoneyOutAndInCard from "./MoneyOutAndInCard/MoneyOutAndInCard";
import Clients from "./Clients/Clients";
import InflationCard from "./InflationCard/InflationCard";
import lightningIcon from "@/assets/icons/lightningIcon.svg";
import percentIcon from "@/assets/icons/percentIcon.svg";
import styles from "./styles";
import LoanContractsChart from "./LoanContractsChart/LoanContractsChart";
import ContractSummaryBarChart from "./ContractSummaryBarChart/ContractSummaryBarChart";

// import CalendarWithEvents from "./CalendarSection/CalendarSection";
const HomePage = () => {
  const theme = useTheme();
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
          <div className={classes.moneyOutAndInListContainer}>
            {moneyOutAndIn.map((item) => (
              <MoneyOutAndInCard key={item.id} {...item} />
            ))}
          </div>
          <div className={classes.clientsContainer}>
            <Clients clients={clients} />
            <div className={classes.pieChartsContainer}>
              <InflationCard
                icon={percentIcon}
                percentage={15}
                Chart={PieChart}
                growth
                percentageColor1={theme.chartColor1}
                percentageColor2={theme.chartColor2}
                amount={145200}
              />
              <InflationCard
                icon={lightningIcon}
                Chart={PieChart}
                growth={false}
                percentage={21}
                percentageColor1={theme.chartColor3}
                percentageColor2={theme.chartColor4}
                amount={21450}
              />
            </div>
          </div>
        </div>
        <div className={classes.calendarWrapper}>
          {/* <CalendarWithEvents /> */}
        </div>
      </div>
      <div className={classes.chartsContainer}>
        <div className={classes.loanContractsChartWrapper}>
          <LoanContractsChart />
        </div>
        <div className={classes.contractSummaryBarChartWrapper}>
          <ContractSummaryBarChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
