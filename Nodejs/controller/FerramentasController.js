const Ferramenta = require('../models/Ferramentas');


module.exports = {

    async listar(req, res) {

        await Ferramenta.find({}).then((pastilhas) => {
            return res.send({
                error: false,
                message: 'marcas de pastilha  encontrada!',
                pastilhas
            });
        }).catch((err) => {
            return res.send({
                error: true,
                message: 'nenhuma marca de pastilha encontrada!',

            });
        })

    },
    async detalhes(req, res) {
        await Ferramenta.findOne({ _id: req.params.id }).then((pastilha) => {
            return res.send({
                error: false,
                message: "Detalhes da Pastilha",
                pastilha
            });
        }).catch((err) => {
            return res.send({
                error: false,
                message: "Nehuma Marca de  Pastilha encontrada",
                
            });
        })

    },

   /*   
    async quantidade(req,res){
        const {  quantidade } = req.body;
        await Ferramenta.find({quantidade: quantidade }).then((pastilha)=>{
            return res.json({
                error: false,
                message: "Quantidade por Caixa",
                pastilha
            });
        }).catch((err)=>{
            return res.json({
                error: false,
                message: "nehuma Quantidade por Caixa encontrada"+err,
               
            });

        })
    },
     

   async caixas(req,res){
        const { caixa } = req.body;
        await Ferramenta.find({caixa: caixa }).then((pastilha)=>{
            return res.json({
                error: false,
                message: "Quantidade por caixa",
                pastilha
            });
        })
    },

   */

     /*
    async marca(req,res){
        const {  marca } = req.body;
        await Ferramenta.find({Marca: marca }).then((pastilha)=>{
            return res.json({
                error: false,
                message: "Marca da pastilha",
                pastilha
            });
        }).catch((err)=>{
            return res.send({
                error: false,
                message: "nehuma marca encontrada"+err,
               
            });

        })
    }, 


   */ 
    async classe(req,res){
       // const { classe } = req.body;
          await Ferramenta.findOne({classe: req.body.classe }).then((pastilha)=>{
                return res.json({
                error: false,
                message: "Classe encontrada!",
                pastilha
            });
        }).catch((err)=>{
            return res.json({
                error: true,
                message: " nehuma Classe encontrada!",
               
            });
        })
    },




  
    async cadastrar(req, res) {
        const { Marca, Descricao, tipo, quantidade,caixa } = req.body;
        if (Marca == null) { return res.json({ mensagem: "Preencha os campo Marca   Null!" }) }
        if (Marca == undefined) { return res.json({ mensagem: "Preencha os campo Marca  undefined!" }) }
        if (Marca == "") { return res.json({ mensagem: 'Preencha os campo Marca " " ' }) }
        if (quantidade < 1) { return res.json({ mensagem: 'Quantidade insulficiente !' }) }

        const pastilhaExiste = await Ferramenta.findOne({ classe: req.body.classe })
        if (pastilhaExiste) {
            return res.json({
                error: true, mensagem: "Classe ja existe!"
            });
        }
        const pastilha = await Ferramenta.create(req.body, (err) => {
            if (err) {
                return res.status(400).json({
                    error: true,
                    mensagem: "Error: Pastilha não Cadastrada  com sucesso!",
                });
            }
            else {
                return res.json({
                    error: false,
                    mensagem: "Pastilha cadastrada com sucesso !",
                    pastilha: pastilha,
                })
            }
        });
    },

    async atualizar(req,res){
        await Ferramenta.updateOne({_id: req.params.id },req.body,(err)=>{
            if(err)  return res.status(400).json({
                error:true,
                mensagem:"erro: Na Atualização !"
                
            });
            return res.json({
                error:false,
                mensagem:" Pastilha  Atualizada com sucesso!",
                
            });
            
        })
    }

}