import { contractsCategoryOptions } from "@/assets/data/filterFields";
import { carFieldsData } from "@/assets/data/contracts";
import moneyIcon from "@/assets/icons/contractsIcons/moneyIcon.svg";
import CustomSelector from "@/components/CustomSelector/CustomSelector";
import CustomInputsGroup from "../InputsGroup/InputsGroup";
import styles from "./styles";
import React from "react";

const Step2 = ({
  register,
  errors,
  watch,
  addTechniqueSubCategory,
  addGoldSubCategory,
  removeTechniqueSubCategory,
  removeGoldSubCategory,
}) => {
  const { techniqueSubCategories, goldSubCategories, category } = watch();
  const classes = styles();

  return (
    <form className={classes.formContainer}>
      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <div className={classes.labelWrapper}>
            <img src={moneyIcon} alt="money icon" />
            <label className={classes.label}>Գնահատված</label>
          </div>
          <input
            placeholder="250.000"
            className={classes.input}
            {...register("rated")}
          />
          {errors.rated && <p>{errors.rated.message}</p>}
        </div>
        <div className={classes.inputWrapper}>
          <div className={classes.labelWrapper}>
            <img src={moneyIcon} alt="money icon" />
            <label className={classes.label}>Տրամադրված</label>
          </div>
          <input
            placeholder="250.000"
            className={classes.input}
            {...register("provided")}
          />
          {errors.provided && <p>{errors.provided.message}</p>}
        </div>
      </div>
      <div className={classes.categoryInputsContainer}>
        <div className={classes.inputWrapper}>
          <CustomSelector
            label="Տեսակը"
            options={contractsCategoryOptions}
            register={register}
            name="category"
            customStyles={{ fontSize: 16 }}
            errors={errors.category && errors.category.message}
          />
        </div>
        {category === "Տեխնիկա" || !category ? (
          techniqueSubCategories.map((techniqueSubCategory, index) => (
            <React.Fragment key={index}>
              <div
                className={`${classes.inputWrapper} index === 0 || index === 1 ? ${classes.gridItemTechnique}`}
              >
                <label className={classes.label}>Ենթատեսակը</label>
                <input
                  placeholder="Հեռախոս"
                  className={classes.input}
                  {...register(`techniqueSubCategories[${index}].subCategory`)}
                />
                {errors.techniqueSubCategories &&
                  errors.techniqueSubCategories[index] &&
                  errors.techniqueSubCategories[index].subCategory && (
                    <p>
                      {errors.techniqueSubCategories[index].subCategory.message}
                    </p>
                  )}
              </div>
              <div className={classes.inputWrapper}>
                <label className={classes.label}>Մոդելը</label>
                <input
                  placeholder="iphone 12"
                  className={classes.input}
                  {...register(`techniqueSubCategories[${index}].model`)}
                />
                {errors.techniqueSubCategories &&
                  errors.techniqueSubCategories[index] &&
                  errors.techniqueSubCategories[index].model && (
                    <p>{errors.techniqueSubCategories[index].model.message}</p>
                  )}
              </div>
            </React.Fragment>
          ))
        ) : category === "Ոսկի" ? (
          goldSubCategories.map((goldSubCategory, index) => (
            <React.Fragment key={index}>
              <div className={classes.inputWrapper}>
                <label className={classes.label}>Ենթատեսակը</label>
                <input
                  placeholder="Մատանի"
                  className={classes.input}
                  {...register(`goldSubCategories[${index}].subCategory`)}
                />
                {errors.goldSubCategories &&
                  errors.goldSubCategories[index] &&
                  errors.goldSubCategories[index].subCategory && (
                    <p>{errors.goldSubCategories[index].subCategory.message}</p>
                  )}
              </div>
              <div className={classes.inputWrapper}>
                <label className={classes.label}>Հարգը</label>
                <input
                  placeholder="585"
                  className={classes.input}
                  {...register(`goldSubCategories[${index}].goldPurity`)}
                />
                {errors.goldSubCategories &&
                  errors.goldSubCategories[index] &&
                  errors.goldSubCategories[index].goldPurity && (
                    <p>{errors.goldSubCategories[index].goldPurity.message}</p>
                  )}
              </div>
              <div className={classes.inputWrapper}>
                <label className={classes.label}>Քաշ</label>
                <input
                  placeholder="5,8"
                  className={classes.input}
                  {...register(`goldSubCategories[${index}].goldWeight`)}
                />
                {errors.goldSubCategories &&
                  errors.goldSubCategories[index] &&
                  errors.goldSubCategories[index].goldWeight && (
                    <p>{errors.goldSubCategories[index].goldWeight.message}</p>
                  )}
              </div>
              <div className={classes.inputWrapper}>
                <label className={classes.label}>Մաքուր քաշ</label>
                <input
                  placeholder="3,6"
                  className={classes.input}
                  {...register(`goldSubCategories[${index}].pureGoldWeight`)}
                />
                {errors.goldSubCategories &&
                  errors.goldSubCategories[index] &&
                  errors.goldSubCategories[index].pureGoldWeight && (
                    <p>
                      {errors.goldSubCategories[index].pureGoldWeight.message}
                    </p>
                  )}
              </div>
            </React.Fragment>
          ))
        ) : (
          <>
            <div className={classes.customInputsGroup}>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Մոդելը</label>
                </div>
                <input
                  placeholder="BMW"
                  className={classes.input}
                  {...register("carModel")}
                />
                {errors.carModel && <p>{errors.carModel.message}</p>}
              </div>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Մակնիշը</label>
                </div>
                <input
                  placeholder="328 I"
                  className={classes.input}
                  {...register("carMake")}
                />
                {errors.carMake && <p>{errors.carMake.message}</p>}
              </div>
            </div>
            <CustomInputsGroup
              inputFieldsData={carFieldsData}
              register={register}
              errors={errors}
              quantityRows={4}
            />
            <div className={classes.inputsContainer}>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Հաշվառման վկայագիր</label>
                </div>
                <input
                  placeholder="XF 235653"
                  className={classes.input}
                  {...register("registrationCertificate")}
                />
                {errors.registrationCertificate && (
                  <p>{errors.registrationCertificate.message}</p>
                )}
              </div>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Նույնականացման համար</label>
                </div>
                <input
                  placeholder="1jBAEF774844AEF34"
                  className={classes.input}
                  {...register("identificationNumber")}
                />
                {errors.identificationNumber && (
                  <p>{errors.identificationNumber.message}</p>
                )}
              </div>
            </div>
            <div className={classes.inputGroup}>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Սեփ․ վկայական</label>
                </div>
                <input
                  placeholder="05 XX 235644"
                  className={classes.input}
                  {...register("certificateOwnership")}
                />
                {errors.certificateOwnership && (
                  <p>{errors.certificateOwnership.message}</p>
                )}
              </div>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Ում կողմից</label>
                </div>
                <input
                  placeholder="Արտաշատի ՀՔԲ"
                  className={classes.input}
                  {...register("from")}
                />
                {errors.from && <p>{errors.from.message}</p>}
              </div>
              <div className={classes.inputWrapper}>
                <div className={classes.labelWrapper}>
                  <label className={classes.label}>Մոդելը</label>
                </div>
                <input
                  placeholder="12․05․2021"
                  className={classes.input}
                  {...register("dateIssue")}
                />
                {errors.dateIssue && <p>{errors.dateIssue.message}</p>}
              </div>
            </div>
          </>
        )}
      </div>
      {category !== "Մեքենա" && <div className={classes.line}></div>}
      {category === "Մեքենա" || (
        <div className={classes.buttonWrapper}>
          <button
            onClick={() => {
              if (category === "Տեխնիկա" || !category) {
                removeTechniqueSubCategory();
              } else if (category === "Ոսկի") {
                removeGoldSubCategory();
              }
            }}
            type="button"
            className={classes.removeSubCategoryButton}
          >
            Ջնջել
          </button>
          <button
            type="button"
            onClick={() => {
              if (category === "Տեխնիկա" || !category) {
                addTechniqueSubCategory();
              } else if (category === "Ոսկի") {
                addGoldSubCategory();
              }
            }}
            className={classes.addSubCategoryButton}
          >
            Ավելացնել
          </button>
        </div>
      )}
    </form>
  );
};

export default Step2;
