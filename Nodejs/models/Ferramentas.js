const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Ferramenta =  new Schema({
   
   Marca:{
       type:String,
   }, 

   Descricao:{
      type:String
       
      
   },
   tipo:{
      type:String
       
   },
    classe: {
       type:String
   },
   caixa:{
       type:Number
   },
   quantidade:{
       type:Number

   },
    registros:{
    type:Date,
    default:Date.now
},
 
});


const  ferramenta = mongoose.model('ferramentas',Ferramenta);

module.exports = ferramenta;