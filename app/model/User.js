"use strict";
const Userstorage = require("./userStorage.js");

class User{
    constructor(body){
        this.body = body;
    }
    
    login(){
        const body = this.body;
        const {id, pw, name} = Userstorage.getUserInfo(body.id);
        if(id){
            if(id === "maratang"){
                throw new Error("yummy food");
            }

        else if(id === body.id && pw === body.pw){
            console.log(name,"tried to log in");
            return {success : true,
            msg : "Login success"};
        }else{
            return {
                success : false,
            msg:"Wrong password"}
        }}else{
            return { 
            success : false,
            msg:"ID doesn't exist"}
        }

        }
}
module.exports = User;