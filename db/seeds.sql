INSERT INTO department (name)
VALUES 
('Warehouse'), 
('Sales'), 
('Office'), 
('Management');

INSERT INTO role (title, salary, department_id)
VALUES
('Lift Truck Operator', 45000, 1),
('Warehouse Lead',56000, 1),
('Cut Table Operator', 45000, 1),
('Sales Representative', 60000, 2),
('Will Call Clerk', 46000, 3),
('Inventory Clerk', 42000, 3),
('Inventory Lead', 50000, 3),
('Warehouse Supervisor', 65000, 4),
('Operations Manager', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Charlie', 'Brown', 9, null),
('Todd', 'Smith', 8, 1),
('Karen', 'Jones', 5, 1),
('Joseph', 'Mann', 7, 1),
('Burt', 'Reynolds', 6, 1),
('Adam', 'West', 4, 1),
('Ryan', 'Duckling', 3, 1),
('Emma', 'Rock', 2, 1),
('Niklas', 'Solomon', 2, 1),
('Wingus', 'Dingus', 1, 1),
('Ezio', 'Auditore', 1, 1);