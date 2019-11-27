import * as Yup from 'yup'

import User from '../models/User'

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(3)
})

class UserController {
    async show(req, res) {
        const { userId } = req

        const user = await User.scope('full').findOne({
            where: { id: userId }
        })

        if(!user) {
            return res.status(400).json({ msg: 'Usuário não encontrado.' })
        }

        return res.json(user)
    }

    async store(req, res) {
        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ msg: 'A validação falhou.' })
        }

        const userExists = await User.findOne({
            where: { email: req.body.email }
        })

        if(userExists) {
            return res.status(400).json({ msg: 'Já existe um usuário com este e-mail.' })
        }

        const {
            id, name, alias, email, avatar_id 
        } = await User.create(req.body)
        
        return res.json({
            id, name, alias, email, avatar_id 
        })
    }
}

export default new UserController()
