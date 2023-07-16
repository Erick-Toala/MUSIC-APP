const { Router } = require('express')
const { check } =  require('express-validator')

const { createResenia,
     getResenia, 
     getResenias,
     updateResenia,
     deleteResenia } = require('../controllers').Resenia;

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getResenias);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getResenia);

router.post('/',[
    check('descripcion', 'La descripcion es requerida').not().isEmpty(),
    validateFields
] , createResenia)

router.put('/:id', updateResenia)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteResenia)

module.exports = router;