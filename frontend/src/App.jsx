import { Routes, Route } from "react-router-dom";
import ExplicationPage from "./pages/ExplicationPage";
import GeneratePage from "./pages/GeneratePage";
import MainPage from "./pages/MainPage";
import Navbar from "./layouts/Navbar";
import NotFound from "./pages/NotFoundPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/algoritm-explicat" element={<ExplicationPage />} />
        <Route path="/genereaza" element={<GeneratePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
