import { GlobalProvider } from "./providers/global";
import MainRoutes from "./routes";
import Global from "./style/global";


function App() {
  return (
    <>
      <GlobalProvider>
        <Global/>
        <MainRoutes/>
      </GlobalProvider>
    </>
  );
}

export default App;
