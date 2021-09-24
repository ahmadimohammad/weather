const request=require('request')

const baseURL='http://api.weatherapi.com/v1'
const apiType='/current.json'
const apiKey='5568c6a8adff4484b0b141158212309'



const forecast= (query ,callback) =>{
    const getQuery='?key='+apiKey+'&q='+query
    const url=baseURL+apiType+getQuery

    request({ url, json:true }, (error, {body}) => {
        if (error){
            console.log('somthing in your local went wrong')
        }else{
            callback(body)
        }
    })
}
module.exports = forecast