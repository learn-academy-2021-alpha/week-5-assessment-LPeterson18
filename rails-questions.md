# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

  $ rails new app_name -d postgresql

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

  To fix this error a new column will need to be added to the model.  In order to do this a migration will need to be run.

  The first command in the terminal will be:

  $ rails generate migration add_foreign_key_column_to_model

  This will create a new file called time_stamp_add_foreign_key_to_model.rb in the migrate directory of the rails app.  The new file will contain the following code:

  class AddColumnsToList < ActiveRecord::Migration[6.0]
    def change
    end
  end

  Between the def change and the following line of code will be added:

  add_column :model, :other_model_id, :integer

  Once this line is added, back in the terminal we can run the following command:

  $ rails db:migrate

  The new column will now be added to the model, and you can begin assigning ids to it.

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

  $ rails generate model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

  PascalCase and singular is the naming convention for generating a Rails model.  The table generated will be a snake_case and plural version of the model name. (e.g. Dog => dogs, TennisPlayer => tennis_players)

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

  The Book model will contain the foreign key, and the column will be named library_id.

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

  The schema file in a Rails app is like a snapshot of the current state of the database.  As the database is updated through migrations, the schema file will update.  It is simply reporting what the database contains, so altering it will have no effect on the database and can only cause errors and confusion.
