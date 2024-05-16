import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Banner/>
              <Movies/>
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
