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
  - destination_city id

  - airplane_id
  - departure
  - arrival
  - flight number
  - Airport_id

- Airport (airport belogns a city)

  - id
  - name
  - city_id
  - address

- City (city has many airpot)
- id
- name
  ##Flights Table

  command: npx sequelize seed:generate --name add-airports
  npx sequelize db:seed:all
  npx sequelize seed:generate --name add-airplanes
  include query for include other table data as well
  sequelize.sync --> db level sync
  db.sequelize.sync({alter:true})
  some eg :
    <!-- const city = await City.findOne({
        where: {
          id: 21,
        },
      });
      const airports = await city.getAirports();
      console.log(airports); -->

  when seed values seeders need all values
