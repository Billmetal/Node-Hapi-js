// para Exercício final , Criar um schema usando Mongoose com os campos :
// title(String) , content(String) , author(String) , publishDate(Date)

import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: {
        type: Date,
        required: [true, 'Publish date is required'],
    },
}, {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
          }
    },
    versionKey: false,
})

const PostsModel = Mongoose.model('Posts', schema)

export default PostsModel