# 📇 Zoho CRM Contact Creator

Este proyecto es una pequeña aplicación en **Node.js** que utiliza la **API REST de Zoho CRM** para crear un nuevo contacto con nombre y apellido, usando autenticación OAuth 2.0.

---

## 🚀 ¿Qué hace esta aplicación?

1. Obtiene un **Access Token** válido desde el `Authorization Code` de Zoho.
2. Usa ese token para hacer una solicitud `POST` a la API de Zoho CRM y crear un nuevo contacto.
3. Solo se crean los campos `First Name` y `Last Name`.

---

## 🛠️ Requisitos

- Cuenta de [Zoho CRM](https://www.zoho.com/crm/)
- Node.js instalado
- Cliente OAuth creado en [Zoho API Console](https://api-console.zoho.com/)
