# Employee-Tracker

## Goal:
The goal of the project is to showcase the student's knowledge of MySQL and database building by creating a content management system using node.js, inquirer, and MySQL.

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## How:
Using MySQL2, we are able to connect to a database that is built using prompts from inquirer and dynamically written to the tables through node. The console.table function allows us to display these tables to the command terminal.
## Result:
When the user runs npm start, they are presented with an application for an employee database that displays departments, roles, and employee information. Selecting 'view all departments' shows a table containing department information. Selecting 'view all roles' shows a table containing role information. Selecting 'View all employees' shows a table containing employee information. Selecting 'Add new department, role, or employee' allows the user to add a new row to the corresponding table with information pertaining to that particular choice. Selecting 'Update an employee' allows the user to update an employee's role.

![Gif of functioning application](./Assets/Employee%20Tracker%20App.gif)

[Link to screencastify video of functioning application](https://drive.google.com/file/d/189t7W-8tDngtrMOic6wShY-40ltMBklX/view)  

[Link to Github repository](https://github.com/NiklasSolomon/Employee-Tracker)