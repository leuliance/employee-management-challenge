// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useQuery } from '@apollo/client';
import { GET_DEPARTMENTS } from '../graphql/queries';
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
    <>
      <NxWelcome title="web" />
      <h1>hello</h1>
    </>
  );
}

export default App;
