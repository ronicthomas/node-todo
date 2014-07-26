var express = require('express'),
        router = express.Router(),
        Todo = require('../domains/Todo.js');

/* GET todos listing. */
router.get('/', function (req, res) {
    Todo.list(function(todos){
        console.log("data : "+todos.length)
        res.render('index', { title: 'Express',todos:todos });
    })
});

router.get('/create', function (req, res) {

});

router.post('/save/:id', function (req, res) {

});

router.delete('/delete/:id', function () {

});


module.exports = router;
