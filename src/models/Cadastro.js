const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql::memory:');

class Cadastro extends Model {}

Cadastro.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nome: DataTypes.STRING,
            sobreNome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            
    	}, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'clientes' // We need to choose the model name
    });
    
    module.exports = {Cadastro}
    
    // module.exports = (sequelize, DataType) => {
        // 	const Cadastro = sequelize.define('clientes', {
//     id: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//         nome: DataType.STRING,
//         sobreNome: DataType.STRING,
//         cpf: DataType.STRING,
//         email: DataType.STRING,
//         telefone: DataType.STRING,
		
// 	},{
//     tableName: 'clientes',
// 	});
// 	return Cadastro;
// };