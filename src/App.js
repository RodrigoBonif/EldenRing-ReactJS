import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Classes from './pages/Classes/index';
import Npcs from './pages/Npcs/index';
import Bosses from './pages/Bosses';
import Sorceries from './pages/Sorceries';
import Items from './pages/Items';
import Weapons from './pages/Weapons';
import Home from './pages/Home';

function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/classes' element={<Classes />}/>
                <Route path='/npcs' element={<Npcs />}/>
                <Route path='/bosses' element={<Bosses />}/>
                <Route path='/sorceries' element={<Sorceries />}/>
                <Route path='/items' element={<Items />}/>
                <Route path='/weapons' element={<Weapons />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
