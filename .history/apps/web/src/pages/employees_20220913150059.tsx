import { useQuery } from '@apollo/client';
import { Key } from 'react';
import AddDepartmentForm from '../components/add_department_form';
import { LoadingSkeleton } from '../components/loading_skeleton';
import { GET_DEPARTMENTS, GET_EMPLOYEES } from '../graphql/queries';
import { DepartmentType, EmployeeType } from '../types/types';

export default function Employees() {
  const { data, loading, error } = useQuery(GET_EMPLOYEES, {
    variables: {
      page: 1,
      size: 10,
    },
  });
  if (loading) return <LoadingSkeleton />;
  if (error) return <h1>{`Error! ${error}`}</h1>;
    console.log(data);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-10">
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 ">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
      <div id="authentication-modal"  aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <AddDepartmentForm />
      </div>

        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            
            <th>
                firstName
            </th>
            <th scope="col" className="py-3 px-6">
              lastName
            </th>
            
            <th scope="col" className="py-3 px-6">
              phone number
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.employees?.edges.map((edge:{
            node:EmployeeType
          }) =>{
            return <tr 
            key={edge.node.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
              
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                
                <div className="pl-3">
                  <div className="text-base font-semibold">{edge.node.firstName}</div>
                 
                </div>
              </th>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  {edge.node.lastName}
                </div>
              </td>
              <td className="py-4 px-6">
                <a
                  href="/"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          })}
            
        </tbody>
      </table>
    </div>
  );
}
