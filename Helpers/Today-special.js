const http = require('http');

const options = {
  hostname: 'api.forismatic.com',
  path: '/api/1.0/?method=getQuote&format=json&lang=en',
  method: 'GET'
};

const getQuote = () => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);
      
      let responseData = '';
      
      res.on('data', d => {
        responseData += d;
      });
      
      res.on('end', () => {
        resolve(responseData);
      });
    });
    
    req.on('error', error => {
      reject(error);
    });
    
    req.end();
  });
};


module.exports = getQuote;
