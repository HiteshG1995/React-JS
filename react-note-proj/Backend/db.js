var mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoURI = 'mongodb://localhost:27017/'
mongoose.connect(mongoURI);//this returns "undefined is not a function" and fails
var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    description: String,
    author: String,
    content: String
});
var connectToMongo = mongoose.model('Post', postSchema);
// module.exports = Post;
module.exports = connectToMongo;

console.log('connected successfuliy')

