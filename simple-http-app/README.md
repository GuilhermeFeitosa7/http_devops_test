# Simple HTTP App (Node.js)

Aplicação Node.js simples com um endpoint HTTP `/` retornando uma mensagem.

## Requisitos

- Node.js 20+ (para rodar local)
- Podman (para rodar via container)

## Rodando localmente

1. Instalar dependências:

```bash
npm install
```

2. Subir a aplicação:

```bash
npm start
```

3. Testar:

- Acesse: http://localhost:8080/
- Ou via curl:

```bash
curl http://localhost:8080/
```

## Rodando via Podman (container)

1. Build da imagem:

```bash
podman build -t simple-http-app:latest -f Containerfile .
```

2. Subir o container:

```bash
podman run --rm -p 8080:8080 simple-http-app:latest
```

3. Testar:

- Acesse: http://localhost:8080/
- Ou via curl:

```bash
curl http://localhost:8080/
```
