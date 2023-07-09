var express = require('express')
var router = express.Router()

var students = [
    { id: 1, name: 'prashant', roll: 'THA077BEI032' },
    { id: 2, name: 'Kristi', roll: 'THA077BCT023' },
    { id: 3, name: 'Achilies', roll: 'THA077BEI001' },

]

router.get('/', function (req, res) {
    res.json(students);
});

router.get('/:id( ^[0-9]*$)', function (req, res) {
    id = req.params.id 
    console.log('the id is ' + id)
    try {
        if (typeof (id) == Int32Array) {
            for (var i of students) {
                if (id == i.id) {
                    console.log("student is present!");
                    console.log(i.id)
                    res.send(i)
                }
                // else {
                //     console.log("Not present")
                //     console.log(i.id)
                // }
            }


        }

    }
    catch (err) {
        res.status(400)
        console.log('error');
    }


})

module.exports = router