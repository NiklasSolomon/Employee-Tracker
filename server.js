// Adding dependencies
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
},
console.log('Connected to Employee Database.')
);

db.connect(err => {
    if (err) throw err;
    runApp();
});

runApp = () => {
    console.log('Welcome to the Employee Tracker application')
    beginPrompts();
};

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
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View all departments') {
            viewDepartments();
        }
        if (choices === 'View all roles') {
            viewRoles();
        }
        if (choices === 'View all employees') {
            viewEmployees();
        }
        if (choices === 'Add a department') {
            addDepartment();
        }
        if (choices === 'Add a role') {
            addRole();
        }
        if (choices === 'Add an employee') {
            addEmployee();
        }
        if (choices === 'Update an employee role') {
            updateEmployee();
        };
    });
};
// View all departments
viewDepartments = () => {
    // SELECT * FROM department
    const sql = `SELECT * FROM department`;
    db.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        beginPrompts();
    });
};

// View all roles
viewRoles = () => {
    // SELECT * FROM role
    const sql = `SELECT * FROM role`;
    db.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        beginPrompts();
    });
};

// View all employees
viewEmployees = () => {
    // SELECT id, first_name, last_name FROM employee
    const sql = `SELECT * FROM employee`;
    db.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        beginPrompts();
    });

};

// Create new departments
addDepartment = () => {
    // Prompt the user for the "name" of the department
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: "What department would you like to add?"
        }
    ])
    // THEN run the query
    .then(answer => {
        // INSERT INTO department (name)
        // VALUES ("Sales");
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, answer.addDept, (err, result) => {
            if (err) throw err;
            console.log('Added new department');
            // THEN ask the user what they want to do next
            beginPrompts();
        });
    });
};

// Create a new role
addRole = () => {
    // Prompt the user for the "title" and "salary" for the role
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What role would you like to add?"
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary for this role?"
        }
    ])
    .then(answer => {
        const params = [answer.title, answer.salary];
        // Get the existing departments from the 'department' table
        const getDept = `SELECT name, id FROM department`;
        // THEN run the query
        db.promise().query(getDept, (err, data) => {
            if (err) throw err;
            const dept = data.map(({name, id}) => ({name: name, value: id}));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'dept',
                    message: "What department does this role belong to?",
                    choices: dept
                }
            ])
            .then(deptChoice => {
                const dept = deptChoice.dept;
                params.push(dept);
                
                // INSERT INTO role (title, salary, department_id)
                // VALUES ("Engineer", 120000, 1);
                const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

                db.query(sql, params, (err, result) => {
                    if (err) throw err;
                    console.log('Added new role');
                    // THEN ask the user what they want to do next
                    beginPrompts();
                });
            });
        });
    });
};

// Create a new employee
addEmployee = () => {

};

// Update an existing employee role
updateEmployee = () => {
    // SELECT * FROM employee
};