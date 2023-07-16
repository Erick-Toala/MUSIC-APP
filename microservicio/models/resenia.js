const { model, Schema } = require('mongoose');

const ReseniaSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'La descripción de la reseña es necesaria']
        },
        nombre:{
            type: String,
            required: [ true, 'El nombre de la persona que dejo la reseña es necesaria']
        },
        idCancion: {
            type: Schema.Types.ObjectId,
            ref:'Cancion',
            required:false
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        fecha:{
            type: Date,
            default: Date.now,
            required: false
        }
    }
);

ReseniaSchema.methods.toJSON = function(){
    const { __v, status, ...data   } =  this.toObject();
    return data;
}

module.exports = model('Resenia', ReseniaSchema );