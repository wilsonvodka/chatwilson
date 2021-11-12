
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();



// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));



app.use(express.static('./public'));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
 
});




app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});