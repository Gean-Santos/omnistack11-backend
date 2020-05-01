const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const SessionValidator = require('./validators/SessionValidator');
const OngValidator = require('./validators/OngValidator');
const IncidentValidator = require('./validators/IncidentValidator');
const ProfileValidator = require('./validators/ProfileValidator');

const routes = express.Router();

routes.post('/sessions', celebrate(SessionValidator()), SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate(OngValidator()), OngController.create);

routes.get('/incidents', celebrate(IncidentValidator().getIncidentValidator), IncidentController.index);

routes.post('/incidents', celebrate(IncidentValidator().postIncidentValidator), IncidentController.create);

routes.delete('/incidents/:id', celebrate(IncidentValidator().deleteIncidentValidator), IncidentController.delete);

routes.get('/profile', celebrate(ProfileValidator()), ProfileController.index);

module.exports = routes;