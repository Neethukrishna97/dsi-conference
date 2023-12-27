
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CallForPapers from './pages/call for papers/CallForPapers';
import Evalution from './pages/evalution/Evalution';
import TrackInfo from './pages/track info/TrackInfo';
import Shedule from './pages/schedule/Shedule';
import Speakers from './pages/speakers/Speakers';
import Proceedings from './pages/proceedings/Proceedings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/dsi-conference'  element={<Home/>}/>
        <Route path='/call-for-papers' element={<CallForPapers/>}/>
        <Route path='/proceedings' element={<Proceedings/>}/>
        <Route path='/track info' element={<TrackInfo/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='/shedule' element={<Shedule/>}/>
        <Route path='/evalution' element={<Evalution/>}/>
      </Routes>
    </div>
  );
}

export default App;
