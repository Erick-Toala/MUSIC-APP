const { response } = require('express')
const { Resenia } = require('../models')


const getResenias= async (req, res = response )=>{
    
    const { limit = 20 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, resenia ] = await Promise.all([
        Resenia.countDocuments(query),
        Resenia.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      resenia
    })
    
}
const getResenia= async (req, res =  response)=>{
    const {id} = req.params
    const resenia=  await Resenia.findById(id)
    res.json(resenia);
}

const createResenia= async (req, res = response)=>{
    const { status, ...body } =  req.body;
    
    const existResenia =  await Resenia.findOne({descripcion: body.descripcion})

    if (existResenia)
    {
        return res.status(400).json({
            msg:`La reseña ${ existResenia.descripcion } ya existe, no spam!`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion
    }

    const resenia = new Resenia(data);

    const newResenia =  await resenia.save();
    res.status(201).json(newResenia);
}

const updateResenia= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedResenia =  await Resenia.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedResenia);
}

const deleteResenia= async (req, res = response)=>{
    const {id} = req.params;
    const deletedResenia =  await Resenia.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedResenia);
}

module.exports = {
    getResenia,
    getResenias,
    createResenia,
    updateResenia,
    deleteResenia
};