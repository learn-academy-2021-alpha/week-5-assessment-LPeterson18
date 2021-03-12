# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model - backend, database, View - frontend, Controller - allows the back and front to communicate, everything together makes a full-stack app

  Researched answer:



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: Create, Read, Update, Delete / the application can perform all of the actions in CRUD

  Researched answer:



3. What is a migration? Why would you use one?

  Your answer: Add, remove or edit information in your database, migration files are used to change the state of the database, never update the schema directly, use a migration

  Researched answer:



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: person has_many computers, computer belongs_to person (computer would have the foreign key), person has_one computer, computer belong_to person (computer would have the foreign key), computer has_many people, person belongs_to computer (person foreign key), computer has_many people, people has_many computers (has_many_through - team has many members)

  Researched answer:



5. What is object-relational mapping?

  Your answer: ORM, translating data between two incompatible languages, example: Active Record

  Researched answer:



6. What is a gem?

  Your answer: packages that can be installed in Ruby and Rails

  Researched answer:



7. Why is it important to have validations in your application?

  Your answer: All user input fields meet the necessary requirements

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - architectural style, create default routes
- JSON - JavaScript object notation, it is code used to store and transmit data objects that are key:value pairs or arrays. Basic data types include: number, string, boolean, array, object, and NULL.
- API - application programming interface, set of functions and procedures, lets apps talk to each other
- Endpoints - the point at which the api connects with the software
- Strong params - feature in Rails that prevents assigning request params to objects unless they have been explicitly permitted 
