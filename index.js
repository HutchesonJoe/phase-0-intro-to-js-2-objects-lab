// Write your solution in this file!
const employee = {
    Joe: "123 Madison"
    };
    
    function   updateEmployeeWithKeyAndValue(employee, key, value){
        const newObj = { ...employee };
        newObj[key] = value;
        return newObj;
    }
    updateEmployeeWithKeyAndValue;

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;

        return employee;
    }

    destructivelyUpdateEmployeeWithKeyAndValue;

    function deleteFromEmployeeByKey(employee, key, value){
        delete employee.Joe;
        const newObj = { ...employee };
        newObj[key] = value;
        console.log(newObj);
        return newObj;
    }

    deleteFromEmployeeByKey;

    function destructivelyDeleteFromEmployeeByKey(employee, key,){
    
        delete employee[key];
        return employee; 
    }

    destructivelyDeleteFromEmployeeByKey;