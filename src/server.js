import "./setup.js";
import app from "./app.js";

const port = process.env.PORT;

app.listen(4001,()=>{
    console.log(`Running on port ${port}`);
});