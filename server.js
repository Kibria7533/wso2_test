const express=require('express');
const app = express()
require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.connect('mongodb://localhost:27017/test');
// const { auth } = require('express-openid-connect');
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(cors())
// app.use(
//     auth({
//       issuerBaseURL: 'https://YOUR_DOMAIN',
//       baseURL: 'https://YOUR_APPLICATION_ROOT_URL',
//       clientID: 'YOUR_CLIENT_ID',
//       secret: 'LONG_RANDOM_STRING',
//       idpLogout: true,
//     })
//   );

const bookroutes=require('./routes/bookRoute')
const searchRoute=require('./routes/searchs')
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/save',(req,res)=>{
    res.send('save from my api');
})
app.use('/api',bookroutes)
app.use('/search',searchRoute)

app.listen(process.env.PORT || 4000,()=>{
    console.log('server is running hurreh')
})






