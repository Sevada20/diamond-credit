import DocumentInfoCard from "./DocumentInfoCard/DocumentInfoCard";
import styles from "./styles";

const DocumentDashboard = () => {
  const classes = styles();

  return (
    <div className={classes.documentDashboard}>
      <DocumentInfoCard
        icon={""}
        title="Փաստաթղթեր"
        countFiles={100}
        memory={10}
      />
      <DocumentInfoCard
        icon={""}
        title="Նամակներ"
        countFiles={120}
        memory={15}
      />
      <DocumentInfoCard icon={""} title="Ստեղծել" />
    </div>
  );
};

export default DocumentDashboard;
