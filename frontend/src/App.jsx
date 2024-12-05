import {Routes, Route} from 'react-router-dom'
import ExplicationPage from './pages/ExplicationPage';
import GeneratePage from './pages/GeneratePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/algoritm-explicat' element={<ExplicationPage/>} />
      <Route path='/generate' element={<GeneratePage/>} />
    </Routes>
    </>
  );
}

export default App;
