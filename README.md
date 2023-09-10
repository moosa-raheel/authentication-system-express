# An Authentication login system in express js

It is login and signup authentication system build in node js framework **express js** I try to give it look like facebook actually recently i learn CRUD in express using mongoose and i learn session in express so i think that i should make some project and i open my google chrome to search some ideas then I saw a facebook I click on it and I redirect to login page so i think that I should build a clone of facebook so I build it  
You can signup and then login it it's not completely facebook because i just want to build an authentication system like facebook not complete facebook in future inshallah I will build complete facebook clone I also build the logic of session its mean if you visit first time on it so it require login but if you login one time and visit again so it does'nt require login again and if you logout so it again require login

![facebook](/public/img/facebook.PNG)

## Setup

### first clone it

```bash
git clone https://github.com/moosa-raheel/authentication-system-express.git
```

### change directory

```bash
cd authentication-system-express
```

### create .env file

craete an .env file and set some evironment variable

```
PORT = YOUR_PORT
MONGO_URI = YOUR_MONGO_URI
DB_USER = YOUR_DB_USER_NAME
DB_PASS = YOUR_DB_PASSWORD
DB_NAME = YOUR_DB_NAME
AUTH_SOURCE = YOUR_USER_SOURCE
```

### Install dependencies

```bash
npm i
```

### Run server

if you want to run development server so run

```bash
npm run dev
```

and if you want to run normal server so run

```bash
npm start
```

your server will be run if you dont configure PORT variable on .env file so it will run port 3000 and if you configure PORT variable o it will run port which you mention
