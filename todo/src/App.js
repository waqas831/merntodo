import './App.css';
import Heading from './Heading';
import {Routes,Route} from 'react-router-dom';
import ModelsUpdate from './ModelsUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/:id" element={<ModelsUpdate />} />
      </Routes>
     
    </div>
  );
}

export default App;
