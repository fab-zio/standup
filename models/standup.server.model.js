var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

//mongoose create automatically ID,  but is possible to disable that..
// var noIdSchema = new Schema({ name: String }, { _id: false })

// example of using schema.add

// var includeMiddleName = true;

// if (includeMiddleName) {
//     exampleSchema.add({
//         memberName: {
//             first: String,
//             middle: String,
//             last: String
//         }
//     })
// } else {
//     exampleSchema.add({
//         memberName: {
//             first: String,
//             middle: String,
//             last: String
//         }
//     })
// }
// var exampleSchema = new Schema;

// exampleSchema.add({
//     memberName: String,
//     project: String,
//     workYesterday: String,
//     workToday: String,
//     impediment: String,
//     createdOn: { type: Date, default: Date.now }
// });

module.exports = mongoose.model('Standup', standupSchema);