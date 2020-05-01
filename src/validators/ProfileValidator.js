const { Segments, Joi } = require('celebrate');

function ProfileValidator() {
  return {
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }
}

module.exports = ProfileValidator;