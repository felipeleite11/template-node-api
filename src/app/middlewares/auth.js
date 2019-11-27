import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import authConfig from '../../config/auth'

export default async (req, res, next) => {
    const authHeader = req.headers.authorization
	
    if(!authHeader) {
        return res.status(401).json({ msg: 'Token não enviado.' })
    }
	
    const [, token] = authHeader.split(' ')
	
    try {
        const { id } = await promisify(jwt.verify)(token, authConfig.secret)
        req.userId = id
    } catch(err) {
        return res.status(401).json({ msg: 'Token inválido.' })
    }

    return next()
}
