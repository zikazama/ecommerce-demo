import HomeLayout from "../layouts/HomeLayout";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div style={{ height: "100%", overflow: "hidden", backgroundColor: darkMode ? "#121212" : "#f8f9fa" }}>
      <HomeLayout />
    </div>
  );
};

export default HomePage;
