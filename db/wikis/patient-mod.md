## 1. Get All Patients

Use this service to get the patient history

**> DB Admin required**

**1.1 Request:**

- URL: /api/v1/patient/
- Method: GET
- Body: Empty

**1.2 Response:**

- HTTP Status: 200 (Ok)
- Body:

```json
[
    {
        "id": 1,
        "name": "Paciente1",
        "last_name": "Apellido",
        "email": "paciente1@gmail.com",
        "phone": "56456578",
        "address": "address paciente",
        "dpi": "235465784545",
        "incription_date": "12/01/18",
        "age": 25,
        "id_avatar": 4,
        "id_country": 1,
        "id_clinic": 1,
        "id_ocupation": 1,
        "active": 1
    },
    {
        "id": 2,
        "name": "Ken",
        "last_name": "Bon",
        "email": "KenBon@gmail.com",
        "phone": "56456578",
        "address": "address paciente",
        "dpi": "235465784545",
        "incription_date": "12/01/18",
        "age": 26,
        "id_avatar": 5,
        "id_country": 1,
        "id_clinic": 1,
        "id_ocupation": 1,
        "active": 1
    },
  ...
]
```

## 2. Save Patient

Use this service to save patient information

**> Session required**

**2.1 Request:**

- URL: /api/v1/patient
- Method: POST
- Body:

```json
{
  "requestContent": {
    "patient": {
      "name": "Olivia Marie",
      "last_name": "Whites Lex",
      "phone": "58594212",
      "dpi": "2304193123131",
      "address": "3era avenida Lote 54 zona 6",
      "email": "correo@correo.com",
      "incription_date": "2018-05-19",
      "id_clinic": 1,
      "id_ocupation": 1,
      "age": 25,
      "id_avatar": 5,
      "id_country": 1
    }
  }
}
```

| Key                                     | Description                | Type   | Rules      |
| --------------------------------------- | -------------------------- | ------ | ---------- |
| responsetContent                        | response content           | Object | (Required) |
| responseContent.patient                 | patient                    | Object | (Required) |
| responseContent.patient.name            | patient´s name             | String | (Required) |
| responseContent.patient.lastname        | patient´s lastname         | String | (Required) |
| responseContent.patient.phone           | patient´s phone            | String | (Required) |
| responseContent.patient.dpi             | patient´s dpi              | String | (Required) |
| responseContent.patient.address         | patient´s address          | String | (Required) |
| responseContent.patient.email           | patient´s email            | String | (Required) |
| responseContent.patient.incription_date | patient´s inscription date | String | (Required) |
| responseContent.patient.id_clinica      | patient´s clinica          | Int    | (Required) |
| responseContent.patient.ocupation       | patient´s ocupation        | String | (Required) |
| responseContent.patient.age             | patient´s age              | Int    | (Required) |
| responseContent.patient.id_avatar       | patient´s avatar           | Int    | (Required) |
| responseContent.patient.id_country      | patient´s country          | Int    | (Required) |
| responseContent.patient.active          | Is Patient active          | Int    | (Required) |

**2.2 Response:**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Patient creado exitosamente"
  },
  "responseContent": {
    "patient": {
      "id": 11,
      "name": "Olivia Marie",
      "last_name": "Whites Lex",
      "phone": "58594212",
      "dpi": "2304193123131",
      "address": "3era avenida Lote 54 zona 6",
      "email": "correo@correo.com",
      "age": 25,
      "incription_date": "2018-05-19",
      "id_clinic": 1,
      "id_ocupation": 1,
      "id_avatar": 5,
      "id_country": 1,
      "active": 1
    }
  }
}
```

| Key                                     | Description                | Type   | Rules      |
| --------------------------------------- | -------------------------- | ------ | ---------- |
| info                                    | info object                | Object | (Required) |
| info.type                               | Response status            | String | (Required) |
| info.message                            | Response message           | String | (Required) |
| responsetContent                        | response content           | Object | (Required) |
| responseContent.patient                 | patient                    | Object | (Required) |
| responseContent.patient.name            | patient´s name             | String | (Required) |
| responseContent.patient.lastname        | patient´s lastname         | String | (Required) |
| responseContent.patient.phone           | patient´s phone            | String | (Required) |
| responseContent.patient.dpi             | patient´s dpi              | String | (Required) |
| responseContent.patient.address         | patient´s address          | String | (Required) |
| responseContent.patient.email           | patient´s email            | String | (Required) |
| responseContent.patient.incription_date | patient´s inscription date | String | (Required) |
| responseContent.patient.id_clinica      | patient´s clinica          | Int    | (Required) |
| responseContent.patient.ocupation       | patient´s ocupation        | String | (Required) |
| responseContent.patient.age             | patient´s age              | Int    | (Required) |
| responseContent.patient.id_avatar       | patient´s avatar           | Int    | (Required) |
| responseContent.patient.id_country      | patient´s country          | Int    | (Required) |

## 3. Get Patient History

Use this service to get the patient history

**> Session required**

**3.1 Request:**

- URL: /api/v1/patient/:id/history
- Method: GET
- Body: Empty

**3.2 Response:**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Query successful"
  },
  "responseContent": {
    "history": [
      {
        "id": 1,
        "date": "01/01/2018",
        "comment": "Todo esta bien",
        "photo_url": "https://www.photourl.com/",
        "action": {
          "id": 1,
          "description": "testing1"
        },
        "doctor": {
          "id": 1,
          "name": "Kenneth",
          "lastname": "Moriel"
        }
      },
      {
        "id": 2,
        "date": "11/11/2018",
        "comment": "NADA esta bien",
        "photo_url": "https://www.photourl.com/",
        "action": {
          "id": 1,
          "description": "testing1"
        },
        "doctor": {
          "id": 1,
          "name": "Kenneth",
          "lastname": "Moriel"
        }
      }
      ...
    ]
  }
}
```

## 4. Get Patient Detail

Use this service to get patient detail

**> Session required**

**4.1 Request:**

- URL: /api/v1/patient/:id
- Method: POST
- Body: Empty

**4.2 Response**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "session_id": "Ax91iaosaijE90CA90adsoz"
  },
  "responseContent": {
    "patient": {
      "name": "Olivia Marie",
      "last_name": "Whites Lex",
      "phone": "58594212",
      "dpi": "23041931231",
      "address": "3era avenida Lote 54 zona 6",
      "email": "correo@correo.com",
      "inscription_date": "2018-05-19",
      "clinic": {
        "id": 1,
        "name": "Clinica dental"
      },
      "ocupation": {
        "id": 2,
        "description": "Developer"
      },
      "age": 25,
      "avatar": {
        "id": 2,
        "code_image": 3,
        "skin_color": "#341231",
        "cloth_color": "#823911",
        "hair_color": "#1231r1a"
      },
      "country": {
        "id": 3,
        "name": "Guatemala",
        "code": 502
      }
    }
  }
}
```

| Key                                      | Description                | Type   | Rules      |
| ---------------------------------------- | -------------------------- | ------ | ---------- |
| info                                     | info object                | Object | (Required) |
| info.type                                | Response status            | String | (Required) |
| info.message                             | Response message           | String | (Required) |
| responsetContent                         | response content           | Object | (Required) |
| responseContent.patient                  | patient                    | Object | (Required) |
| responseContent.patient.name             | patient´s name             | String | (Required) |
| responseContent.patient.lastname         | patient´s lastname         | String | (Required) |
| responseContent.patient.phone            | patient´s phone            | String | (Required) |
| responseContent.patient.dpi              | patient´s dpi              | String | (Required) |
| responseContent.patient.address          | patient´s address          | String | (Required) |
| responseContent.patient.email            | patient´s email            | String | (Required) |
| responseContent.patient.inscription_date | patient´s inscription date | String | (Required) |
| responseContent.patient.id_clinica       | patient´s clinica          | Int    | (Required) |
| responseContent.patient.ocupation        | patient´s ocupation        | String | (Required) |
| responseContent.patient.age              | patient´s age              | Int    | (Required) |
| responseContent.patient.id_avatar        | patient´s avatar           | Int    | (Required) |
| responseContent.patient.id_country       | patient´s country          | Int    | (Required) |
| responseContent.patient.active           | Is patient active          | Int    | (Required) |

## 5. Delete Patient

Use this service to get patient detail

**> Session required**

**5.1 Request:**

- URL: /api/v1/patient/:id
- Method: DELETE
- Body: Empty

**5.2 Response**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Patient with ID 12 was deleted"
  },
  "responseContent": {
    "patient": {
      "id": 12,
      "name": "Olivia Marie",
      "last_name": "Whites Lex",
      "email": "correo@correo.com",
      "phone": "58594212",
      "address": "3era avenida Lote 54 zona 6",
      "dpi": "2304193123131",
      "incription_date": "2018-05-19",
      "age": 25,
      "id_avatar": 5,
      "id_country": 1,
      "id_clinic": 1,
      "id_ocupation": 1,
      "active": 1
    }
  }
}
```

| Key                                      | Description                | Type   | Rules      |
| ---------------------------------------- | -------------------------- | ------ | ---------- |
| info                                     | info object                | Object | (Required) |
| info.type                                | Response status            | String | (Required) |
| info.message                             | Response message           | String | (Required) |
| responsetContent                         | response content           | Object | (Required) |
| responseContent.patient                  | patient                    | Object | (Required) |
| responseContent.patient.name             | patient´s name             | String | (Required) |
| responseContent.patient.lastname         | patient´s lastname         | String | (Required) |
| responseContent.patient.phone            | patient´s phone            | String | (Required) |
| responseContent.patient.dpi              | patient´s dpi              | String | (Required) |
| responseContent.patient.address          | patient´s address          | String | (Required) |
| responseContent.patient.email            | patient´s email            | String | (Required) |
| responseContent.patient.inscription_date | patient´s inscription date | String | (Required) |
| responseContent.patient.id_clinica       | patient´s clinica          | Int    | (Required) |
| responseContent.patient.ocupation        | patient´s ocupation        | String | (Required) |
| responseContent.patient.age              | patient´s age              | Int    | (Required) |
| responseContent.patient.id_avatar        | patient´s avatar           | Int    | (Required) |
| responseContent.patient.id_country       | patient´s country          | Int    | (Required) |
| responseContent.patient.active           | Is patient active          | Int    | (Required) |

## 6. Update Patient

Use this service to update the patient

**> Session required**

**5.1 Request:**

- URL: /api/v1/patient/:id
- Method: PUT
- Body:

```json
{
  "name": "Marie Olivia",
  "last_name": "Whites Lex",
  "phone": "58594212",
  "dpi": "2304193123131",
  "address": "3era avenida Lote 54 zona 6",
  "email": "correo@correo.com",
  "incription_date": "2018-05-19",
  "id_clinic": 1,
  "id_ocupation": 1,
  "age": 3,
  "id_avatar": 5,
  "id_country": 1,
  "active": 0
}
```

| Key                                      | Description                | Type   | Rules      |
| ---------------------------------------- | -------------------------- | ------ | ---------- |
| responsetContent                         | response content           | Object | (Required) |
| responseContent.patient                  | patient                    | Object | (Required) |
| responseContent.patient.name             | patient´s name             | String | (Required) |
| responseContent.patient.lastname         | patient´s lastname         | String | (Required) |
| responseContent.patient.phone            | patient´s phone            | String | (Required) |
| responseContent.patient.dpi              | patient´s dpi              | String | (Required) |
| responseContent.patient.address          | patient´s address          | String | (Required) |
| responseContent.patient.email            | patient´s email            | String | (Required) |
| responseContent.patient.inscription_date | patient´s inscription date | String | (Required) |
| responseContent.patient.id_clinica       | patient´s clinica          | Int    | (Required) |
| responseContent.patient.ocupation        | patient´s ocupation        | String | (Required) |
| responseContent.patient.age              | patient´s age              | Int    | (Required) |
| responseContent.patient.id_avatar        | patient´s avatar           | Int    | (Required) |
| responseContent.patient.id_country       | patient´s country          | Int    | (Required) |

**6.2 Response**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Patient with ID 8 was updated"
  },
  "responseContent": {
    "patient": {
      "id": "8",
      "name": "Marie Olivia",
      "last_name": "Whites Lex",
      "phone": "58594212",
      "dpi": "2304193123131",
      "address": "3era avenida Lote 54 zona 6",
      "email": "correo@correo.com",
      "age": 3,
      "incription_date": "2018-05-19",
      "id_clinic": 1,
      "id_ocupation": 1,
      "id_avatar": 5,
      "id_country": 1,
      "active": 0
    }
  }
}
```
