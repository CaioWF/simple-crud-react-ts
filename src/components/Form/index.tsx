import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import './styles.css';
import EmployeeContext from '../../employeeContext';

interface FormInterface {
  name: string,
  position: string,
  empcode: string,
  mobile: string
}

const initialData = {name:'', position:'', empcode:'', mobile:''}

const Form = () => {
  const context = useContext(EmployeeContext);
  const [formData, setFormData] = useState<FormInterface>(initialData);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const {name, position, empcode, mobile} = formData;
    const data:FormInterface = {name, position, empcode, mobile};
    if (context.addEmployee){
      context.addEmployee(data);
    }
    console.log(data);
    cleanForm();
  }

  function cleanForm() {
    setFormData(initialData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>EMP. Register</h1>
      <fieldset>
        <div className="field">
          <input
            value={formData.name}
            placeholder="Full name"
            type="text"
            name="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="field">
          <input
            value={formData.position}
            placeholder="Position"
            type="text"
            name="position"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="field">
          <input
            value={formData.empcode}
            placeholder="Emp. code"
            type="text"
            name="empcode"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="field">
          <input
            value={formData.mobile}
            placeholder="Mobile"
            type="text"
            name="mobile"
            onChange={handleInputChange}
            required
          />
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;