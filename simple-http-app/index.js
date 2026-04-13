const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Simple HTTP App</title>
  </head>
  <body>
    <h1>Aplicação rodando com sucesso!</h1>
  </body>
</html>`);
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escutando em http://0.0.0.0:${PORT}`);
});
