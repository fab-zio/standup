var Standup = require('../models/standup.server.model');

// select * from
var query = Standup.find({ memberName: 'David' }, (err, result) => {
    if (err) throw err;
    console.log(result);

})
console.log('ecco', query);



exports.list = function (req, res) {
    let query = Standup.find()
    query.sort({ createdOn: 'desc' }).limit(12).exec(function (err, results) {
        res.render('index', { title: 'StandUp-List', notes: results })
    })

}

exports.create = function (req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workYesterday,
        impediment: req.body.impediment,

    });

    entry.save();

    res.redirect(301, '/');
}

exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup -New' })
}