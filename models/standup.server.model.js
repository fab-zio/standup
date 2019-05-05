const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    'Select a valid member name'
];
const requireStringValidator = [
    function (val) {
        let testVal = val.trim();
        return (testVal.length > 0)
    },
    '{PATH} cannot be empty'
];
const standupSchema = new Schema({
    memberName: {
        type: String,
        required: true,
        validate: memberNameValidator
    },
    project: {
        type: String,
        required: true,
        validate: requireStringValidator
    },
    workYesterday: {
        type: String,
        required: true,
        validate: requireStringValidator

    },
    workToday: {
        type: String,
        required: true,
        validate: requireStringValidator

    },
    impediment: {
        type: String,
        required: true,
        default: 'None',
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
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