var express = require('express'),
        router = express.Router(),
        Todo = require('../domains/Todo.js');

/* GET todos listing. */
router.get('/', function (req, res) {
    Todo.list(function(todos){
        res.render('index', { title: 'Express',todos:todos});
    })
});

router.get('/create', function (req, res) {
    Todo.list(function(todos){
        res.render('index', { title: 'Express',todos:todos });
    })
});

router.post('/save', function (req, res) {
    Todo.create(req.body).success(function(){
        console.log("Todo created");
        res.redirect('/');
    });

});

router.delete('/delete/:id', function () {

});


module.exports = router;
