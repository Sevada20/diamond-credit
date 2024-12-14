import { useTheme } from "react-jss";
import PlusIcon from "../../../assets/icons/PlusIcon";
import DocumentCard from "../DocumentCard/DocumentCard";
import styles from "./styles";

const DocumentList = ({ documents }) => {
  const theme = useTheme();
  const classes = styles();
  return (
    <div className={classes.documentsContainer}>
      {documents.map((document) => (
        <DocumentCard key={document.id} {...document} />
      ))}
      <div className={classes.addDocumentBlock}>
        <div className={classes.addDocumentIconWrapper}>
          <PlusIcon color={theme.primaryColor} />
        </div>
        <span className={classes.addDocumentText}>Ստեղծել</span>
      </div>
    </div>
  );
};

export default DocumentList;
