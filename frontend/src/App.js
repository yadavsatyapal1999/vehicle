
import './App.css';
import DateRangeSelector from './Component/DateRangeSelector';
import Model from './Component/Model';
import Name from './Component/Name';
import Type from './Component/Type';
import Wheel from './Component/Wheels';
import {ContextProvider} from "./Context/ContextProvide"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Name />} />
          <Route path="/wheel" element={<Wheel />} />
          <Route path="/type" element={<Type />} />
          <Route path="/model" element={<Model />} />
          <Route path="/date" element={<DateRangeSelector/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
