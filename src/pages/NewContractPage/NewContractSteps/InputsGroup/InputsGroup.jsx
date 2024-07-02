import CustomInput from "@/components/CustomInput/CustomInput";
import styles from "./styles";

const CustomInputsGroup = ({
  register,
  errors,
  inputFieldsData,
  category,
  quantityRows,
}) => {
  const classes = styles({ quantityRows });
  let renderedFields = inputFieldsData;

  if (category === "Մեքենա") {
    renderedFields = inputFieldsData.slice(0, 3);
  }

  return (
    <div className={classes.inputsGroup}>
      {renderedFields.map((field, index) => (
        <CustomInput
          customStyles={{
            fontSize: 16,
          }}
          key={index}
          register={register}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          errors={errors[field.name] && errors[field.name].message}
        />
      ))}
    </div>
  );
};

export default CustomInputsGroup;
