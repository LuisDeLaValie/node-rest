const LibrosModel = require('../models/libros');


class LibrosController {
    static async indexGet(req, res){
        let data = await LibrosModel.consultar();
        res.send(data);
    }


    
    static async agregar(req, res){
       
        try {

            let data = await LibrosModel.agregarLibro(req.body)
            // if (data.length == 0){
            //     res.status(404).send({code: 404, message:'not found'});
            // }
            // res.send(data);

            data = await LibrosModel.consultarPorId(data[0]);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
                           res.status(404).send({code: 404, message:error.sqlMessage});
 
        }
        
       
    }
}

module.exports = LibrosController;