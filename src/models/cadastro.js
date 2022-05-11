module.exports = (sequelize, DataType) => {
	const Cadastro = sequelize.define(
		'Cadastro', 
	{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
	    type: DataType.STRING,
		},
    sobreNome:{
        type: DataType.STRING,
        },
    cpf: {
		type: DataType.STRING,
		},
	email: {
		type: DataType.STRING,
		},
	telefone:{
		type: DataType.STRING,
		}
	},{
    tableName: 'clientes',
	});
	return Cadastro;
};