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






-- ('ff8ee3a8-5c96-4def-a025-e40e5a8c88c2', '8c7d2425-d783-434d-900e-78ce4ad68af8');
-- ('36afa612-c1de-4ad1-86c4-f6a59dcc9b7f', '48b27de0-dc5a-4225-9fe1-693218517f2e');
-- ('80a18c9b-a23c-4a29-b2a2-57e255ffafd3', '6f740bfa-2639-4e10-96ad-d4bee52d1107');
-- ('d6f2a7fc-5d89-40d3-a169-616aa56217e8', 'e0abf85b-e77b-489c-b5bd-5adb457fe412');
--  ('91ff8938-8678-4b4d-ab75-c42fd05bd738', '2e3e9e57-c517-4377-9f6b-d2453b1b0805');
-- ('23ccf0b9-0b24-4ac7-8d00-d69621d46bcd', 'eeef2ee4-fe5d-498a-af64-a1566c7b25ab');
-- ('fde200e6-6e15-432c-b83d-8a1356ac1f11', '11b99cd8-d20c-41b8-8749-68e7bf8038ae');
-- ('320779c2-376f-411a-8c09-65ce64617c7c', '77d8e8a3-658d-409e-b571-8aeb51994e4a');
-- ('8b97551a-9b8b-4a93-8b95-b9acce1186ac', '10c73b08-e2dd-4da3-a3e1-3cabc3d1af3f');
-- ('85c0fd42-15e5-4e4d-a6f9-b6f9c144e86c', 'c3860ba4-0097-4884-9a9f-276ba2b084a9');