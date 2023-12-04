const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }

    static async consultarPorId(id) {
        let query = db('temas').where('id_tema', id);

        return await query;
    }

    static async consultarPorNombre(nombre) {
        let query = db('temas').where('nombre', nombre);
        return await query;
    }

    static async agregarTemas(temas) {
        let query = db('temas').insert(temas)
        return await query;
        
    }
}

module.exports = TemasModel;

