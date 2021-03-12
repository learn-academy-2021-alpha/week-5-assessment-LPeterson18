# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb
library - appended to the url
:id - param added to the url
book - controller
show - method in the controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

rails generate migration
add the name of the table, name of the column, integer
rails db:migrate



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

app/models/person.rb
class Owner < ApplicationRecord
validates :shirt, :pants, :shoes, presence: true
end



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Model - Capitalized, singular
Table - snake_case, plural
