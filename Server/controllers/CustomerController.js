
const CustomerModel = require("../model/customerModel");
const autoPassword = require("../middleware/autoPassword")
const nodemailer = require("nodemailer");



const InsertUserData = async(req,res)=>{
   const {firstname,lastname,email,city,mobile,fulladdress,pincode,statename }=req.body;
    const myPAss = autoPassword.autoPassword()
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
     res.status(200).send({msg:"Your Account Is Open SuccessFully Now You Can Check Your Password On Email"})
   } catch (error) {
    res.status(400).send({msg:"Error in Server Side"})
    
   }
   let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'pc852180@gmail.com',
                pass: 'yzjt qhhn xcnx gcmi'
            }
        }
    );

let mailDetails = {
    from: 'pc852180@gmail.com',
     to : email,
     subject : "E-Banking registration",
     text : `Dear ${firstname} ${lastname} Your account successfully created \n Your Password is ${myPAss}`
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
}









module.exports = {
    InsertUserData
}