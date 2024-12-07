import { Routes, Route } from "react-router-dom";
import ExplicationPage from "./pages/ExplicationPage";
import GeneratePage from "./pages/GeneratePage";
import MainPage from "./pages/MainPage";
import Sidebar from "./layouts/SideBar";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Sidebar />
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
