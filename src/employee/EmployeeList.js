import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEmployees } from "../services/employeeService";

import { Row, Col } from "react-bootstrap";

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.emp.employees);

    console.log("in employee list112")
    console.log(employees);
    

    useEffect(() => {
        GetEmployees(dispatch);
    }, [dispatch]);

        console.log("before mapping");
        console.log(employees)
        if(employees.length !== 0)
        {
            return employees.data.employees.map(e => 
                <div key={e.id} style={{marginBottom: '1rem'}}>
                    
                    <ListRow employee={e} />
                </div>
                );
        }
        
}

const ListRow = ({employee}) => {
    return (
        <div>
            <Row>
                <Col>{employee.name}</Col>
                <Col>{employee.email}</Col>  
            </Row>
        </div>

    )
}

export default EmployeeList;