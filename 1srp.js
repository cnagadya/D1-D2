/**
 * SRP Violation
 * The constructor and getIntroduction fns manage properties
 * savePerson handles things to do with data storage
 *
 */
class Andelan {
  constructor(name, designation) {
    this._name = name;
    this._designation = designation;
  }
  getIntroduction() {
    return `${this._name} is a(n) ${this._designation}`;
  }
  savePerson() {
    return `${this} is saved to the file`;
  }
}


/* ================
* Resolving the violations
================== */

// class Andelan {
//   constructor(name, designation) {
//     this._name = name;
//     this._designation = designation;
//   }
//   get name(){
//     return this._name
//   }

//   getIntroduction() {
//     return `${this._name} is a(n) ${this._designation}`;
//   }
// }

// class DataManager {
//   getPerson() {
//     // code to retrive
//   }
//   savePerson(person) {
//     return `${person.name}'s details saved to the file`;
//   }
//   //or any other data management implementations
// }

// const newbie = new Andelan("Joe Doe", "Intern");
// const datamanager = new DataManager();
// console.log(datamanager.savePerson(newbie))
// console.log(newbie.getIntroduction());
