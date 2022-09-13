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
