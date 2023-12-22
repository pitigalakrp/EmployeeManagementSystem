import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <Router>
      <div className=''>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<AddEmployeeComponent />} />
          <Route path='/edit-employee/:id' element={<AddEmployeeComponent />} />
          
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
