export type EmployeeType = {
    id:string | number,
    departmentId:number,
    firstName:string,
    lastName:string,
    gender:"male" | "female" | "other" | string,
    phoneNo:string,
    country:string,
    dateOfBirth:Date,
    email?:string,
    imageName?:string,
    region?:string,
    city?:string,
    subCity?:string,
    woreda?:string,
    zone?:string,
    kebele?:string,
    houseNo?:string,
}

export type DepartmentType = {
    id:string | number,
    name:string,
    employees:EmployeeType[],
    imageName?:string,
}