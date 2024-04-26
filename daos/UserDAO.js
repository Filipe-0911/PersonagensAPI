const db = require('../models/index.js');
const bcrypto = require('bcrypt');

class UserDao {
    findByLoginSenha = async (login, senha) => {
        const usuario = await db.User.findOne({
            where : {login: login}
        });
        if(usuario) {
            const valido = await bcrypto.compare(senha, usuario.senha);
            if (valido) {
                return usuario;
            }
        }
        return null;
    }

    create = async(objJSON) => {
        const usuario = await db.User.findOne({
            where: {login: objJSON.login}
        });

        if(!usuario) {
            return db.User.create(objJSON);
        } else {
            return null;

        }
    }
}

module.exports  = UserDao;