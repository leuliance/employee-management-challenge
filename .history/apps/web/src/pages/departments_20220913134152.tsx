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
          {data?.departments?.edges.map(
            (item: {
              node: {
                employees: [];
                imageName: string | null;
                name: string;
                id: Key | null | undefined;
              };
            }) => {
              return (
                <div key={item.node?.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.node?.id}{' '}
                    </th>
                    <td className="py-4 px-6">{item.node?.name}</td>
                    <td className="py-4 px-6">
                      {item.node?.imageName == null ? (
                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                          <svg
                            className="absolute -left-1 w-12 h-12 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        <img
                          className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                          src={item.node?.imageName}
                          alt="Bordered avatar"
                        />
                      )}
                    </td>
                    <td className="py-4 px-6">{item.node?.employees.length}</td>
                  </tr>
                </div>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
