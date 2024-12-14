import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { contractsInfoData } from "@/assets/data/contracts";
import { getContracts } from "@/store/slices/contracts/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setFilterStatus,
} from "@/store/slices/contracts/slice";
import { selectContractsData } from "@/store/slices/contracts/slice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    currentPage,
    contracts,
    totalPages,
    loading,
    error,
    filterStatus,
    allContracts,
    activeContracts,
    executedContracts,
  } = useSelector(selectContractsData);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get("status") || "all";
    const page = parseInt(params.get("page")) || 1;

    dispatch(setFilterStatus(status));
    dispatch(setCurrentPage(page));

    dispatch(getContracts({ page, filters: { status } }));
  }, [location.search, dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("page", currentPage);
    params.set("status", filterStatus);
    console.log("params:>>>", params.toString());
    navigate({ search: params.toString() });
  }, [currentPage, filterStatus, navigate]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleFilterChange = (status) => {
    dispatch(setFilterStatus(status));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={classes.contractsPage}>
      <ContractsInfoList
        infoCardList={contractsInfoData}
        GeneralIcon={ContractsIcon}
        allContracts={allContracts}
        activeContracts={activeContracts}
        executedContracts={executedContracts}
      />
      <div className={classes.titleWrapper}>
        <span className={classes.title}>Պայմանագիր</span>
        <Link to="/new-contract" className={classes.newContractLink}>
          <img src={addIcon} alt="add icon" />
          <span className={classes.addBtnText}> Ավելացնել</span>
        </Link>
      </div>
      <div className={classes.contractContainer}>
        <FiltersHeader
          activeFilterStatus={filterStatus}
          handleFilterChange={handleFilterChange}
        />
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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <ContractsList contracts={contracts} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.paginationWrapper}>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ContractsPage;
