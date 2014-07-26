var Sequelize = require('sequelize'),
        sequelize = new Sequelize('todo_app_dev', 'root', 'igdefault');

var Todo = sequelize.define('Todo', {
    task: Sequelize.STRING,
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

module.exports = Todo;