const { Segments, Joi } = require('celebrate');

function ProfileValidator() {
  const getProfileValidator = {
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }
  return { getProfileValidator };
}

module.exports = ProfileValidator;