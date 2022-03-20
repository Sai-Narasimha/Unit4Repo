// const express = require('express');

const app = require('./index')
const connect = require('./CONFIGS/db')

app.listen(2400, async () =>{
    try {
        await connect();
        console.log('listening on port 2400')
    } catch (error) {
        console.log('error: ', error);
        
    }
});

 