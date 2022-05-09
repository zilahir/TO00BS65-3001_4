import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TopHeader from './components/common/TopHeader';
import { menuItems } from './fakeApi'

function App() {

  const menu = menuItems.getAllRoutes()
  return (
    <BrowserRouter>
      <TopHeader />
      <Routes>
        {
          menu.map(({path, component: Component}) => (
            <Route path={path} element={<Component />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
