"use strict";
class userStorage {
  static #data = {
    id: ["banana", "tomato", "cherry","maratang"],
    pw: ["bb", "tt", "cc",],
    name: ["ba", "to", "ch"],
  };
  static getUsers(...args) {
    const users = this.#data;
    const newUsers = args.reduce((newbie, arg) => {
      if (users.hasOwnProperty(arg)) {
        newbie[arg] = users[arg];
      }
      return newbie;
    }, {});
    return newUsers;
  }
  static getUserInfo(id){
  const users = this.#data;
  const idx = users.id.indexOf(id);
  const usersKey = Object.keys(users);

  const userInfo = usersKey.reduce((userJungbo, info) => {
    userJungbo[info] = users[info][idx];
    return userJungbo;
  },{})//info = [id,pw,name] usersKey였던것
  return userInfo;
  }
  
}


module.exports = userStorage;
