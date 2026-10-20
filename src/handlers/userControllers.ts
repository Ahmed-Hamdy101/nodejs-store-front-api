 // create the logic Here controller --------->
 import {_error_general }  from "../errors/errors";


// import model
import {USER_MODEL} from "../model/UserModel";
 
//import express
import {NextFunction, Request,Response } from "express";
 

//import JWT
import jwt from "jsonwebtoken";

// import conig database
import  config from "../config/config";


//create intance from class
const Usermodel = new USER_MODEL();
 

 // ......................................{{ INDEX -- GET ALL USERS IF IT FOUND}}.................................................
export const  GetAllUsers =async (_req:Request, res:Response,next:NextFunction) => {
  // Handdling Error 
    try {
          // call index func
          const findAllUsers = await Usermodel.getAll();
          // return success message of status  200  as response 
          return  res.status(200).json( {status:"Ok Done ! View !",data:{...findAllUsers},message:"This Fine The all user  is retrieved "});          
    }
    catch (error) {
          // next middleware
          next(error)   
    }
}
 // ......................................{{ END GET ALL USERS IF IT FOUND}}.................................................

 
 
// ......................................{{ SHOW -- GET ONE SET USER IF IT FOUND}}.................................................
 
// get one user
// creating express response
export const GetSpecificUser =async (req:Request, res:Response,next:NextFunction) => {
   //  validations 
  const id =req.params.id as unknown as string;
  //  GET ID VALID
  if (id == "" ) {
          return res.send(_error_general.checkIn.GET);
  }
  if (typeof id !== "string" ) {
          return  res.send(_error_general.checkType.CHECKIS_STR);
  }

  try{         
          const findSingleUser =await Usermodel.getUserById(req.params.id as unknown as string); // ?! this parms will be id o get method    
          // return success message of status  200  as response 
          return res.status(200).json({status:"Ok Done ! View !",data:{...findSingleUser},message:"This Fine The  One User is retrieved"}); 
  }catch (error){
          res.status(400).json(error);      
          next(error);
  }
}
// ......................................{{ END SHOW -- GET ONE SET USERS IF IT FOUND}}.................................................


// ......................................{{ CREATE -- CREATE NEW RECORD IN DB}}.................................................
 
// create user
// creating express response
export const CreateRecordUser = async (req: Request, res: Response, next: NextFunction) => {
  const { f_name, l_name, passwords } = req.body;

  if (!f_name || !l_name || !passwords) {
    return res.status(400).json({ status: 'error', message: 'First name, last name, and password are required.' });
  }

  if (typeof f_name !== 'string' || typeof l_name !== 'string' || typeof passwords !== 'string') {
    return res.status(400).json({ status: 'error', message: 'Fields must be strings.' });
  }

  if (f_name.trim() === '' || l_name.trim() === '' || passwords.trim().length < 6) {
    return res.status(400).json({ status: 'error', message: 'Invalid user data.' });
  }

  try {
    const userPayload = { ...req.body, f_name: f_name.trim(), l_name: l_name.trim() };
    const UserCreation = await Usermodel.CreateUser(userPayload);
    const token = jwt.sign({ user: UserCreation }, config.secureToken as string);

    if (!UserCreation) {
      return res.status(401).json({ status: 'error', message: 'Cannot create user.' });
    }

    return res.status(201).json({ status: 'Ok!', data: { ...UserCreation, token }, message: 'User created successfully.' });
  } catch (error) {
    return next(error);
  }
};
 // ......................................{{ END  -- CREATE ONE SET  IF IT FOUND}}.................................................


 
// ......................................{{ UPDATE -- UPDAT ONE SET  IF IT FOUND}}.................................................
// creating express response
export const UpdateRecordUser =async (req:Request, res:Response,next:NextFunction) => {
  const id = req.params.id as  unknown as string;
  const {f_name,l_name,secret} =req.body

  if(!f_name&&l_name&&secret) {
          if (f_name && l_name && secret == '' ){return res.send(_error_general.checkIn.POST_ISEMPTY)}
          if ( typeof f_name && l_name && secret !== 'string' ){return  res.send(_error_general.checkType.CHECKIS_STR)}
          if ( secret.length<6 ){return  res.send(_error_general.checkIn.PASS)}
    }
  // VALID ID
  if(id == "" ) {
          return res.send(_error_general.checkIn.GET);
    }
  if(typeof id !== "string" ) {
          return res.send(_error_general.checkType.CHECKIS_STR);
    }
 
  
  try {
          const UserUpdate= await Usermodel.UpdateUser(id,req.body);
          res.status(200).json({status:"Ok!",data:{...UserUpdate},message:"This Fine The User has been updated"});
  }catch(error) {
          res.status(400).json(error);
          next(error);
  }

}
// ......................................{{ END -- UPDATE ONE SET  IF IT FOUND}}.................................................


/*
......................................{{ DELETE -- DELETE ONE SET  IF IT FOUND}}.................................................

*/

export const DeleteUser =async (req:Request, res:Response,next:NextFunction) => {
  const id = req.params.id as  unknown as string;
  // VALID ID
  if (id == "" ) {
          return res.send(_error_general.checkIn.GET);
      }
  if (typeof id !== "string" ) {
          return  res.send(_error_general.checkType.CHECKIS_STR)
      }

  try{
          const UserDeleted =await Usermodel.DeleteUser(req.params.id as unknown as string);   
          return res.status(200).json({status:"Ok Done ! Delete !",data:{...UserDeleted},message:"This Fine The User is deleted"});       
     }catch(error) {
          res.status(400).json(error);      
          next(error)
     }

}
 // ......................................{{ END DELETE --  ONE SET  IF IT FOUND}}.................................................
 

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { f_name, passwords } = req.body ?? {};

    if (!f_name || !passwords) {
      return res.status(401).json({ status: 'error', message: 'Missing login information.' });
    }

    const userPayload = await Usermodel.verifyAuthSigninUser(f_name, passwords);

    if (!userPayload) {
      return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ user: userPayload }, config.secureToken as string);
    return res.status(200).json({ status: 'success!', data: { ...userPayload, token }, message: 'User authenticated.' });
  } catch (error) {
    return next(error);
  }
};
