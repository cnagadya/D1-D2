/**
 * ISP Violation
 * Clients should not be forced to implement methods they dont us 
 * Better Implementated in Typescript since JS has no interfaces
 */
class Andelan {
  constructor(name, designation, tmac, amityroom, shift, society) {
    this.name = name;
    this.designation = designation;
    this.society = society;
    this.tmac = tmac;
    this.amityroom = amityroom;
    this.shift = shift;
  }
  getIntroduction() {
    return `${this.name} is a(n) ${this.designation}`;
  }

  tmacNo() {
    if (this.tmac) return `been issued tmac${this.tmac}`;
    else return "no tmac";
  }

  accomodation() {
    return `a place to stay in room ${this.amityroom}`;
  }

  societyName() {
    return `is in ${this.society} society`;
  }

  cookingShift() {
    if (this.shift) return `cooks during the ${this.shift} shift`;
    else return "no permission to cook at Andela";
  }

  detailedInfo() {
    return `
    ${this.getIntroduction()}
    (S)he has:
    ${this.tmacNo()},
    ${this.accomodation()},
    ${this.cookingShift()} and
    ${this.societyName()}`;
  }
}

const fellow = new Andelan("Christine","fellow","#100","F10",null,"istelle");
const chef = new Andelan("Cyrus", "chef", null, null, "morning", "no")
console.log(fellow.detailedInfo());
console.log(chef.detailedInfo());

/* ================
* Resolving the violations
================== */
// class Andelan {
//   constructor({ name, designation, details }) {
//     this.name = name;
//     this.designation = designation;
//     this.details = details;
//   }

//   getIntroduction() {
//     return `${this.name} is a(n) ${this.designation}`;
//   }

//   detailedInfo() {
//     return `
//     ${this.getIntroduction()}
//     ${this.details.more()}`;
//   }
// }

// class Chef {
//   constructor(shift) {
//     this.shift = shift;
//   }
//   more() {
//     return `(S)he cooks during the ${this.shift} shift`;
//   }
// }

// class Fellow {
//   constructor(society, tmac, amityroom) {
//     this.society = society;
//     this.tmac = tmac;
//     this.amityroom = amityroom;
//   }
//   tmacNo() {
//     return `been issued tmac ${this.tmac}`;
//   }

//   accomodation() {
//     return `a place to stay in room ${this.amityroom}`;
//   }

//   societyName() {
//     return `is in ${this.society} society`;
//   }
//   more() {
//     return `
//     (S)he has:
//     ${this.tmacNo()},
//     ${this.accomodation()}, and 
//     ${this.societyName()}
//     `;
//   }
// }

// const fellow = new Andelan({
//   name: "Chris",
//   designation: "Fellow",
//   details: new Fellow("istelle", "10", "F4")
// });
// console.log(fellow.detailedInfo());
// const chef = new Andelan({
//   name: "Tinah",
//   designation: "Chef",
//   details: new Chef("Morning")
// })
// console.log(chef.detailedInfo());