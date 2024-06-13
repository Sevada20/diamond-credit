import texts from "../assets/texts.json";

const getText = (component, key) => {
  return texts[component]?.[key] || "";
};

export default getText;
