# 📇 Zoho CRM Contact Creator

This project is a small **Node.js** application that uses the **Zoho CRM REST API** to create a new contact with your first and last name, using OAuth 2.0 authentication.

---

## 🚀 What does this app do?

1. Retrieves a valid **Access Token** from a Zoho `Authorization Code`.
2. Uses that token to make a `POST` request to the Zoho CRM API to create a new contact.
3. Only the `First Name` and `Last Name` fields are created.

---

## 🛠️ Requirements

- A [Zoho CRM account](https://www.zoho.com/crm/)
- Node.js installed
- OAuth Client created in the [Zoho API Console](https://api-console.zoho.com/)
