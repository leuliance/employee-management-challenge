// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useQuery } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar';
import { GET_DEPARTMENTS } from '../graphql/queries';
import Home from '../pages/home';
// import NxWelcome from './nx-welcome';

export function App() {
  const {data} = useQuery(GET_DEPARTMENTS,{
    variables:{
      page:1,
      size:10
    }
  });
  console.log(data);
  return (
    <Routes>
      <NavBar />
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
