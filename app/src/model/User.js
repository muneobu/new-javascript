"use strict";
const Userstorage = require("./userStorage.js");

class User{
    constructor(body){
        this.body = body;
    }
    
   async login(){
        const client = this.body;
        const {id ,pw, name} = await Userstorage.getUserInfo(client.id);
        console.log((await Userstorage.getUserInfo(client.id)),"user.js 12번째줄");

        if(client.id === "maratang"){
            throw new Error("yummy food");
        }else if(id){
           if(id === client.id && pw === client.pw){
            console.log(name,"succeeded to log in");
            return {success : true,
            msg : "Loged in successfully"};
        }else{
            console.log(name,"failed to log in")
            return {
                success : false,
            msg:"Wrong password"}
        }}else{
            return { 
            success : false,
            msg:"ID doesn't exist"}
        }
        

        }
       async register(){
        const client = this.body;
        const response = await Userstorage.save(client); 
        if(response.success){
            console.log(response.newbieInfo.name , "succeeded to sign up")
        }
        return response;
        }
}
module.exports = User;