//const { User } = require('./')

module.exports = (sequelize, DataTypes) => {
    const Cpf = sequelize.define('Cpf', {
        cpf: DataTypes.INTEGER,
        isadm: DataTypes.BOOLEAN
  }, {})

    // Cpf.associate = models => {
    //     Cpf.belongsTo(models.User, { foreignKey: 'cpf' })

    // }


    return Cpf
}