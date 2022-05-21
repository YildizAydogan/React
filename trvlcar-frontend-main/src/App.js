import CustomRoutes from "./router/custom-routes";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./store";



const App = () => {
  return (
    <StoreProvider>
      <CustomRoutes/>
      <ToastContainer/>
    </StoreProvider>
  );
}

export default App;
