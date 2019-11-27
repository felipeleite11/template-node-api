import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            phone: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            active: Sequelize.BOOLEAN,
            alias: Sequelize.STRING,
            identifier: Sequelize.STRING
        }, { 
            sequelize,
            scopes: {
                full: {
                    attributes: ['id', 'name', 'alias', 'email', 'phone', 'identifier', 'created_at'],
                    where: { active: true }                    
                }
            }
        })

        this.addHook('beforeSave', async (user) => {
            if(user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })

        return this
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}

export default User
