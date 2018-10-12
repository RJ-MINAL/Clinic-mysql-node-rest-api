## 1. Save Avatar
Use this service to save avatar patient, this service should be consume before the "save patient" service.

**> Session required**

**1.1 Request:**
* URL: /v1/patient/save_avatar
* Method: POST
* Body:
```json
{
    "requestContent":{
        "avatar":{
            "code_image":1,
            "skin_color":"#BC9A12",
            "cloth_color":"#BC9A12",
            "hair_color":"#BC9A12"    
        }
    }
}
```

| Key                              | Description                                              | Type   | Rules      |
| -------------------------------- | -------------------------------------------------------- | ------ | ---------- |
| requestContent                   | request content                                          | Object | (Required) |
| requestContent.avatar            | Avatar object                                            | Object | (Required) |
| requestContent.avatar.codeImage  | Refers to the avatar template stored in the applications | Int    | (Required) |
| requestContent.avatar.skinColor  | Avatar skin color                                        | String | (Required) |
| requestContent.avatar.clothColor | Avatar cloth color                                       | String | (Required) |
| requestContent.avatar.hairColor  | Avatar hair color                                        | String | (Required) |

**1.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz",
        "title": "Kary",
        "message":"Avatar creado exitosamente."
    },
    "responseContent":{
        "avatar":{
            "id":34,
            "code_image":1,
            "skin_color":"#BC9A12",
            "cloth_color":"#BC9A12",
            "hair_color":"#BC9A12"    
        }
    }
}
```

| Key                               | Description                                              | Type   | Rules      |
| --------------------------------- | -------------------------------------------------------- | ------ | ---------- |
| responseContent                   | response content                                         | Object | (Required) |
| responseContent.avatar            | Avatar object                                            | Object | (Required) |
| responseContent.avatar.id         | Is the id created when a new avatar is added             | Int    | (Required) |
| responseContent.codeImage         | Refers to the avatar template stored in the applications | Int    | (Required) |
| responseContent.avatar.skinColor  | Avatar skin color                                        | String | (Required) |
| responseContent.avatar.clothColor | Avatar cloth color                                       | String | (Required) |
| responseContent.avatar.hairColor  | Avatar hair color                                        | String | (Required) |

## 2. Save Patient

Use this service to save patient information 

**> Session required** 

**2.1 Request:**
* URL: /v1/patient/save_patient
* Method: POST
* Body:
``` json
{
    "requestContent":{
        "patient":{
            "name":"Olivia Marie",
            "last_name":"Whites Lex",
            "phone": "58594212",
            "dpi": "23041931231",
            "address":"3era avenida Lote 54 zona 6",
            "email":"correo@correo.com",
            "inscription_date":"2018-05-19",
            "id_clinica":23,
            "id_ocupation":21,
            "age":25,
            "id_avatar":37,
            "id_country":1
        }
    }
}
```
| Key                                                                                                                | Description                                              | Type       | Rules                |
|   ---------------------------------------- ----------------------------------- ----------------------------------- |   -------------------------- ------------- ------------- |   ------   |   ---------- --- --- |
|   responsetContent                                                                           |   response content                                 |   Object | (Required)   |
|   responseContent.patient                                                      |   patient                                                          | Object | (Required)   |
|   responseContent.patient.name                                       |   patient´s name                                       |   String   |   (Required)   |
|   responseContent.patient.lastname                           |   patient´s lastname                           |   String   |   (Required)   |
|   responseContent.patient.phone                                    |   patient´s phone                                    |   String   |   (Required)   |
|   responseContent.patient.dpi                                          |   patient´s dpi                                          |   String   |   (Required)   |
|   responseContent.patient.address                              |   patient´s address                              |   String   |   (Required)   |
|   responseContent.patient.email                                    |   patient´s email                                    |   String   |   (Required)   |
|   responseContent.patient.inscription_date   |   patient´s inscription date   |   String   |   (Required)   |
|   responseContent.patient.id_clinica                     |   patient´s clinica                              |   Int            |   (Required)   |
|   responseContent.patient.ocupation                        |   patient´s ocupation                        |   String   |   (Required)   |
|   responseContent.patient.age                                          |   patient´s age                                          |   Int            |   (Required)   |
|   responseContent.patient.id_avatar                        |   patient´s avatar                                 |   Int            |   (Required)   |
|   responseContent.patient.id_country                     |   patient´s country                              |   Int            |   (Required)   |


**2.2 Response:**

* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info": {
        "type": "success"
    }
}
```

| Key  | Description | Type   | Rules      |
| ---- | ----------- | ------ | ---------- |
| info | info object | Object | (Required) |


## 3. Get Patient History
Use this service to get the patient history

**> Session required**

**3.1 Request:**
* URL: /v1/patient/get_history
* Method: POST
* Body:
```json
{
    "requestContent":{
        "patient":{
            "id":45
        }    
    }
}
```

| Key                       | Description     | Type   | Rules      |
| ------------------------- | --------------- | ------ | ---------- |
| requestContent            | request content | Object | (Required) |
| requestContent.patient    | Patient object  | Object | (Required) |
| requestContent.patient.id | Avatar id       | Int    | (Required) |

**3.2 Response:**
* HTTP Status: 200 (Ok)
* Body:
```json
{
    "info":{
        "session_id":"Axadf&87VBCad123",
        "type":"success"
    },
    "responseContent": {
        "history":[
            {
                "id":56,
                "date":"2018-08-10 a las 10:00 AM",
                "comment":"Una description de la cita",
                "photo_url":"https//:photodelpaciente.com",
                "action":{
                    "id":5,
                    "description":"Ha agregado un tratamiento"
                },
                "doctor":{
                    "id":567,
                    "name":"Pablo",
                    "lastname":"Juarez"
                }
            },
            {
                "id":57,
                "date":"2018-08-12 a las 11:00 AM",
                "comment":"Una description de la cita",
                "photo_url":"https//:photodelpaciente.com",
                "action":{
                    "id":5,
                    "description":"Ha agregado un tratamiento"
                },
                "doctor":{
                    "id":567,
                    "name":"Pedro",
                    "lastname":"Albiz"
                }
            },
            ...
        ]
    }
}
```

## 4. Get Patient Detail
Use this service to get patient detail

**> Session required**

**4.1 Request:**
* URL: /v1/patient/get_detail
* Method: POST
* Body:
```json
{
    "requestContent":{
        "patient":{
            "id":1
        }
    }
}
```

| Key                                             | Description         | Type     | Rules           |
| ------------------- ------------------------- - |  --------------- -- |  ------  |  ---------- --- |
|  requestContent                        |  request content  |  Object | (Required)  |
|  requestContent.patient        |  Patient object    |  Object  |  (Required) | |
|  requestContent.patient.id  |  Patient id            |

**4.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz"
    },
    "responseContent":{
        "patient":{
            "name":"Olivia Marie",
            "last_name":"Whites Lex",
            "phone": "58594212",
            "dpi": "23041931231",
            "address":"3era avenida Lote 54 zona 6",
            "email":"correo@correo.com",
            "inscription_date":"2018-05-19",
            "clinic":{
                "id" : 1,
                "name" : "Clinica dental"
            },
            "ocupation":{
                "id" : 2,
                "description" : "Developer"
            },
            "age":25,
            "avatar" : {
                "id" : 2,
                "code_image" : 3,
                "skin_color" : "#341231",
                "cloth_color" : "#823911",
                "hair_color" : "#1231r1a"
            },
            "country" :{
                "id" : 3,
                "name" : "Guatemala",
                "code" : 502
            }
            
        }
    }
}
```

| Key | Description | Type | Rules |
|-----|-------------|------|-------|
|responsetContent|response content|Object | (Required)|
|responseContent.patient|patient | Object | (Required)|
|responseContent.patient.name|patient´s name|String|(Required)|
|responseContent.patient.lastname|patient´s lastname|String|(Required)|
|responseContent.patient.phone|patient´s phone|String|(Required)|
|responseContent.patient.dpi|patient´s dpi|String|(Required)|
|responseContent.patient.address|patient´s address|String|(Required)|
|responseContent.patient.email|patient´s email|String|(Required)|
|responseContent.patient.inscription_date|patient´s inscription date|String|(Required)|
|responseContent.patient.id_clinica|patient´s clinica|Int|(Required)|
|responseContent.patient.ocupation|patient´s ocupation|String|(Required)|
|responseContent.patient.age|patient´s age|Int|(Required)|
|responseContent.patient.id_avatar|patient´s avatar|Int|(Required)|
|responseContent.patient.id_country|patient´s country|Int|(Required)|


## 5. Delete Patient
Use this service to get patient detail

**> Session required**

**5.1 Request:**
* URL: /v1/patient/delete
* Method: POST
* Body:
```json
{
    "requestContent":{
        "patient":{
            "id":1
        }
    }
}
```

| Key | Description | Type | Rules |
|-----|-------------|------|-------|
|requestContent|request content|Object | (Required)|
|requestContent.patient|Patient object|Object|(Required)
|requestContent.patient.id|Patient id|

**5.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz",
        "title" : "Kare",
        "message" : "Paciente eliminado con éxito"
    }
}

```

## 6. Update Patient
Use this service to update the patient

**> Session required**

**5.1 Request:**
* URL: /v1/patient/delete
* Method: POST
* Body:
```json
{
    "requestContent":{
        "patient":{
            "name":"Olivia Marie",
            "last_name":"Whites Lex",
            "phone": "58594212",
            "dpi": "23041931231",
            "address":"3era avenida Lote 54 zona 6",
            "email":"correo@correo.com",
            "inscription_date":"2018-05-19",
            "id_clinica":23,
            "id_ocupation":21,
            "age":25,
            "id_avatar":37,
            "id_country":1
        }
    }
}
```

| Key | Description | Type | Rules |
|-----|-------------|------|-------|
|responsetContent|response content|Object | (Required)|
|responseContent.patient|patient | Object | (Required)|
|responseContent.patient.name|patient´s name|String|(Required)|
|responseContent.patient.lastname|patient´s lastname|String|(Required)|
|responseContent.patient.phone|patient´s phone|String|(Required)|
|responseContent.patient.dpi|patient´s dpi|String|(Required)|
|responseContent.patient.address|patient´s address|String|(Required)|
|responseContent.patient.email|patient´s email|String|(Required)|
|responseContent.patient.inscription_date|patient´s inscription date|String|(Required)|
|responseContent.patient.id_clinica|patient´s clinica|Int|(Required)|
|responseContent.patient.ocupation|patient´s ocupation|String|(Required)|
|responseContent.patient.age|patient´s age|Int|(Required)|
|responseContent.patient.id_avatar|patient´s avatar|Int|(Required)|
|responseContent.patient.id_country|patient´s country|Int|(Required)|

**6.2 Response**
* HTTP Status: 200 (Ok)
* Body:

``` json
{
    "info":{
        "type": "success",
        "session_id":"Ax91iaosaijE90CA90adsoz",
        "title" : "Kare",
        "message" : "Paciente modificado con éxito"
    }
}
```