import { gql } from '@apollo/client';

export const ADD_DEPARTMENT = gql`
  mutation AddDepartment($name: String!) {
    createDepartment(input: { name: $name }) {
      id
      name
      imageName
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: ID!) {
    deleteDepartment(id:$id){
        id
        name
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id:$id){
        id
        firstName
    }
  }
`;
