var Sequelize = require('sequelize'),
    sequelize = new Sequelize('todo_app_dev', 'root', 'igdefault');

var Todo = sequelize.define('Todo', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    completed: Sequelize.BOOLEAN
}, {
    tableName: 'todos'
});

sequelize
    .sync({ force: true })
    .complete(function (err) {
        if (!!err) {
            console.log('An error occurred while creating the table:', err)
        } else {
            console.log('Todo table created')
        }
    });
Todo.list = function (cb) {
    Todo.findAll({}).success(function (todos) {
        cb(todos);
    })
};
module.exports = Todo;
