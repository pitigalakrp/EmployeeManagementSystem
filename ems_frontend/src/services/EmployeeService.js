import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/getallemployees");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+"/addemployee", employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+"/employee/"+employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"/employee/update/"+employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/employee/delete/"+employeeId);
    }
}

export default new EmployeeService();