const { DataTypes } = require('sequelize');
const db = require('/Users/aline/Downloads/Curso_Node.js_Udemy-main/Curso_Node.js_Udemy/modulo_8_MVC/setup_model/db/conn');


const task = db.define('task', {
    title: {
        type: DataTypes.STRING,
        require: true,
    },
    description: {
        type: DataTypes.STRING,
        require: true,
    },
    done: {
        type: DataTypes.BOOLEAN,
        require: true,
    },
})

module.exports = task