import { gql } from '@apollo/client';

export const GET_DEPARTMENTS = gql`
  query Departments($page: Int!, $size: Int!) {
    departments(page: { page: $page, size: $size }) {
      edges {
        node {
          id
          name
          imageName
          employees {
            id
            departmentId
            firstName
            lastName
            gender
            phoneNo
            email
            dateOfBirth
            city
            country
            subCity
            houseNo
            woreda
            kebele
            imageName
            zone
          }
        }
      }
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query Employees($page: Int!, $size: Int!) {
    employees(page: { page: $page, size: $size }) {
      edges {
        node {
          id
          firstName
          lastName
          gender
          phoneNo
          email
          dateOfBirth
          country
          region
          city
          subCity
          woreda
          zone
          kebele
          houseNo
          departmentId
          imageName
        }
      }
    }
  }
`;
