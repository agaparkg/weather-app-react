## Weather App React

This project is deployed to Surge.sh [Click here to open Weather App](http://smelly-growth.surge.sh/).

### How to convert Kelvin to Fahrenheit?

K = (F - 273.15)\*9/5 + 32

### To check the current location (city) of the user

axios.get("https://extreme-ip-lookup.com/json/")
.then(data => console.log(data))

Sample Output

![Local City](./src/images/current-city.png)
