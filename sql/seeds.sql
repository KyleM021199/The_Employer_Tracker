INSERT INTO department (name) 
VALUES ('Human Resources'),
 ('Accounting'),
 ('Product Management'),
 ('Marketing'),
 ('Support'),
 ('Legal'),
 ('Sales');

    INSERT INTO role (title, salary, department_id)
    VALUES  
('Financial Advisor', 60000, 2),
('Professor', 50000, 4),
('Legal Assistant', 80000, 6),
('Dental Hygienist', 100000, 1),
('Office Assistant III', 70000, 6),
('Payment Adjustment Coordinator', 56000, 1),
('Electrical Engineer', 110000, 6),
('Junior Executive', 100000, 3),
('Marketing Manager', 75000, 7),
('Desktop Support Technician', 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
        ('Reece', 'Slavin', 1, NULL),
        ('Vinny', 'Berthe', 3, NULL),
        ('Leanor', 'Huxtable', 2, NULL),
        ('Osgood', 'Blowne', 5, 1),
        ('Lena', 'Wrighton', 2, 1),
        ('Gordan', 'Gamell', 1, NULL),
        ('Perrine', 'Lohden', 3, 1),
        ('Glen', 'Durie', 6, 1),
        ('Johny', 'Leare', 7, NULL),
        ('Andromache', 'Trivett', 4, 1);