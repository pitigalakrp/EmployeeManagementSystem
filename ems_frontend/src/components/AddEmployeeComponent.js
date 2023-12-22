import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const AddEmployeeComponent = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const navigate = useNavigate();

    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault()

        const employee = {firstname, lastname, emailId};

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigate("/");
            }).catch((error) => {
                console.log(error);
            })
        }else{
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate("/");
            }).catch((error) => {
                console.log(error);
            })
        }

  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) => {
      setFirstName(response.data.firstname);
      setLastName(response.data.lastname);
      setEmailId(response.data.emailId);
    }).catch((error) => {
      console.log(error);
    })
  },[])

  const title = id ? "Update Employee" : "Add Employee";

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>{title}</h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>First Name</label>
                  <input
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Email Id</label>
                  <input
                    placeholder='Email Address'
                    name='emailId'
                    className='form-control'
                    value={emailId}
                    onChange={e => setEmailId(e.target.value)}
                  />
                </div>
                    <button type='submit' className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    <button className='btn btn-danger' onClick={() => navigate("/") }>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent
