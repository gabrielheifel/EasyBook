const { User, Cpf } = require('./../../models')

class UserController {

    async store(req, res) {
        try {
            if (validateEmail(req.body.user.email)) {
                const cpf = await Cpf.create(req.body.cpf)
                const user = await User.create(req.body.user)
                delete user.dataValues.password_hash
                return res.json(user);
            } else {
                return res.status(401).json({ message: "invalid email" })
            }
        } catch (error) {
            return res.status(401).json({ message: "Error, data invalid." })            
        }
    }
    async listAlll(req, res) {
        try {
            const user = await User.findAll({
                attributes: ['id','name','email']
            })
            res.json(user);

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
    async listById(req, res) {
        try {
            const user = await User.findOne({
                attributes: ['id','name','email'],
                where: {
                    id: req.userId
                }
            })
            
            if (!user) {
                return res.status(404).json({ message: 'User not found.' })
            } else {
                res.json(user);
            }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
     }
    async delete(req, res) {
        try {
            const userCpf = await User.findOne(
                {
                    attributes: [
                        'cpf'
                    ],
                    where: {
                        id: req.userId
                    }
                }
            )
            const user = await User.destroy(
                {
                    where: {
                        id: req.userId
                    }
                }
            )
            const cpf = await Cpf.destroy(
                {
                    where: {
                        cpf: userCpf.dataValues.cpf 
                    }
                }
            )
            if (user === 0) {
                return res.status(404).json({ message: 'User not found.' })
            } else {
                res.json({ message: `Success, ${user} deleted users.` });
            }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
    async update(req, res) {
        let { body } = req
        try {
            if (body.email && !validateEmail(body.email)) {
                return res.status(401).json({ message: "invalid email" })
            }
            const user = await User.findOne({
                where: {
                    id: req.userId
                },
            })
            await user.update(body);
            return res.json({ message: `success` })

        } catch (error) {
            return res.status(401).json({ message: "Error, invalid data" })
        }
    }


}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}
module.exports = new UserController()