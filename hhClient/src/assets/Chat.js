import { AskDrComponent } from './path/to/ask-dr.component';


const axios = require('axios');
const askDrComponent = new AskDrComponent();

const headers = {
  'Content-Type': 'application/json',
  'auth': '4f5745526b48536d56774b4c772d426f336f396462304e66585930646a667a6f686f4e796b6d2d74534f73736a563470'
};

const data = {
  username: askDrComponent.chat.userName
};

axios.post('https://api.deadsimplechat.com/consumer/api/v1/user', data, {headers})
  .then(response => {
    const accessToken = response.data.accessToken;
    const username = response.data.username;
    const userId = response.data.userId;
    console.log(`User created. Access Token: ${accessToken}, Username: ${username}, User Id: ${userId}`);
  })
  .catch(error => {
    console.error(error);
  });
