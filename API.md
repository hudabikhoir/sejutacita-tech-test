
# sejutacita



## Indices

* [auth](#auth)

  * [login](#1-login)
  * [register](#2-register)

* [users](#users)

  * [add new user](#1-add-new-user)
  * [delete user by id](#2-delete-user-by-id)
  * [get all users](#3-get-all-users)
  * [update users](#4-update-users)


--------


## auth



### 1. login



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/auth/login
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| email | nurhuda@mail.com |  |
| password | hudahuda |  |



***More example Requests/Responses:***


##### I. Example Request: success response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| email | nurhuda@mail.com |  |
| password | hudahuda |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "success",
    "data": {
        "user": {
            "_id": "60ce1ae916c3b987d9140b12",
            "name": "nurhuda",
            "email": "nurhuda@mail.com",
            "role_id": 2,
            "password": "$2b$10$NQLEs3rh1.q0VP.jedE5vuhFiGllgeXQvHi/UOHz9i7rQcl3kxPbm",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2UxYWU5MTZjM2I5ODdkOTE0MGIxMiIsImlhdCI6MTYyNDEyMDc0NiwiZXhwIjoxNjI0MTI0MzQ2fQ.pwFs07m_lMWNG9CCS48YCVZqdNCsEsz60nz_r9l2Y88"
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: failed response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| email | nurhuda@mail.com |  |
| password | hudahuda1 |  |



##### II. Example Response: failed response
```js
{
    "response_code": "99",
    "message": "Invalid email or password. Please check again!",
    "data": null
}
```


***Status Code:*** 200

<br>



### 2. register



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/auth/register
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | nurhuda |  |
| email | nurhuda@mail.com |  |
| password | hudahuda |  |



***More example Requests/Responses:***


##### I. Example Request: success response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | nurhuda |  |
| email | nurhuda@mail.com |  |
| password | hudahuda |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "success",
    "data": null
}
```


***Status Code:*** 200

<br>



##### II. Example Request: failed response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | nurhuda |  |
| email | nurhuda@mail.com |  |



##### II. Example Response: failed response
```js
{
    "response_code": "500",
    "message": "Something looks wrong."
}
```


***Status Code:*** 500

<br>



## users



### 1. add new user



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: {{url}}/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | mukhlisin alahudin |  |
| role_id | 1 |  |
| password | admin123 |  |
| email | mukhlis@mail.com |  |



***More example Requests/Responses:***


##### I. Example Request: success response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | mukhlisin alahudin |  |
| role_id | 1 |  |
| password | admin123 |  |
| email | mukhlis@mail.com |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "User added successfully",
    "data": null
}
```


***Status Code:*** 200

<br>



##### II. Example Request: failed response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | mukhlisin alahudin |  |
| role_id | 1 |  |
| password | admin123 |  |



##### II. Example Response: failed response
```js
{
    "response_code": "500",
    "message": "Something looks wrong."
}
```


***Status Code:*** 500

<br>



##### III. Example Request: invalid token response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | mukhlisin alahudin |  |
| role_id | 1 |  |
| password | admin123 |  |



##### III. Example Response: invalid token response
```js
{
    "response_code": "99",
    "message": "jwt must be provided",
    "data": null
}
```


***Status Code:*** 200

<br>



### 2. delete user by id



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: 127.0.0.1:3000/users/60ce214ec76d3d891250ad43
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***More example Requests/Responses:***


##### I. Example Request: success response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "user deleted successfully",
    "data": null
}
```


***Status Code:*** 200

<br>



##### II. Example Request: user_id not found response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



##### II. Example Response: user_id not found response
```js
{
    "response_code": "500",
    "message": "Something looks wrong."
}
```


***Status Code:*** 500

<br>



##### III. Example Request: invalid token response



##### III. Example Response: invalid token response
```js
{
    "response_code": "99",
    "message": "jwt must be provided",
    "data": null
}
```


***Status Code:*** 200

<br>



### 3. get all users



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{url}}/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***More example Requests/Responses:***


##### I. Example Request: success response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2MzNTZiMGRlZTVmNmM3NTc1YzJjOCIsImlhdCI6MTYyNDExODgyNiwiZXhwIjoxNjI0MTIyNDI2fQ.zSh75VNesOnYxrxMOBw5pyy4uAWm9XIF8h6dmgv2euw |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "success",
    "data": {
        "users": [
            {
                "id": "60cc356b0dee5f6c7575c2c8",
                "name": "huda bikhoir",
                "email": "huda@mail.com",
                "role_id": 1
            },
            {
                "id": "60ce1ae916c3b987d9140b12",
                "name": "nurhuda",
                "email": "nurhuda@mail.com",
                "role_id": 2
            }
        ]
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: invalid token response



##### II. Example Response: invalid token response
```js
{
    "response_code": "99",
    "message": "jwt must be provided",
    "data": null
}
```


***Status Code:*** 200

<br>



### 4. update users



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: {{url}}/users/60ce214ec76d3d891250ad43
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| role_id | 2 |  |
| name | mukhlis baru |  |



***More example Requests/Responses:***


##### I. Example Request: success response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| role_id | 2 |  |
| name | mukhlis baru |  |



##### I. Example Response: success response
```js
{
    "response_code": "00",
    "message": "user updated successfully",
    "data": null
}
```


***Status Code:*** 200

<br>



##### II. Example Request: failed response


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | {{token}} |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| role_id | 2 |  |
| name | mukhlis baru |  |



##### II. Example Response: failed response
```js
{
    "response_code": "500",
    "message": "Something looks wrong."
}
```


***Status Code:*** 500

<br>



##### III. Example Request: invalid token response



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| role_id | 2 |  |
| name | mukhlis baru |  |



##### III. Example Response: invalid token response
```js
{
    "response_code": "99",
    "message": "jwt must be provided",
    "data": null
}
```


***Status Code:*** 200

<br>



---
[Back to top](#sejutacita)
