import { useState } from "react";
import { useForm } from "react-hook-form";
import userAvatar from "@/assets/icons/contractsIcons/userAvatar.png";
import UsersDashboard from "./UsersDashboard/UsersDashboard";
import styles from "./styles";
import AddUserSteps from "./AddUserSteps/AddUserSteps";
const Users = () => {
  const classes = styles();
  const [showFilters, setShowFilters] = useState(false);
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "users-dashboard":
        return (
          <UsersDashboard
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            users={users}
            setCurrentStep={setCurrentStep}
          />
        );
      case "add-user-steps":
        return (
          <AddUserSteps
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            setValue={setValue}
            currentStep={currentStep}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return renderStep();
};

export default Users;
