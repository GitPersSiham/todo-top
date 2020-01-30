import express from "express";
import cors from 'cors';

const app: express.Express = express();
const PORT = 5050;
app.use(cors({origin: 'http://localhost:3000'}));
app.options("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     //other headers here
      res.status(200).end();
  });
  app.use('/', express.static(__dirname));
console.log(__dirname);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});


