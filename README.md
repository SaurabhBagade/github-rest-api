
# **Github User And Repositories Listing**

## **Introduction**
NodeJS Backend that fetches data from Github REST API according to the given Username. Has 2 API Endpoints that return UserData and User's Public Repos respectively.


## **Features**

- Public (non-authenticated) users can access the API.
- The API has a predefined Limit set by Github and renews on Hourly basis.


## **Run Locally**

Clone the project

```bash
  git clone https://github.com/SaurabhBagade/github-rest-api
```

Go to the project directory

```bash
  cd github-rest-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### **Usage**
* Run npm start to start the application.
* Connect to the API using any client on port 8082.

## **API Reference**

#### *Get Personal Info*

```http
  GET /v1/github/get-personal-info/{username}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username of Profile to fetch |

#### *Get Profile Repo*

```http
  GET /v1/github/get-repos/{username}?page={page}&limit={limit}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Username of Profile to fetch |
| `page`      | `number` | **Required**. Page from pagination |
| `limit`      | `number` | **Required**. Limit of items displayed per `page` |


### **Technologies Used**
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.


## **Authors**

- [@SaurabhBagade](https://github.com/SaurabhBagade)


## **License**
This project is available for use under the [MIT](https://choosealicense.com/licenses/mit/) License.



