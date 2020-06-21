import React, { useState } from 'react';
import './styles.css';
import Form from '../../components/Form';
import List from '../../components/List';
import EmployeeContext from '../../employeeContext';

interface Employee {
  name: string,
  position: string,
  empcode: string,
  mobile: string
}

const Main = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  function addEmployee(employee: Employee) {
    setEmployees([...employees, employee]);
  }
  function removeEmployee(codeEmp: string) {
    const newEmployees = employees.filter(employee => employee.empcode !== codeEmp);
    setEmployees(newEmployees);
  }

  return (
    <EmployeeContext.Provider value={{employees, addEmployee, removeEmployee}}>
      <div id="app">
        <div className="content">
          <div className="form-wrapper">
            <Form />
          </div>
          <div className="list-wrapper">
            <List />
          </div>
        </div>
      </div>
    </EmployeeContext.Provider>
  )
}

export default Main;