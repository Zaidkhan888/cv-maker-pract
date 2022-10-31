//this is used for authentication
const express = require("express");
const router = express.Router();  
const User = require("../models/User");  
const { body, validationResult } = require('express-validator');  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  


const JWT_SECRET = "zaidkhanisaverygoodboy";  

router.post('/cal', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
],
    async (req, res) => { 
        let sucess = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(600).json({  errors: errors.array() });
           
        }
        
        try {
            const userEmail = req.body.email 
            let user = await User.findOne({ email: userEmail});
            if (user) {
               
                console.log(user)
                return res.status(400).json({sucess , errors: "This user already(email) exist in database" });
            }

            
            var ogpassword = req.body.password;
            var saltRounds = 10

            //old one
            const salt = await bcrypt.genSalt(saltRounds); //number of salt round is 10
            const securepass = await bcrypt.hash(ogpassword, salt)  //returning the hash function
            user = await User.create({
                name: req.body.name,
                password: securepass,
                email: req.body.email,
            })
            const data = {
                id: user.id // here i am using the id of  the user created in DB 
            }
            const jwtData = jwt.sign(data, JWT_SECRET) //
            sucess = true;
            res.json({sucess , jwtData}) //




        } catch (error) {
           
            console.error(error.message)
            res.status(500).send( "Pls try again later")

        }



        console.log("user registered successfully")
    });



//Route 2: Endpoint use to create a user and port:  /api/user/cal  no login requred
router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').isLength({ min: 5 }),
],
    async (req, res) => { //returns password
        let sucess = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        
        }
        const {email , password} = req.body ; //destructuring
        try {
            let token;
            let user = await User.findOne({ email}); 
            
            if (!user) {
                
                return res.status(400).json({ errors: "PLease try to login with proper credential" });

            }

            
            const comparepassword = await bcrypt.compare(password , user.password)   // compare takes the string and hashstring as an input the hashstring is pasword hashstring present inside teh DB, and it checkes that automatically the req.body password and OG hashstring

            if(!comparepassword) {
                sucess = false
                return res.status(400).json({ sucess , errors: "PLease try to login with proper credential password dorsnt compared" });

            }
            const data = {
                id : user.id
                
            }

            //generating auth token we can wrtie secret key  in snv fiel 
             token = await user.generateAuthToken()
         
            res.cookie("jwtoken" , token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
             });

             
            const authtoken= jwt.sign(data, JWT_SECRET)
            sucess = true
            res.json({sucess , authtoken})
            console.log(authtoken)

            console.log(user.id) //just consoling the user-id
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Pls try again later")

            
        }
    }) ;

    




module.exports = router;

