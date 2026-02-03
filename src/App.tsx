import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import LetsMove from "./pages/LetsMove";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/letsmove" element={<LetsMove />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
