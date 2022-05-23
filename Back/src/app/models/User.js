const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        endereco:DataTypes.STRING,
        cidade: DataTypes.STRING,
        cep:DataTypes.STRING,
        cpf:DataTypes.INTEGER,
        sexo: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
    }, {
        hooks: {
            beforeSave: async user => {
                await encrypt(user)
            },
            beforeUpdate: async user => {
                await encrypt(user)
            }
        }
    })
    // User.associate = models => {
    //     User.hasMany(models.Cpf)
    
    // }
    User.associate = models => {
            User.belongsTo(models.Cpf, { foreignKey: 'cpf' })
    
        }
    User.prototype.checkPassword = function (password) {
        return bcrypt.compare(password, this.password_hash);
    };

    User.prototype.generateToken = function () {
        return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
            expiresIn: '180s'
        });
    };
    User.prototype.generateRefreshToken = function () {
        return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
            expiresIn: '15d'
        });
    };
    async function encrypt(user) {
        if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
        }
    }

    return User
}
