const{Customer}=require('../models');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

//signUp function
 async function signUp(req,res){
   const customerData= req.body;
   console.log(customerData);

    const existingCustomer = await checkCustomer(customerData.email)
    
    if (existingCustomer){ 
      return responce.status(409).send({msg:'Customer with this email already exists.'});
    }
    const hash = bcrypt.hashSync(studentData.password, salt);
    studentData['hashPassword'] = hash
    const createCustomer = await createCustomer(customerData)
    return res.status(201).send({ msg: 'Customer registered successfully.' });

 }

 //LogIn function
 async function logIn(req,res){
    const customerLogin=req.body;
    console.log(customerLogin);

    //check if customer exist
    const checkCustomer= await checkCustomer(customerLogin.email);
    if(!checkCustomer){
        return res.status(404).send({msg:'Invalid email'});
    }

    //compare password
    const result = bcrypt.compareSync(customerLogin.password, checkCustomer.password)
    // create jwt payload ad token
    if (result == true) {

        const payload = _.omit(checkCustomer, ['password', 'createdAt', 'updatedAt']);
        console.log(payload);
        const token = jwt.generateToken(payload);

        await redisService.setData(token, JSON.stringify(payload));

        return res.status(200).send({ msg: 'login successfull.', token });
    }

 }

 // Update profile

 async function updateProfile(req,res){
    const update=req.body;
    const{email}=update;
    console.log(update);
    const updateData = await Customer.findOne({where:{email}});
    if (!Customer) {
        return res.staus().send({msg:'Customer not found'});
    }

    const updateCustomer= await Customer(updateData)
       return res.status(201).send({msg:'data update successfully'});
    
};

//delete Account


    module.exports={signUp,logIn,updateProfile};