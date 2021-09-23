const request = require('request')

const baseURL='http://api.weatherapi.com/v1'
const apiType='/current.json'
const apiKey='5568c6a8adff4484b0b141158212309'
const query='Tehran'
const getQuery='?key='+apiKey+'&q='+query
const url=baseURL+apiType+getQuery
request({ url:url, json:true }, (error, response) => {
    if (error){
        console.log('somthing in your local went wrong')
    }else{
        console.log(response.body)
    }
})