const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbfatec', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};


/* sequelize.sync().then(() => {
    return Cliente.bulkCreate([
        {
            nome: 'Guilherme',
            endereco: 'Rua das Flores',
            bairro: 'Ermelino Matarazzo',
            cep: '02810-000',
            telefone: '112483-0000',
            celular: '1199235-8810'
        },
        {
            nome: 'Gabriela',
            endereco: 'Rua das Rosas',
            bairro: 'São Miguel Paulista',
            cep: '08010-000',
            telefone: '112248-1389',
            celular: '11967216766'
        },
        {
            nome: 'Ana',
            endereco: 'Avenida dos Paulista',
            bairro: 'Bela Vista',
            cep: '12345-000',
            telefone: '112374-0000',
            celular: '1193076-0000'
        },
    ]);
}).then(() => {
    console.log('Clientes cadastrados com sucesso!');
}).catch(err => {
    console.error('Erro ao cadastrar clientes:', err);
}); */