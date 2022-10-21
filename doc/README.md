# URI

## Route 1

_URI_: "/"

_Description_: It must serve inddex.html from react js build

_Request_:
GET /

_Response_:

```
<!DOCTYPE HTML> ....
```

---

## Route 2

_URI_: "/api/user/auth"

_Description_: It must check if user's password and username is valid or not and on validation send a jwt token and set it as cookie in client browser

_Request_:

```json
GET /api/user/auth

{
  "email": "User001@gmail.com",
  "password": "12345678"
}
```

_Response_:

if invalid:

```json
400 Bad Request
{
  "error": "invalid username"
}
```

if validated:

```json
200 OK

{
  "token": "k283f2ijf29wnio3"
}
```

---

## Route 3

_URI_: "/api/user/new"

_Description_: it creates a new user with email and addition things provided from client side and sends jwt token as cookie back

_Request_:

```json
POST /api/user/new

{
    "firstname": "User",
    "lastname": "001",
    "contactNumber": "8989898989",
    "email": "user001@gmail.com",
    "college": "CEG",
    "password": "12345678"
}
```

_Response_:

```json
200 OK
{
    "token": "sadjw3y3i23"
}
```

```json
400 BAD REQUEST
{
    "error": "invalid email id"
}
```

## Route 4

_URI_: "/api/user/details"

_Description_: Send all user details with jwt token which exist in browser cookie

_Request_:

GET /api/user/details

_Response_:

```json
401 UNAUTHORISED

{
    "error": "unauthorised user"
}
```

```json
200 OK
{
    "userName": "User001",
    "userEmail": "user001@gmail.com",
    "Team": "",
    "level": 0,
    "rank": 1
}

```

## Route 5

_URI_: "/api/leaderboard"

_Description_: Returns leader board table

_Request_:

```json
GET /api/leaderboard

{
    "startRank": 1,
    "endRank": 3
}
```

_Response_:

```json
200 OK

[
    {
        "username": "User001",
        "level": 7,
        "movement": 1,
        "rank": 1
    },
    {
        "username": "User002",
        "level": 6,
        "movement": -1,
        "rank": 2
    },
    {
        "username": "User003",
        "level": 5,
        "movement": 1,
        "rank": 3
    }
]
```

## Route 6

_URI_: "/api/leaderboard/search"

_Description_: Returns leader board table

_Request_:

```json
GET /api/leaderboard

{
    "searchTerm": "00",
    "limit": 2,
    "page": 1
}
```

_Response_:

```json
200 OK

[
    {
        "username": "User001",
        "level": 7,
        "movement": 1,
        "rank": 1
    },
    {
        "username": "User002",
        "level": 6,
        "movement": -1,
        "rank": 2
    }
]
```

```json
200 OK

[
    {
        "username": "User003",
        "level": 5,
        "movement": 1,
        "rank": 3
    },
    {
        "username": "User004",
        "level": 4,
        "movement": -1,
        "rank": 4
    }
]
```



this is test !!