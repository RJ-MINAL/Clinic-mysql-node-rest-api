## 1. Get Countries
Use this service to get all the countries

**> Session required**

**1.1 Request:**
* URL: /v1/countries
* Method: GET

**1.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz"
    },
    "responseContent":{
        "countries":[
            {
                "id":1,
                "name":"Guatemala",
                "code":"502"    
            },
            {
                "id":2,
                "name":"El Salvador",
                "code":"503"    
            },
        ]
    }
}
```

| Key                            | Description                                   | Type      | Rules      |
| ------------------------------ | --------------------------------------------- | --------- | ---------- |
| responseContent                | response content                              | Object    | (Required) |
| responseContent.countries      | Countries list                                | ArrayList | (Required) |
| responseContent.countries.id   | Is the id created when a new country is added | Int       | (Required) |
| responseContent.countries.name | Refers to the country name                    | Int       | (Required) |
| responseContent.countries.code | Country code                                  | String    | (Required) |


## 2. Get Ocupations
Use this service to get all the ocupations

**> Session required**

**2.1 Request:**
* URL: /v1/ocupations
* Method: GET

**2.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz"
    },
    "responseContent":{
        "ocupations":[
            {
                "id":1,
                "name":"Developer"
            },
            {
                "id":2,
                "name":"Estudiante"
            },
        ]
    }
}
```

| Key                             | Description                                     | Type      | Rules      |
| ------------------------------- | ----------------------------------------------- | --------- | ---------- |
| responseContent                 | response content                                | Object    | (Required) |
| responseContent.ocupations      | Countries list                                  | ArrayList | (Required) |
| responseContent.ocupations.id   | Is the id created when a new ocupation is added | Int       | (Required) |
| responseContent.ocupations.name | Refers to the ocupation name                    | Int       | (Required) |