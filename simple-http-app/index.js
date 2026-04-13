const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("Aplicação rodando com sucesso!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escutando em http://0.0.0.0:${PORT}`);
});
