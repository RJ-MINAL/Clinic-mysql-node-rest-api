## 1. Save Avatar

Use this service to save avatar patient, this service should be consume before the "save patient" service.

**> Session required**

**1.1 Request:**

- URL: /api/v1/avatar
- Method: POST
- Body:

```json
`{
    "requestContent":{
        "avatar":{
            "code_image":1,
            "skin_color":"#BC9A12",
            "cloth_color":"#BC9A12",
            "hair_color":"#BC9A12"
        }
    }
}`
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

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Avatar creado exitosamente."
  },
  "responseContent": {
    "avatar": {
      "id": 34,
      "code_image": 1,
      "skin_color": "#BC9A12",
      "cloth_color": "#BC9A12",
      "hair_color": "#BC9A12",
      "active": 1
    }
  }
}
```

| Key                               | Description                                              | Type   | Rules      |
| --------------------------------- | -------------------------------------------------------- | ------ | ---------- |
| info                              | info object                                              | Object | (Required) |
| info.type                         | Response status                                          | String | (Required) |
| info.message                      | Response message                                         | String | (Required) |
| responsetContent                  | response content                                         | Object | (Required) |
| responseContent                   | response content                                         | Object | (Required) |
| responseContent.avatar            | Avatar object                                            | Object | (Required) |
| responseContent.avatar.id         | Is the id created when a new avatar is added             | Int    | (Required) |
| responseContent.codeImage         | Refers to the avatar template stored in the applications | Int    | (Required) |
| responseContent.avatar.skinColor  | Avatar skin color                                        | String | (Required) |
| responseContent.avatar.clothColor | Avatar cloth color                                       | String | (Required) |
| responseContent.avatar.hairColor  | Avatar hair color                                        | String | (Required) |
| responseContent.avatar.active     | Is Avatar active                                         | Int    | (Required) |

## 2. Update Avatar

Use this service to update the patient

**> Session required**

**5.1 Request:**

- URL: /api/v1/avatar/:id
- Method: PUT
- Body:

```json
{
  "code_image": 1,
  "skin_color": "#BC9A12",
  "cloth_color": "#BC9A12",
  "hair_color": "#BC9A12",
  "active": 0
}
```

| Key        | Description                                              | Type   | Rules      |
| ---------- | -------------------------------------------------------- | ------ | ---------- |
| codeImage  | Refers to the avatar template stored in the applications | Int    | (Required) |
| skinColor  | Avatar skin color                                        | String | (Required) |
| clothColor | Avatar cloth color                                       | String | (Required) |
| hairColor  | Avatar hair color                                        | String | (Required) |
| active     | Is Avatar active                                         | Int    | (Required) |

**2.2 Response**

- HTTP Status: 200 (Ok)
- Body:

```json
{
  "info": {
    "type": "success",
    "message": "Avatar with ID 11 was updated"
  },
  "responseContent": {
    "avatar": {
      "id": "11",
      "code_image": 1,
      "skin_color": "#BC9A12",
      "cloth_color": "#BC9A12",
      "hair_color": "#BC9A12",
      "active": 0
    }
  }
}
```

| Key                               | Description                                              | Type   | Rules      |
| --------------------------------- | -------------------------------------------------------- | ------ | ---------- |
| info                              | info object                                              | Object | (Required) |
| info.type                         | Response status                                          | String | (Required) |
| info.message                      | Response message                                         | String | (Required) |
| responseContent                   | response content                                         | Object | (Required) |
| responseContent.avatar            | Avatar object                                            | Object | (Required) |
| responseContent.avatar.id         | Is the id created when a new avatar is added             | Int    | (Required) |
| responseContent.codeImage         | Refers to the avatar template stored in the applications | Int    | (Required) |
| responseContent.avatar.skinColor  | Avatar skin color                                        | String | (Required) |
| responseContent.avatar.clothColor | Avatar cloth color                                       | String | (Required) |
| responseContent.avatar.hairColor  | Avatar hair color                                        | String | (Required) |
| responseContent.avatar.active     | Is Avatar active                                         | Int    | (Required) |

## 3. Delete Avatar

Use this service to delete avatar

**> Session required**

**3.1 Request:**

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
    "message": "Avatar with ID 14 was deleted"
  },
  "responseContent": {
    "avatar": {
      "id": 14,
      "code_image": 1,
      "skin_color": "#BC9A12",
      "cloth_color": "#BC9A12",
      "hair_color": "#BC9A12",
      "active": 1
    }
  }
}
```

| Key                               | Description                                              | Type   | Rules      |
| --------------------------------- | -------------------------------------------------------- | ------ | ---------- |
| info                              | info object                                              | Object | (Required) |
| info.type                         | Response status                                          | String | (Required) |
| info.message                      | Response message                                         | String | (Required) |
| responseContent                   | response content                                         | Object | (Required) |
| responseContent.avatar            | Avatar object                                            | Object | (Required) |
| responseContent.avatar.id         | Is the id created when a new avatar is added             | Int    | (Required) |
| responseContent.codeImage         | Refers to the avatar template stored in the applications | Int    | (Required) |
| responseContent.avatar.skinColor  | Avatar skin color                                        | String | (Required) |
| responseContent.avatar.clothColor | Avatar cloth color                                       | String | (Required) |
| responseContent.avatar.hairColor  | Avatar hair color                                        | String | (Required) |
| responseContent.avatar.active     | Is Avatar active                                         | Int    | (Required) |
