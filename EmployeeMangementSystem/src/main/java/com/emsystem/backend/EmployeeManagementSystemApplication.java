package com.emsystem.backend;

import com.emsystem.backend.model.Employee;
import com.emsystem.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementSystemApplication.class, args);
    }


    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
//        Employee employee = new Employee();
//        employee.setFirstname("Ravindu");
//        employee.setLastname("Panthaka");
//        employee.setEmailId("P@gmail.com");
//        employeeRepository.save(employee);
//
//        Employee employee1 = new Employee();
//        employee1.setFirstname("Prageeth");
//        employee1.setLastname("Sanjeewa");
//        employee1.setEmailId("S@gmail.com");
//        employeeRepository.save(employee1);
    }
}
