import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    stepContainer: {
      paddingRight: 15,
      maxHeight: "440px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-track": {
        background: "#d7d7e0",
        borderRadius: theme.large,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#b0a9ca",
        borderRadius: theme.large,
        backgroundClip: "content-box",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.primaryColor,
      },
    },
    stepInnerContainer: {
      display: "flex",
      marginTop: "6%",
      flexDirection: "column",
      gap: 30,
      width: "100%",
    },
    userName: {
      fontSize: 20,
      color: theme.primaryColor,
      fontWeight: 600,
    },
    divider: {
      height: 0.5,
      marginBlock: 10,
      width: "100%",
      backgroundColor: theme.labelColor,
    },
    titleWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      color: theme.labelColor,
    },
    editIcon: {
      cursor: "pointer",
    },
    label: {
      fontSize: "1rem",
      color: theme.labelColor,
    },
    valueContainer: {
      display: "flex",
      alignItems: "center",
      gap: 20,
    },
    value: {
      fontSize: "1rem",
      color: theme.primaryColor,
    },
    dataField: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    filesRowContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },
    filesRow: {
      display: "flex",
      gap: "13%",
      alignItems: "center",
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    fileLabel: {
      fontSize: "1rem",
      color: theme.primaryColor,
    },
    input: {
      borderRadius: theme.small,
      padding: 10,
      backgroundColor: theme.backgroundBase,
      border: "none",
    },
    uploadFileSpan: {
      color: theme.backgroundBase,
      backgroundColor: "#8788A1",
      fontSize: "1rem",
      borderRadius: "6px 0 0 6px",
      cursor: "pointer",
      padding: 7,
    },
    statusUploaded: {
      color: theme.labelColor,
      backgroundColor: theme.backgroundBase,
      fontSize: "1rem",
      borderRadius: "0 6px 6px 0",
      height: "100%",
      padding: "7px 45px 7px 7px",
    },
    fileUploadContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
    },
    uploadFileBlock: {},
  }),
  {
    name: "new-contract-step-4",
  }
);

export default useStyles;
