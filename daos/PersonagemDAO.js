const db = require('../models/index.js');

class PersonagemDAO {
    create = async(objJSON) => {
        return await db.Personagem.create(objJSON);
    }

    findAll = async() => {
        return await db.Personagem.findAll();
    }
    
    find = async(id) => {
        return await db.Personagem.findByPk(id);
    }

    update = async(_id, objJSON) => {
        return await db.Personagem.update(objJSON, { where: { id: _id } });
    }
    
    delete = async(_id) => {
        return await db.Personagem.destroy({ where: {id: _id} });
    }
}

module.exports = PersonagemDAO;