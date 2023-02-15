const express=require("express")
const router=express.Router()
const members=require('../../Members')




router.get('/:id', (req, res)=>{
    const found=members.some(member=>member.id==parseInt(req.params.id))
    found ? res.json(members.filter((member)=> member.id==parseInt(req.params.id))):
    res.status(400).json({message:`member with id of ${req.params.id} not found`})
   })

   //create member
router.post('/', (req, res)=>{
    const newMember={
        "id":5,
        "name":req.body.name,
        "email":req.body.email,
        "status":"active"
     }
     !newMember.name || !newMember.email ?
      res.status(400).json({message:'please provide email or name'}):
      members.push(newMember);

      res.json(members);
})    

//update member
router.put('/:id', (req, res)=>{
      const found=members.some(member=>member.id==parseInt(req.params.id))

      if(found){
        const updMember=req.body
        members.map((member)=>{ 
            if(member.id==parseInt(req.params.id)){
                member.name=updMember.name?updMember.name:member.name;
                member.email=updMember.email?updMember.email:member.email;

                res.json({msg:"member updated", member })
             }
         });
      }
      else{
        res.status(400).json({msg:`member with id of ${req.params.id} not found`})
      }

   })

router.delete('/:id', (req, res)=>{
const found=members.some(member=>member.id==parseInt(req.params.id))
found ? res.json({msg:'members deleted',  members:members.filter((member)=> member.id!==parseInt(req.params.id))}):
res.status(400).json({message:`member with id of ${req.params.id} not found`})
})

 router.get('/', (req, res)=>{
  return  res.json(members)
 })

 module.exports=router;