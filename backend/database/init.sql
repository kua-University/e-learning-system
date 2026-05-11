CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT
);

CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT
);

CREATE TABLE IF NOT EXISTS enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  courseId INTEGER
);

CREATE TABLE IF NOT EXISTS assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  courseId INTEGER
);

-- DEFAULT COURSES
INSERT INTO courses (title, description)
VALUES
('Advanced Database', 'Learn advanced database concepts and SQL optimization'),

('Machine Learning', 'Introduction to AI and machine learning algorithms'),

('Cloud Computing', 'Understand cloud platforms and distributed systems'),

('Software Architecture and Design', 'Study software structures and design patterns'),

('Computer Networks', 'Networking protocols and communication systems');