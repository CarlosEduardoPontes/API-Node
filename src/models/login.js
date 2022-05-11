module.exports = (sequelize, DataType) => {
	const Login = sequelize.define(
		'login', 
	{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	email: {
		type: DataType.STRING,
		},
	senha:{
		type: DataType.STRING,
		}
	},{
    tableName: 'login',
	});
	return Login;
};