const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res ,next) => {
    
    // CORS prelight request, CORS = Cross Origin, cruzamento de domínios
    if(req.method === 'OPTIONS') { // OPTIONS retorna os verbos HTTP Rest que a requisição suporta
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if(!token){
            return res.status(403).send({errors: ['No token provided.']})
        }

        jwt.verify(token, env.authSecret, (err, decode) => {
            if(err){
                return res.status(403).send({ errors: ['Failed to authenticate token.'] })
            } else {
                //req.decoded = decoded
                next()
            }

        })
    }
}