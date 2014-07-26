var express = require('express'),
    router = express.Router(),
    Todo = require('../domains/Todo.js');

/* GET todos listing. */
router.get('/', function (req, res) {
    Todo.list(function (todos) {
        res.render('index', { title: 'Express', todos: todos, todo: {title: '', description: '', id: ''}});
    })
});

router.get('/create', function (req, res) {
    Todo.list(function (todos) {
        var id = req.param('id');
        if (id) {
            Todo.find({id: id}).success(function (todo) {
                res.render('index', { title: 'Express', todos: todos, todo: todo});
            })
        } else {
            res.render('index', { title: 'Express', todos: todos, todo: {title: '', description: '', id: ''}});
        }

    })
});

router.post('/save', function (req, res) {
    var id = req.param('id');
    if (id) {
        Todo.find(req.param('id')).on('success', function (todo) {
            if(todo){
                todo.updateAttributes({
                    title: req.param('title'),
                    description: req.param('description')
                }).success(function() {
                    res.redirect('/');
                });
            }else{
                res.redirect('/');
            }
        })
    } else {
        Todo.create(req.body).success(function () {
            res.redirect('/');
        });
    }
});

router.get('/delete', function (req, res) {
    Todo.find(req.param('id')).on('success', function (todo) {
        if(todo){
            todo.destroy().on('success', function (u) {
                res.redirect('/');
            })
        }else{
            res.redirect('/');
        }

    })
});


module.exports = router;
