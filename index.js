const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const rotaJogo = require('./rotas/jogo-rotas');
const rotaAuth = require('./rotas/auth-rotas');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use('/personagens', rotaJogo);
app.use('/auth', rotaAuth);

app.listen(3000, () => console.log("Servidor pronto na porta 3000"));