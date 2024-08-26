import express from 'express'
import dbCon from './utils/db.js';
import cors from 'cors'
import routers from './routes/routers.js';


const app = express();
app.use(express.json());
app.use(cors());
dbCon();

app.use('/api',routers);
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
     console.log(`server is running on ${PORT}`);
})

