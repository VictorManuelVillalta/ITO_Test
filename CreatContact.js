const axios = require('axios');

async function obtenerAccessToken() {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: '1000.IZRMCIBJGCUHB1XT9K0PVKCSRUBVTP',
        client_secret: 'e870d1c2d1d12bd03b145f188f439895d34ffea5b0',
        redirect_uri: 'http://ITOTest',
        code: '1000.51624abbfba52d79663c9cd9692946e4.cde632afda7aaa3a136d5717fffefff6'
      }
    });

    console.log('Token obtenido:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

obtenerAccessToken();
//https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.contacts.CREATE&client_id=1000.IZRMCIBJGCUHB1XT9K0PVKCSRUBVTP&response_type=code&access_type=offline&redirect_uri=http://ITOTest
// https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.users.ALL&client_id={client_id}&response_type=code&access_type={"offline"o"online"}&redirect_uri={redirect_uri}