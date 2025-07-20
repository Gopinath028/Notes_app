import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Bin } from './pages/Bin';
import { Important } from './pages/Important';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/archive' element={<Archive/>} />
        <Route path='/bin' element={<Bin/>}/>
        <Route path='/important' element={<Important/>}/>
      </Routes>
    </div>
  );
}

export default App;
