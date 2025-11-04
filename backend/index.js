require('dotenv').config();

const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');


const app = express();
const port = 3000;

app.use(cors()); // qualquer origem pode acessar a API
app.use(express.json()); // trata requisições com JSON

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || 5432), // 5432 é a porta padrão
});

app.get('/drones', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM drones');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar drones:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

app.post('/drones', async (req, res) => {
    const { modelo, capacidade, autonomia } = req.body;

    if(!modelo)
        return res.status(400).json({ error: 'Modelo é obrigatório' });
    
    try {
        const result = await pool.query(
            'INSERT INTO drones (modelo, capacidade, autonomia) VALUES ($1, $2, $3) RETURNING *',
            [modelo, capacidade, autonomia]
        );
        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error('Erro ao adicionar drone:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// inicia o servidor
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});