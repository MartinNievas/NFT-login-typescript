import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./containers/Home";
import Metaverse from './containers/Metaverse'

declare global {
    interface Window {
        ethereum:any;
    }
}

let FB = window.ethereum;

const App: React.FunctionComponent = () => {

  return (
     <div className="relative bg-white overflow-hidden">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/metaverse" element={<Metaverse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
