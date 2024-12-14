import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import userAvatar from "@/assets/icons/contractsIcons/userAvatar.png";
import UsersDashboard from "./UsersDashboard/UsersDashboard";
import styles from "./styles";
import AddUserSteps from "./AddUserSteps/AddUserSteps";
const Users = () => {
  const classes = styles();
  const [showFilters, setShowFilters] = useState(false);
  const [mainStep, setMainStep] = useState("users-dashboard");
  const [currentStep, setCurrentStep] = useState("users-dashboard");
  const [users, setUsers] = useState([
    {
      id: 1,
      image: userAvatar,
      name: "Անուն",
      surname: "Ազգանուն",
      email: "example@example.com",
      role: "admin",
      position: "Տնօրեն",
      startDate: "01.01.2023",
    },
    {
      id: 2,
      image: userAvatar,
      name: "Անուն",
      surname: "Ազգանուն",
      email: "example@example.com",
      role: "user",
      position: "Սպասարկման թիմիի ղեկավար",
      startDate: "01.01.2023",
    },
    {
      id: 3,
      image: userAvatar,
      name: "Անուն",
      surname: "Ազգանուն",
      email: "example@example.com",
      role: "admin",
      position: "Սպասարկման թիմիի ղեկավար",
      startDate: "01.01.2023",
    },
    {
      id: 4,
      image: userAvatar,
      name: "Անուն",
      surname: "Ազգանուն",
      email: "example@example.com",
      role: "admin",
      position: "Սպասարկման թիմիի ղեկավար",
      startDate: "01.01.2023",
    },
    {
      id: 5,
      image: userAvatar,
      name: "Անուն",
      surname: "Ազգանուն",
      email: "example@example.com",
      role: "admin",
      position: "Սպասարկման թիմիի ղեկավար",
      startDate: "01.01.2023",
    },
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = useParams();
  const updateUrl = (url, id) => {
    navigate(`${location.pathname}?${url}&step=${id}`);
  };

  const locationSearch = location.search.slice(1);
  const firstParam = locationSearch.split("&")[0];
  const secondParam = locationSearch.split("&")[1];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {},
  });

  const handlePageChange = (url) => {
    if (locationSearch === "add-user-steps&step=1") {
      updateUrl("add-user-steps", 2);
    }
    if (locationSearch === "add-user-steps&step=2") {
      updateUrl("add-user-steps", 3);
    }
  };
  const handleCancel = () => {
    if (locationSearch === "add-user-steps&step=3") {
      updateUrl("add-user-steps", 2);
    }
    if (locationSearch === "add-user-steps&step=2") {
      updateUrl("add-user-steps", 1);
    }
    if (locationSearch === "add-user-steps&step=1") {
      updateUrl("", "");
    }
  };

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const renderStep = () => {
    switch (firstParam) {
      case "":
        return (
          <UsersDashboard
            updateUrl={updateUrl}
            setCurrentStep={setCurrentStep}
            setMainStep={setMainStep}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            users={users}
          />
        );
      case "add-user-steps":
        return (
          <AddUserSteps
            secondParam={secondParam}
            locationSearch={locationSearch}
            updateUrl={updateUrl}
            watch={watch}
            handleCancel={handleCancel}
            handlePageChange={handlePageChange}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            setValue={setValue}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return renderStep();
};

export default Users;
