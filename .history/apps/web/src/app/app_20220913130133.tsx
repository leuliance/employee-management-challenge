// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import { GET_DEPARTMENTS } from '../graphql/queries';
import Home from '../pages/home';
import NxWelcome from './nx-welcome';

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
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
