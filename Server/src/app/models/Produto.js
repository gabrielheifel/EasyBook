module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        titulo: DataTypes.STRING,
        sinopse: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        imagem: DataTypes.STRING,
        preco: DataTypes.INTEGER,
        estoque: DataTypes.INTEGER,
        categoria: DataTypes.STRING,
    }, {})

    return Produto
}