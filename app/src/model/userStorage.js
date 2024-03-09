"use strict";

// const { use } = require("../route");

const fs = require("fs").promises;

class userStorage {
  static #getUserJungbo(data, id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKey = Object.keys(users);
      const userInfo = usersKey.reduce((userJungbo, info) => {
        userJungbo[info] = users[info][idx];
        console.log(userJungbo,"userStorage.js 14번째줄");
        return userJungbo;
      },{});//info = [id,pw,name] usersKey였던것
      console.log(userInfo,"userStorage.js 17번째줄");
      return userInfo;
  }

  static getUserInfo(id){
  return fs
  .readFile("./src/databases/users.json")
  .then((data) => {
    const res = this.#getUserJungbo(data, id);
    console.log(res,"userStorage.js 26번째줄")
    return res;

  }).catch((err)=>{
      console.log(err + "테이블 읽는 중 비빔면 먹고싶음 이슈");});
   
  }
  static #getUsers(data,isAll, args){
    const users = JSON.parse(data);
    if(isAll){
      return users;
    }
    const newUsers = args.reduce((newbie, arg) => {
      if (users.hasOwnProperty(arg)) {
        newbie[arg] = users[arg];
      }
      return newbie;
    }, {});
    return newUsers;
  }

 static getUsers(isAll,...args) {
  return fs
  .readFile("./src/databases/users.json")
  .then((data) => {
    return this.#getUsers(data,isAll, args)

  }).catch((err)=>{
      console.log(err + "테이블 읽는 중 비빔면 먹고싶음 이슈");});
   
 
  
}
static async save(userInfo){
  const users = await this.getUsers(true);
  console.log(users,"UserStorage.js 61");
  if(users.id.includes(userInfo.id)){
    const res = {
      success : false,
      msg : "중복된 id"
    }
    return res;
    } else if(!users.id.includes(userInfo.id)){
    users.id.push(userInfo.id);
    users.pw.push(userInfo.pw);
    users.name.push(userInfo.name);
    fs.writeFile("./src/databases/users.json",JSON.stringify(users));
    return {success : true,
    msg : "Registered successfully",
  newbieInfo : {
    id : userInfo.id,
    pw : userInfo.pw,
    name : userInfo.name
  }};
  }
}

}


module.exports = userStorage;
