const Joi = require('joi');
const connection = require('../config/dbConnection')();
const { SetError } = require('../models/response.model');

let profileModel = {};

profileModel.getProfile = (user, pass, callback) => {
  if (!connection) return callback(SetError(503, 'Server Unavailable'));

  const sql = `
    SELECT dr.*, rl.*, av.*, 
      dr.id as id_doctor, dr.active as dr_act, 
      cl.name as cl_name, cl.address as cl_adrs, 
      ct.name as ct_name, ct.code
    FROM doctor dr
    LEFT JOIN clinic cl on dr.id_clinic = cl.id
    LEFT JOIN rol rl on dr.id_rol = rl.id
    LEFT JOIN avatar av on dr.id_avatar = av.id
    LEFT JOIN country ct on dr.id_country = ct.id
    WHERE dr.email = ${connection.escape(user)}
    AND dr.password = ${connection.escape(pass)}
  `;
  connection.query(sql, (err, rows) => {
    if (err) return callback(SetError(500, 'Internal Error', err), null);

    if (rows === undefined || rows.length == 0)
      return callback(SetError(404, 'Incorrect user_name or password', err));

    const row = rows[0];
    const profile = {
      id: row.id_doctor,
      name: row.name,
      last_name: row.last_name,
      phone: row.phone,
      dpi: row.dpi,
      address: row.address,
      blocked: row.blocked ? true : false,
      email: row.email,
      age: row.age,
      active: row.dr_act,
      rol: {
        id: row.id_rol,
        description: row.description
      },
      clinic: {
        id: row.id_clinic,
        name: row.cl_name,
        address: row.cl_adrs
      },
      configured: row.configured ? true : false,
      avatar: !row.configured
        ? null
        : {
            id: row.id_avatar,
            code_image: row.code_image,
            skin_color: row.skin_color,
            cloth_color: row.cloth_color,
            hair_color: row.hair_color
          },
      country: {
        id: row.id_country,
        name: row.ct_name,
        code: row.code
      }
    };

    return callback(null, profile);
  });
};

function validateProfile(body) {
  const schema = {
    requestContent: Joi.object({
      user_name: Joi.string()
        .min(5)
        .max(50)
        .required(),
      password: Joi.string()
        .min(5)
        .max(50)
        .required()
    }).required()
  };

  return Joi.validate(body, schema);
}

exports.Profile = profileModel;
exports.validateRequest = validateProfile;
