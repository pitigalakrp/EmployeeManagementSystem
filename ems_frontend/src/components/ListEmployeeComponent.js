import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error" + error);
            });
    } 

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
            .then((response) => {
                getEmployees();
            })
            .catch((error) => {
                console.log("Error" + error);
            });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Employee</h2>
            <Link to='/add-employee' className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)} style={{marginLeft: "10px"}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent
