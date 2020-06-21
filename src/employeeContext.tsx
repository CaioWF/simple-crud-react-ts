import {createContext} from 'react';

interface Employee {
  name: string,
  position: string,
  empcode: string,
  mobile: string
}

interface Context {
  employees: Employee[],
  addEmployee: (employee: Employee) => void,
  removeEmployee: (codeEmp: string) => void
}
 
const EmployeeContext = createContext<Partial<Context>>({});
 
export default EmployeeContext;