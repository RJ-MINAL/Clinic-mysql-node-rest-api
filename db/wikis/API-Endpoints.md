# 1. Avatars

### 1.1 Get All Avatars

- URL: /api/v1/avatars/
- Method: GET
- Body: Empty

### 1.2 Get Avatar by ID

- URL: /api/v1/avatars/:id
- Method: GET
- Body: Empty

### 1.3 Save Avatar

- URL: /api/v1/avatars
- Method: POST
- Body:

```json
{
  "requestContent": {
    "avatar": {
      "code_image": 1,
      "skin_color": "#BC9A12",
      "cloth_color": "#BC9A12",
      "hair_color": "#BC9A12"
    }
  }
}
```

### 1.4 Update Avatar

- URL: /api/v1/avatars/:id
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

### 1.5 Delete Avatar

- URL: /api/v1/avatars/:id
- Method: DELETE
- Body: Empty

# 2. Patients

### 2.1 Get All Patients

- URL: /api/v1/patients/
- Method: GET
- Body: Empty

### 2.2 Get Patient Details by ID

- URL: /api/v1/patients/:id
- Method: GET
- Body: Empty

### 2.3 Save Patient

- URL: /api/v1/patients
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
      "inscription_date": "2018-05-19",
      "id_clinic": 1,
      "id_ocupation": 1,
      "age": 25,
      "id_avatar": 2,
      "id_country": 1
    }
  }
}
```

### 2.4 Update Patient

- URL: /api/v1/patients/:id
- Method: PUT
- Body:

```json
{
  "name": "Hal Jordan",
  "last_name": "Whites Lex",
  "phone": "58594212",
  "dpi": "2304193123131",
  "address": "3era avenida Lote 54 zona 6",
  "email": "correo@correo.com",
  "inscription_date": "2018-05-19",
  "id_clinic": 1,
  "id_ocupation": 1,
  "age": 3,
  "id_avatar": 1,
  "id_country": 1,
  "active": 1
}
```

### 2.5 Delete Patient

- URL: /api/v1/patients/:id
- Method: DELETE
- Body: Empty

### 2.6 Get Patient History

- URL: /api/v1/patients/:id/history
- Method: DELETE
- Body: Empty

# 3. Profile

### 3.1 Get Profile

- URL: /api/v1/profile/
- Method: POST
- Body:

```json
{
  "requestContent": {
    "user_name": "soydoctor@gmail.com",
    "password": "paracetamol"
  }
}
```

# 4. Countries

### 4.1 Get All Countries

- URL: /api/v1/countries/
- Method: GET
- Body: Empty

# 5. Ocupations

### 5.1 Get All Ocupations

- URL: /api/v1/ocupations/
- Method: GET
- Body: Empty
