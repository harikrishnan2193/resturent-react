import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RestView from './Pages/RestView';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resturent_view/:id' element={<RestView/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
