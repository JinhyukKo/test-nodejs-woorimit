'use strict'
const users={
    id: ['hello','bye','lol'],
    pw: ['123','1234','12345']
}
const output = {
    home : (req,res)=>{
        res.render('./index')
    },
    login : (req,res) =>{
        res.render('./login')
    }
}
const input = {
    login : (req,res)=>{
        
        const id = req.body.id;
        const pw = req.body.pw;

        if (users.id.includes(id)){
            const index = users.id.indexOf(id);

            if(users.pw[index]===pw){
                return res.json({success : true})
            }
        }
        // console.log(res.json({success:false}))
        return res.json({
            success:false,
            msg : "login failed"
        })
    }
}
module.exports={ 
    output, input
}