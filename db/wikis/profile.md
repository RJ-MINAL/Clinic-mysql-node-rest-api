## 1. Get Profile
Use this service to get the profile for doctors and secretariats.

**> Session required**

**1.1 Request:**
* URL: /v1/profile/get_profile
* Method: POST
* Body:
```json
{
    "requestContent":{
        "user_name":"correo@correo.com",
        "password":"123abcd"
    }
}
```

| Key                      | Description                                            | Type   | Rules      |
| ------------------------ | ------------------------------------------------------ | ------ | ---------- |
| requestContent           | request content                                        | Object | (Required) |
| requestContent.user_name | Refers to the doctor or secretariat user name or email | String | (Required) |
| requestContent.password  | Doctor or secretariat password                         | String | (Required) |


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
        "profile":{
            "id":356,
            "name":"Silvia",
            "lastname":"Marroquin",
            "phone":"56789131",
            "dpi":"41312312",
            "address":"4ta calle 2 avenida zona 8 Bolivar",
            "blocked":false,
            "email":"correo@correo.com",
            "rol":{
                "id":2,
                "description":"Admin"
            },
            "clinic":{
                "id":45,
                "name":"Clinica Engazada",
                "address":"12 avenida lote 33 zona 9"
            },
            "configured":true,
            "avatar":{
                "id":5,
                "code_image":4,
                "skin_color":"#A89B12",
                "cloth_color":"#A89B12",
                "hair_color":"#A89B12"
            },
            "country":{
                "id":9,
                "name":"Guatemala"
            },
            "age":32   
        } 
    }
}
```

| Key                                        | Description                                                       | Type   | Rules          |
| ------------------------------------------ | ----------------------------------------------------------------- | ------ | -------------- |
| responseContent                            | response content                                                  | Object | (Required)     |
| responseContent.profile                    | profile object                                                    | Object | (Required)     |
| responseContent.profile.id                 | User id                                                           | Int    | (Required)     |
| responseContent.profile.name               | User name                                                         | String | (Required)     |
| responseContent.profile.lastname           | User lastname                                                     | String | (Required)     |
| responseContent.profile.phone              | User phone                                                        | String | (Required)     |
| responseContent.profile.dpi                | User dpi                                                          | String | (Required)     |
| responseContent.profile.address            | User address                                                      | String | (Required)     | responseContent.profile.blocked | Refers if the user have access to application | Boolean | (Required) |
| responseContent.profile.email              | User email                                                        | String | (Required)     |
| responseContent.profile.rol                | User rol                                                          | Object | (Required)     |
| responseContent.profile.rol.id             | Rol id                                                            | Int    | (Required)     |
| responseContent.profile.rol.description    | Rol description                                                   | String | (Required)     |
| responseContent.profile.clinic             | User clinic                                                       | Object | (Required)     |
| responseContent.profile.clinic.id          | Clinic id                                                         | Int    | (Required)     |
| responseContent.profile.clinic.name        | Clinic name                                                       | String | (Required)     |
| responseContent.profile.clinic.address     | Clinic address                                                    | String | (Required)     |
| responseContent.profile.configured         | Refers if the user have to configured the profile (create avatar) | String | (Required)     |
| responseContent.profile.avatar             | User avatar (Can be null, if the user is not configured yet)      | Object | (Not required) |
| responseContent.profile.avatar.id          | Avatar id                                                         | Int    | (Required)     |
| responseContent.profile.avatar.code_image  | Avatar code image                                                 | String | (Required)     |
| responseContent.profile.avatar.skin_color  | Avatar skin color                                                 | String | (Required)     |
| responseContent.profile.avatar.cloth_color | Avatar cloth color                                                | String | (Required)     |
| responseContent.profile.avatar.hair_color  | Avatar hair color                                                 | String | (Required)     |
| responseContent.profile.country            | User country                                                      | Object | (Required)     |
| responseContent.profile.country.id         | Country id                                                        | Int    | (Required)     |
| responseContent.profile.country.name       | Country name                                                      | String | (Required)     |
| responseContent.profile.age                | User age                                                          | Int    | (Required)     |