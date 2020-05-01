const { Segments, Joi } = require('celebrate');

function SessionValidator() {
  return {
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }
}

module.exports = SessionValidator;