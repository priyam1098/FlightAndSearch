# Welcome to the Flights Service

## Project Setup

-Clone the project on your local

- Execute `npm install` on the same path as your root direcorty of the download project
  -Create a `.env` file in thee root direcoty and add the following environment variable -`PORT =3000`
- Inside the `src/cpnfig` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <your db login>,
    "password": <your_password>,
    "database": <name_of_DB>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

Once done then in terminal do `npx sequelize db:create`

## DB DESIGN

- Airplane table

  - Id
  - model_number
  - capacity
  - created_at
  - updated_at

- Flight table

  - id
  - departure_city_id
  - destination_city \_id

  - airplane_id
  - departure
  - arrival
  - flight number
  - Airport_id

- Airport

  - id
  - name
  - city_id
  - address

- City
- id
- name
  ##Flights Table
