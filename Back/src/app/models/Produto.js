module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        estoque: DataTypes.INTEGER,
        sinopse: DataTypes.STRING,
        categoria: DataTypes.STRING,
        editora: DataTypes.STRING,
    }, {})

    return Produto
}