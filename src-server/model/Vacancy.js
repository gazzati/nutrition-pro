const mongoose =  require('mongoose')

const vacancySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String
        }
    ],
    date: {
        type: Date,
        required: true,
        default: new Date()
    }
}, { collection: "vacancy" })

module.exports = mongoose.model('Vacancy', vacancySchema)
