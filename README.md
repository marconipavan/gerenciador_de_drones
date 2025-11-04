# Gerenciador de Drones

Aplicação para gerenciar drones.

## Macaco para rodar:

Primeiro crie um arquivo .env seguindo o modelo:
```text
# configuracao do banco de dados
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=drones_db
DB_PASSWORD=droneflamejante
DB_PORT=5432
```

Rodar o backend (Node.js)
```bash
cd backend
npm run dev
```

Rodar o frontend (React)
```bash
cd drones_frontend
npm start
```

## Funcionalidades

- Listagem de drones armazenados no Banco de Dados (PostgreSQL)
- Adição de novos drones à lista
