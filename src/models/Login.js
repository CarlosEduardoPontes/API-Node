const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql::memory:');

class Login extends Model {}

Login.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            
    	}, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'clientes' // We need to choose the model name
    });
    
    module.exports = {Login}
    
// module.exports = (sequelize, DataType) => {
// 	const Login = sequelize.define(
// 		'login', 
// 	{
//     id: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
// 	email: {
// 		type: DataTypes.STRING,
// 		},
// 	senha:{
// 		type: DataTypes.STRING,
// 		}
// 	},{
//     tableName: 'login',
// 	});
// 	return Login;
// };