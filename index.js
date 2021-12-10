const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoute')
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.oyujz.mongodb.net/assignments?retryWrites=true&w=majority'


mongoose.connect(MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.on("error", console.log.bind(console, "connection error:"));

connection.once("open", () => {
	console.log("connection successful");
});

app.use('/api', userRouter)
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 5500, () => {
	console.log('Your app is listening on port ' + listener.address().port)
})