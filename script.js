
 
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const apiKey = '8d38f6a348f9e9893574c2a1d2ec753a';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});



app.all('/weather', async (req, res) => {
    console.log('Request Body:', req.body);

    const city = req.body.city;
    const apiUrl =` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        console.log('API URL:');
        const response = await axios.get(apiUrl);
        console.log('Weather Data:', response.data);
    
    }
    catch(error){
        console.error('Error:');
        console.error('Error:', error.message);
    }

    res.send('Weather');
}

);

app.listen(5100, () => {
  console.log('Server started on port 4000');
});