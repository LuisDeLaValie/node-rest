const db = require('../dbconnection');

class LibrosModel {
    static async consultar(){
        let query = db('libros');
        return await query;
    }

    static async consultarPorId(idlibro) {
        let query = db('libros').where('id_libro', idlibro);
        return await query;
    }

    static async agregarLibro(temas) {
        let query = db('libros').insert(temas)
        return await query;
        
    }
}

module.exports = LibrosModel;

