'use strict';

const { mail } = require('../lib');

exports.query = async (req, res, _next) => {
  const { address } = req.params;
  const adresses = await mail.cep(address);
  res.status(201).send(adresses);
};
