
import express from 'express';
import routes from './src/index.js';
import { reslist, items } from './data/data.js';

const app = express();

app.use(routes);
  
  
app.get('/res-list', (req, res) => {
    try {
        
        res.send(reslist);
    } catch (err) {
        console.log("err", err);
    }
})  

app.get('/item-list', (req, res) => {
    try {
        console.log("check")
        const showItem = items.filter((item) => item.status !== 'Remove')
        res.send(showItem);
    } catch (err) {
        console.log("err", err);
    }
})  

app.listen(3001, () => {
    console.log("server started")
})