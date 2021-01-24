## Weather React App

This project is deployed to Heroku [Open Weather App](https://github.com/facebook/create-react-app).

### The Celsius to Kelvin Conversion Formula

How to convert 269.05 Celsius to kelvin? You can use the following formula to convert from Celsius to Fahrenheit :

Y(K) = X(℃) + 273.15

### For example: To convert 269.05 Celsius to Kelvin:

Y(K) = 269.05(℃) + 273.15

Answer: 542.2 K

Reference link: https://www.rocknets.com/converter/temperature/269.05-c-to-k

### To check the current location of the user

axios.get("https://extreme-ip-lookup.com/json/")
.then(data => console.log(data))

<!-- Sample Output -->

{
"businessName": "",
"businessWebsite": "",
"city": "Bensalem",
"continent": "North America",
"country": "United States",
"countryCode": "US",
"ipName": "c-68-81-127-254.hsd1.pa.comcast.net",
"ipType": "Residential",
"isp": "Comcast Cable Communications, LLC",
"lat": "40.10455",
"lon": "-74.95128",
"org": "Comcast Cable Communications, LLC",
"query": "68.81.127.254",
"region": "Pennsylvania",
"status": "success"
}
