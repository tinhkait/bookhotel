import jwt from "jsonwebtoken";
import {createError} from "../ultils/error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenciated!"))
    }

    jwt.verify(token, process.env.jwt, (err, user)=>{
        if(err) return next(createError(403, "Token is not vailid!"));
        req.user = user;
        next()
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () =>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403, "You are not authorized!"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403, "You are not authorized!"));
        }
    })
}

