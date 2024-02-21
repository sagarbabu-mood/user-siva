# Twitter

Given an `app.js` file and a database file `courierTracking.db` consisting of 2 tables `userdetails`, `courier_tracking`,

Write APIs to perform operations on the tables `userdetails`, `courier_tracking`, containing the following columns,

**userdetails Table**

| Column   | Type    |
| -------- | ------- |
| is       | INTEGER |
| name     | TEXT    |
| username | TEXT    |
| password | TEXT    |
| gender   | TEXT    |
| mail_id  | TEXT    |

**courier_tracking**

0|tracking_id|INTEGER|0||1
1|tracking_number|VARCHAR|1||0
2|courier_material|TEXT|0||0
3|courier_status|VARCHAR|0||0
4|location|VARCHAR|0||0
5|courier_initiated_time|TIMESTAMP|0|CURRENT_TIMESTAMP|0

{
"username":"SivaNarayana150",
"password":"Cat150@"
}

```

<Section id="section1" >

### API 1

#### Path: `/register/`

#### Method: `POST`

**Request**

```

{
"username":"SivaNarayana150",
"password":"Cat150@",
"name":"Siva Narayana",
"gender":"male",
"mailId":"kollasivanarayana2003@gmail.com"

}

````

- **Scenario 1**

  - **Description**:

    If the username already exists

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      User already exists
      ```

- **Scenario 2**

  - **Description**:

    If the registrant provides a password with less than 6 characters

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Password is too short
      ```

- **Scenario 3**

  - **Description**:

    Successful registration of the registrant

  - **Response**

    - **Status code**

      ```
      200
      ```

    - **Body**
      ```
      User created successfully
      ```

</Section>

<Section id="section2">

### API 2

#### Path: `/login/`

#### Method: `POST`

**Request**

````

{
"username":"SivaNarayana150",
"password": "Cat150@"
}

- **Scenario 1**

  - **Description**:

    If the user doesn't have a
    tracking account

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid user
      ```

- **Scenario 2**

  - **Description**:

    If the user provides an incorrect password

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid password
      ```

- **Scenario 3**

  - **Description**:

    Successful login of the user

  - **Response**

    Return the JWT Token

    ```
    {
      "jwtToken": "ak2284ns8Di32......"
    }
    ```

</Section>

<Section id="authToken">

### Authentication with JWT Token

Write a middleware to authenticate the JWT token.

- **Scenario 1**

  - **Description**:

    If the JWT token is not provided by the user or an invalid JWT token is provided

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid JWT Token
      ```

- **Scenario 2**
  - After successful verification of JWT token, proceed to next middleware or handler

</Section>

<Section id="section3">

### API 3

#### Path: `/user/following/`

#### Method: `POST`

#### Description:

posts the new tracking

#### Response

```
"new tracking is created successfuuly"
```

</Section>

<Section id="section4">

### API 4

#### Path: '"/victamanservices/"'

#### Method: `GET`

#### Description:

returns all the trackings data that couriered

#### Response

```
 [
    {
           "id":1
     "trackingNumber":"H707567935",
   "courierMaterial":"clothing",
    "courierStatus":"In transit",
    "location":"Vishakapatnam",
    "courier_initiated_time": "2021-04-07 14:50:19"




   },

   ...

   ...
 ]
```

</Section>

<Section id="section5">

### API 5

#### Path: `/victamanservices/tracking"`

#### Method: `GET`

#### Description:

Returns the tracking details by passing tracking number as query parameter

#### Response

```
[
     {
           "id":1
     "trackingNumber":"H707567935",
   "courierMaterial":"clothing",
    "courierStatus":"In transit",
    "location":"Vishakapatnam",
    "courier_initiated_time": "2021-04-07 14:50:19"




   },

  ...
]
```

</Section>

<Section id="section6">

### API 6

#### Path: `/victamanservices/:trackingId"`

#### Method: `PUT`

- **Scenario 1**

  - **Description**:

    If the user requests tracking details with wrong id and update the tracking details

  - **Response**
    - **Status code**
      ```
      401
      ```
    - **Body**
      ```
      Invalid Request
      ```

- **Scenario 2**

  - **Description**:

    If the user requests tracking details with correct id and update the tracking details

  - **Response**
    ```
    {
      tracking is updated successfully
    }
    ```

</Section>

<Section id="section7">

### API 11

#### Path: `/victamanservices/:trackingId`

#### Method: `DELETE`

- **Scenario 1**

  - **Description**:

    If the user requests to delete a tracking other than Authenticated user

  - **Response**
    - **Status code**
      ```
      500
      ```
    - **Body**
      ```
      Internal Server Error
      ```

- **Scenario 2**

  - **Description**:

    If the user deletes tracking

  - **Response**
    ```
    Tracking deleted successfully
    ```

</Section>

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
