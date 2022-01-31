import React, { Fragment, ReactNode, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import Home from "./containers/Home";


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Marketplace', href: '#' },
]

declare global {
    interface Window {
        ethereum:any;
    }
}

let FB = window.ethereum;

const App: React.FunctionComponent = () => {

  return (
     <div className="relative bg-white overflow-hidden">
      <Home navigation={navigation}/>
    </div>
  );
}

export default App;
