// Adding dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
},
console.log('Connected to Employee Database.')
);

const beginPrompts = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments', 
                        'View all roles', 
                        'View all employees', 
                        'Add a department', 
                        'Add a role', 
                        'Add an employee', 
                        'Update an employee role']
        }
    ])
}
// View all departments
// SELECT * FROM department

// View all roles
// SELECT * FROM role

// View all employees
// SELECT id, first_name, last_name FROM employee

// Create new departments

    // Prompt the user for the "name" of the department
    // THEN run the query
    // INSERT INTO department (name)
    // VALUES ("Sales");

        // THEN ask the user what they want to do next

// Create a new role

// Get the existing departments from the 'department' table

    // THEN prompt the user for the "title", "salary", and "department" for the role

        // THEN run the query
        // INSERT INTO role (title, salary, department_id)
        // VALUES ("Engineer", 120000, 1);

            // THEN ask the user what they want to do next