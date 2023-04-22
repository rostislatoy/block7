import '../scss/style.scss'

var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4= document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");
var result7 = document.getElementById("result7");
var result8 = document.getElementById("result8");
var result9 = document.getElementById("result9");
var result10 = document.getElementById("result10");
var result11 = document.getElementById("result11");
var input = document.getElementById("input");
var btn = document.getElementById("btn");
const header = document.querySelector('header')







btn.addEventListener("click", function(){
    const ip = input.value
    const requestURL = `http://ip-api.com/json/${ip}`
    header.classList.add('active')


function sendRequest(method, url) {
const headers = {
'Content-Type': 'application/json'
}

return fetch(url, {
method: method,
headers: headers
}).then(response => {
if (response.ok) {
  return response.json()
}

return response.json().then(error => {
  const e = new Error('Что-то пошло не так')
  e.data = error
  throw e
})
})
}
sendRequest('GET', requestURL)
.then(data => {
const arrayOfData = [data.status, data.country, 
data.countryCode, data.region, data.regionName, data.city, data.zip, data.lat, data.lon, data.timezone, data.query]
result.innerHTML = `${arrayOfData[0]}`
result2.innerHTML = `${arrayOfData[1]}`
result3.innerHTML = `${arrayOfData[2]}`
result4.innerHTML = `${arrayOfData[3]}`
result5.innerHTML = `${arrayOfData[4]}`
result6.innerHTML = `${arrayOfData[5]}`
result7.innerHTML = `${arrayOfData[6]}`
result8.innerHTML = `${arrayOfData[7]}`
result9.innerHTML = `${arrayOfData[8]}`
result10.innerHTML = `${arrayOfData[9]}`
result11.innerHTML = `${arrayOfData[10]}`
console.log(arrayOfData.map(String))

})
.catch(err => result.innerHTML= err)
})

console.log(result)

