/**
 * LSP Violation
 *  subtypes must be substitutable for their base types
 */
class Andelan {
  constructor(name, designation) {
    this._name = name;
    this._designation = designation;
  }

  getIntroduction() {
    return `${this._name} is a(n) ${this._designation}`;
  }
  canCode() {
    return `${this._name} is on the way to becoming a world class coder`;
  }
}

class Fellow extends Andelan {}

class Director extends Andelan {}

/* ================
* Resolving the violations
================== */

// class Andelan {
//   constructor(name, designation) {
//     this._name = name;
//     this._designation = designation;
//   }

//   getIntroduction() {
//     return `${this._name} is a(n) ${this._designation}`;
//   }
//   getRole() {}
// }

// class Fellow extends Andelan {
//   getRole() {
//     return `${this._name} is on the way to becoming a world class coder`;
//   }
// }

// class Director extends Andelan {
//   getRole() {
//     return `${this._name} is a world class manager`;
//   }
// }

// dire = new Director();
// console.log(dire.getRole());
