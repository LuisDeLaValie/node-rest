const TemasModel = require('../models/temas');


class TemasController {
    static async indexGet(req, res){
        let data = await TemasModel.consultar();
        res.send(data);
    }

    // itemGent
    static async itemGet(req, res){
        let data = await TemasModel.consultarPorId(req.params.id);
        if (data.length == 0){
            res.status(404).send({code: 404, message:'not found'});
        }
        res.send(data[0]);
    }
}

module.exports = TemasController;