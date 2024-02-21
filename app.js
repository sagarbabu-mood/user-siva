const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const dbPath = path.join(__dirname, "courierTracking.db");
const app = express();

app.use(express.json());

let db = "";

//initialization of  database

const initializationDataBaseServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3001, () => {
      console.log("Server Running Successfully On https://localhost:3001");
    });
  } catch (error) {
    console.log(`DataBase Error ${error.message}`);
    process.exit(1);
  }
};

initializationDataBaseServer();

const convertDataBaseObject = (dbObject) => {
  return {
    mailId: dbObject.mail_id,
    name: dbObject.name,
    username: dbObject.username,
    password: dbObject.password,
    gender: dbObject.gender,
  };
};

// writing a middle wear function for authentication

const Authentication = async (request, response, next) => {
  const authorizedHeader = request.headers["authorization"];
  let JWTToken = "";

  if (authorizedHeader !== undefined) {
    JWTToken = authorizedHeader.split(" ")[1];
  }

  if (JWTToken === undefined) {
    response.status(400);
    response.send("Invalid JWT Token");
  } else {
    jsonwebtoken.verify(JWTToken, "SECRET_KEY", async (error, payload) => {
      if (error) {
        response.status(400);
        response.send("Invalid JWT token");
      } else {
        request.username = payload;
        next();
      }
    });
  }
};

//Registration Of User

app.post("/register/", async (request, response) => {
  const { username, password, name, gender, mailId } = request.body;
  //check whether user already exists
  const fetchUserExistence = `SELECT * FROM userdetails WHERE username='${username}';`;

  const userDetails = await db.get(fetchUserExistence);

  if (userDetails === undefined) {
    //create new user
    if (password.length > 5) {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const createNewUser = `INSERT INTO userdetails (username,password,name,gender,mail_id) VALUES
            (
                '${username}',
                '${hashedPassword}',
                '${name}',
                '${gender}',
                '${mailId}'
            
            
            );`;
      await db.run(createNewUser);
      response.status(200);
      response.send("User Created Successfully");
    } else {
      response.status(400);
      response.send("Password must be more than  5 Characters");
    }
  } else {
    response.status(400);
    response.send("User Name Already Exists");

    //warning user already exists
  }
});

app.post("/login/", async (request, response) => {
  const { username, password } = request.body;
  const fetchUserExistence = `SELECT * FROM userdetails WHERE username='${username}';`;

  const userDetails = await db.get(fetchUserExistence);

  if (userDetails === undefined) {
    response.status(400);
    response.send("Invalid User");
  } else {
    const getUserNameAndPasswordFromDetails = convertDataBaseObject(
      userDetails
    );

    const isPasswordMatched = await bcrypt.compare(
      password,
      getUserNameAndPasswordFromDetails.password
    );

    if (isPasswordMatched === true) {
      const payload = getUserNameAndPasswordFromDetails.username;
      console.log(payload);
      const jwtToken = jsonwebtoken.sign(payload, "SECRET_KEY");

      response.send({ jwtToken });
    } else {
      response.status(400);

      response.send("Invalid Password");
    }
  }
});

module.exports = app;
