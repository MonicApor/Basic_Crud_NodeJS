import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import CreateHealth from './components/create-health.component';
import EditHealth from './components/edit-health.component';
import Healthlist from './components/health-list.component';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <br/>
          <Routes>
            <Route path = '/' element = {<Healthlist />} />
            <Route path = '/edit/:id' element = {<EditHealth />} />
            <Route path = '/create' element = {<CreateHealth />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
