import { gql } from "@apollo/client";

export const GET_DEPARTMENTS = gql`
  query Departments($page: Int!,$size:Int!) {
    departments(page:{
        page:$page,
        size:$size
    }){
        edges{
          node{
            id
            name
            imageName
            employees{
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