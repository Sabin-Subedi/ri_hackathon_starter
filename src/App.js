import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpScreen from "./screens/SignUpScreen";
import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
// import "tailwindcss/";
// import tailwindcss from "tailwindcss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<SignInScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
