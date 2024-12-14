import { persistor, store } from "./store/store";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { light, borderRadius, mixins } from "./assets/dynamicStyles";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={{ ...light, borderRadius, mixins }}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
