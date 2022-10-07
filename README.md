<img src="https://repository-images.githubusercontent.com/248812720/56902700-c5bd-11ea-813f-ed8631377258" width="400"/>

# FullStack web app using the PERN stack
In this Repo you can find a really basic PERN stack TODO app.

## Styles
In order to manage the styles of the app, MUI was the option to go

## Architecture of the project
As it's a fullstack project, the root of the repo is all about the backend.
In the `src/client` directory you can find the frotend side.

In order to use the app locally, you must run both, the server and the frontend

## Setup
1. Fork & Clone the project in local
2. Install all the dependencies in both: backend and frotend directories
3. Create the local database, you can find the SQL code to create the db in `src/database/db.sql`. In you local machine, you should have installed: Postgres and Node.js
4. Once you have the info of your database, create a `.env` file at the root of the backend project - At the same level of the file `.env.example` that I created for you
5. The `.env` file must be similar to the `.env.example` but with your custom data
6. Run both, the backend and the frontend with the command `npm run dev`
