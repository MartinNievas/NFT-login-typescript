import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navigate, useRoutes} from 'react-router-dom';
import Home from "./containers/Home";
import Metaverse from './containers/Metaverse'

declare global {
    interface Window {
        ethereum:any;
    }
}

let FB = window.ethereum;

const App: React.FC = (): JSX.Element => {

  const mainRoutes = [
  { path: '/', element: <Home />},
  { path: '/metaverse', element: <Metaverse />},
  ];

  const routing = useRoutes(mainRoutes);

  return <>{routing}</>;
}

export default App;
