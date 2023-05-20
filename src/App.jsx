import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`min-h-screen ${theme == "dark" ? "dark" : ""}`}>
      <main className="min-h-screen bg-secondary-300 dark:bg-secondary-800">
        <NavBar />
      </main>
    </div>
  );
}

export default App;
