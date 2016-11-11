import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2b', (req, res) => {
  const op = req.query.fullname.match(/([a-zA-Zа-яА-Я]+)\s?([a-zA-Zа-яА-Я]+)\s?([a-zA-Zа-яА-Я]+)/);
  
  if (req.query.fullname.match(/([a-zA-Zа-яА-Я]+)\s?([a-zA-Zа-яА-Я]+)\s?([a-zA-Zа-яА-Я]+)/)) {
    const newName = req.query.fullname.split(' ').reverse().join(' ');
    const qwe = newName[2].charAt(0);
    const qwe2 = newName[3].charAt(0);
    res.send(newName);
  }  else {
    res.send('Invalid fullname');
  }

});

app.listen(3000, () => {
  console.log('App listening on port 3000')
});
