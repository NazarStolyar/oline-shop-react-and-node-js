import { MainLayout } from "./components/layout";
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

function App() {
  return (
          <div className="layout">
              <Router>
                  <MainLayout />
              </Router>
          </div>
  );
}

export default App;
