const { Segments, Joi } = require('celebrate');

function IncidentValidator() {
  const getIncidentValidator = {
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }
  const postIncidentValidator = {
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
  
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }
  const deleteIncidentValidator = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }


  return {getIncidentValidator, postIncidentValidator, deleteIncidentValidator};

}

module.exports = IncidentValidator;
