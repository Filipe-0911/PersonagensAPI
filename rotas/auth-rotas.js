const express = require('express');
const UserDAO = require('../daos/UserDAO.js');
const TokenManager = require('../rotas/TokenManager.js');
const router = express.Router();
const dao = new UserDAO();
const tm = new TokenManager();

router.post('/login', async (req, res) => {
    const usuario = await dao.findByLoginSenha(
        req.body.login, req.body.senha
    );
    if(usuario) {
        const id = usuario.id; 
        const token = tm.sign(id);
        return res.json({
            auth:true,
            token: token,
        })
    }
    res.status(500).json({message: "Login inválido!"});
})

router.post('/addUser',tm.verifyJWT ,async (req, res) => {
    const usuario = await dao.create(req.body);
    if (usuario) return res.json({
        answer:`Usuário ${usuario.login} criado com sucesso na data ${usuario.createdAt}.`
    })
    else return res.status(401).json({message: "Login não disponível, escolha outro!"})
})

module.exports = router;