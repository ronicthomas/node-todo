var express = require('express'),
        router = express.Router(),
        Todo = require('../domains/Todo.js');

/* GET todos listing. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/create', function (req, res) {

});

router.post('/save/:id', function (req, res) {

});

router.delete('/delete/:id', function () {

});


module.exports = router;
