import "./App.css";
import AppLayout from "./AppLayout";
import Navbar from "./Navbar";
import { AppProvider } from "./AppProvider";
import Settings from "../Settings";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard";

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <Navbar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
