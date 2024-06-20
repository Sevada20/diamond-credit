import { useState } from "react";
import ContractsList from "@/components/ContractsList/ContractsList";
import ContractFilter from "@/components/ContractFilter/ContractFilter";
import FiltersControlBar from "./FiltersControlBar/FiltersControlBar";
import FiltersHeader from "./FiltersHeader/FiltersHeader";
import addIcon from "@/assets/icons/contractsIcons/addIcon.svg";
import styles from "./styles";
import Pagination from "@/components/Pagination/Pagination";

const ContractsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const classes = styles({ showFilters });

  return (
    <div className={classes.contractsPage}>
      <div style={{ display: "flex", gap: 10 }}>
        <div
          style={{ height: 130, width: "100%", backgroundColor: "grey" }}
        ></div>
        <div
          style={{ height: 130, width: "100%", backgroundColor: "grey" }}
        ></div>
        <div
          style={{ height: 130, width: "100%", backgroundColor: "grey" }}
        ></div>
      </div>
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
