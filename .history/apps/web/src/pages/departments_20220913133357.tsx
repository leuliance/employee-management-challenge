import { useQuery } from '@apollo/client';
import { Key } from 'react';
import { LoadingSkeleton } from '../components/loading_skeleton';
import { GET_DEPARTMENTS } from '../graphql/queries';

export default function Departments() {
  const { data, loading, error } = useQuery(GET_DEPARTMENTS, {
    variables: {
      page: 1,
      size: 10,
    },
  });
  if (loading) return <LoadingSkeleton />;
  if (error) return <h1>{`Error! ${error}`}</h1>;
//   console.log(data?.departments?.edges?);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Number of employees
            </th>
            <th scope="col" className="py-3 px-6">
              image
            </th>
          </tr>
        </thead>
        <tbody>
            {data?.departments?.edges.map((item: { node: { id: Key | null | undefined; }; }) => {
return (
    <div key={item.node?.id}>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.node?.id}
            </th>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">$1999</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
          </tr>
          </div>
)
            })}
          
        </tbody>
      </table>
    </div>
  );
}
