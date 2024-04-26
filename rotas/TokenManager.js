const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET_TOKEN;

class TokenManager {
    verifyJWT = (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json(
            {auth: false, message: 'No Token provided'}
        )
        jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(500).json(
                {
                    auth: false, message: 'Failed to authenticate token.'
                }
            )
            req.userId = decoded.id;
            next();
        })
    }

    sign = (id) => {
        return jwt.sign({id}, secret, { expiresIn: 300 });
    }
}

module.exports = TokenManager;