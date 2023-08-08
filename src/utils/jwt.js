import jwt from 'jsonwebtoken';
import config from '../../config.js';

const createToken = (payload) => jwt.sign(payload, config.secret);

const verifyJwt = (token) => jwt.verify(token, config.secret);

export { createToken, verifyJwt }