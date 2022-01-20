
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

## This project part of free code camp backend api module, i learned express, what is post method what is get method, how to pass data from front-end to backend.  
### live demo [here](https://Timestamp-api-Microservice.karanmj.repl.co)
  
 
 <br>
 <details>
    <summary>User Stories:</summary>
 1. A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

2. A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

3. A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

4. Your project can handle dates that can be successfully parsed by new Date(date_string)

5. If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

6. An empty date parameter should return the current time in a JSON object with a unix key

7. An empty date parameter should return the current time in a JSON object with a utc key
</details>
 <br>

# Technology used to build this project

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
<!-- ![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) -->



## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/KMJ-007/Timestamp-api-Microservice.git
```

2. Change the working directory

```bash
cd Timestamp-api-Microservice
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

5. Run the app

```bash
npm run dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.