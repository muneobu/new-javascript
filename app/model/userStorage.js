"use strict";
class userStorage {
  static #data = {
    id: ["banana", "tomato", "cherry"],
    pw: ["bb", "tt", "cc"],
    name: ["ba", "to", "ch"],
  };
  static getUsers(...args) {
    const users = this.#data;
    const newUsers = args.reduce((newbie, arg) => {
      if (users.hasOwnProperty(arg)) {
        newbie[arg] = users[arg];
      }
      console.log(newbie);
      return newbie;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}

module.exports = userStorage;
