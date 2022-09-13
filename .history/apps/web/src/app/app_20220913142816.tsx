// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Departments from '../pages/departments';
import Employees from '../pages/employees';
import Home from '../pages/home';

export function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="/employees" element={<Employees/>} />
      </Route>
    </Routes>
  );
}

export default App;
