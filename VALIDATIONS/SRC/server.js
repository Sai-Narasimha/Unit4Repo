const app = require('./index');
const connect = require('./CONFIGS/db');

app.listen(5500,async ()=>{
try {
    await connect()
    console.log("listening on 5500")
} catch (error) {
    console.log('error: ', error); 
}
});