const axios = require('axios');

// aquí el access_token obtenido de la terminal
const ACCESS_TOKEN = '1000.f2fdeadd97ceaa7472d790f1f28686f6.deadfc1637ea426a3edac8ef62d4407b'; // El  Token lo obtine de la respuesta de la terminal despues de conectar con la API en el sitio web

async function crearContacto() {
  try {
    const response = await axios.post(
      'https://www.zohoapis.com/crm/v2/Contacts',
      {
        data: [
          {
            First_Name: 'Victor',
            Last_Name: 'Villalta'
          }
        ]
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Contacto creado con éxito:', response.data);
  } catch (error) {
    console.error('Error al crear contacto:', error.response?.data || error.message);
  }
}

crearContacto();