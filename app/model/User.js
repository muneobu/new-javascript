"use strict";
const Userstorage = require("./userStorage.js");

class User{
    constructor(body){
        this.body = body;
    }
    
    login(){
        const client = this.body;
        const {id, pw, name} = Userstorage.getUserInfo(client.id);
        console.log(id,pw,name)
        if(client.id === "maratang"){
            throw new Error("yummy food");
        }else if(id){
           if(id === client.id && pw === client.pw){
            console.log(name,"succed to log in");
            return {success : true,
            msg : "Login success"};
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
        register(){
        const client = this.body;
        const response =  Userstorage.save(client); 
        return response;
        }
}
module.exports = User;