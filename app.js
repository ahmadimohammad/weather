const forecast = require('./utils/forecast')
const address = process.argv[2]
forecast(address, (data)=>{
    console.log(data)
})