const { Segments, Joi } = require('celebrate');

function SessionValidator() {
  const postSessionValidator = {
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }
  return {postSessionValidator};
}

module.exports = SessionValidator;