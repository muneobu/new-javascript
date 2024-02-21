"use strict";

const { use } = require("../route");

const fs = require("fs").promises;

class userStorage {
  static #getUserJungbo(data, id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKey = Object.keys(users);
      const userInfo = usersKey.reduce((userJungbo, info) => {
        userJungbo[info] = users[info][idx];
        console.log(userJungbo,"userStorage.js 34번째줄");
        return userJungbo;
      },{});//info = [id,pw,name] usersKey였던것
      console.log(userInfo,"userStorage.js 37번째줄");
      return userInfo;
  }
  static getUserInfo(id){
  return fs
  .readFile("./src/databases/users.json")
  .then((data) => {
    const res = this.#getUserJungbo(data, id);
    console.log(res,"userStorage.js 21번째줄")
    return res;

  }).catch((err)=>{
      console.log(err + "테이블 읽는 중 비빔면 먹고싶음 이슈");});
   
 
  
}
// static save(userInfo){
//   users.id.push(userInfo.id);
//   users.pw.push(userInfo.pw);
//   users.name.push(userInfo.name);
//   console.log(users,"userStorage.js 39번째줄");
// }

}


module.exports = userStorage;
