import { useState } from "react";
import { contractsInfoData } from "@/assets/data/contracts";
import ContractsList from "@/components/ContractsList/ContractsList";
import ContractFilter from "@/components/ContractFilter/ContractFilter";
import FiltersControlBar from "./FiltersControlBar/FiltersControlBar";
import FiltersHeader from "./FiltersHeader/FiltersHeader";
import addIcon from "@/assets/icons/contractsIcons/addIcon.svg";
import ContractsIcon from "@/assets/icons/sidebarIcons/ContractsIcon";
import Pagination from "@/components/Pagination/Pagination";
import ContractsInfoList from "@/components/ContractsInfoList/ContractsInfoList";
import styles from "./styles";

const ContractsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const classes = styles({ showFilters });

  return (
    <div className={classes.contractsPage}>
      <ContractsInfoList
        infoCardList={contractsInfoData}
        GeneralIcon={ContractsIcon}
      />
      <div className={classes.titleWrapper}>
        <span className={classes.title}>Պայմանագիր</span>
        <button className={classes.addBtn}>
          <img src={addIcon} alt="add icon" />
          <span className={classes.addBtnText}> Ավելացնել</span>
        </button>
      </div>
      <div className={classes.contractContainer}>
        <FiltersHeader />
        <div className={classes.contractsFilterAndList}>
          <div className={classes.filtersControlBarWrapper}>
            <FiltersControlBar
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </div>
          <div className={classes.contractFilterWrapper}>
            <ContractFilter showFilters={showFilters} />
          </div>
          <div className={classes.contractsListWrapper}>
            <div className={classes.contractsListInnerWrapper}>
              <ContractsList />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.paginationWrapper}>
        <Pagination />
      </div>
    </div>
  );
};

export default ContractsPage;
