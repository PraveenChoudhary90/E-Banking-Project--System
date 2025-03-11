
const CustomerModel = require("../model/customerModel");




const InsertUserData = async(req,res)=>{
   const {firstname,lastname,email,city,mobile,fulladdress,pincode,statename }=req.body;
   try {
    const Customer = await  CustomerModel.create({
        firstname:firstname,
        lastname:lastname,
        email:email,
        city:city,
        mobile:mobile,
        fulladdress:fulladdress,
        pincode:pincode,
        statename:statename
    })
     res.status(200).send({msg:"Your Account Is Open SuccessFully"})
   } catch (error) {
    res.status(400).send({msg:"Error in Server Side"})
    
   }
}









module.exports = {
    InsertUserData
}