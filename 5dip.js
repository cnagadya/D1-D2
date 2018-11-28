/**
 * Dependence Inversion Principle Violation
 * High level modules should not depend on lower level module.
 * Fellow however depends on Ops to get a mac
 *
 */

class Fellow {
  constructor() {
    // ...code
    this.issuer = new Ops();
  }

  // ...code
  getMac() {
    console.log(this.issuer.assignMac());
  }
}

class Ops {
  // checks inventory
  // assume Mac209 is the nex available one
  assignMac() {
    return "Mac209 is issued";
  }
}

/* ================
* Resolving the violations
================== */

// class Fellow {
//   constructor(issuer) {
//     // ...code
//     this.issuer = issuer;
//   }
//   // ...code

//   getMac() {
//     console.log(this.issuer.assignMac());
//   }
// }

// class Issuer {
//   // checks inventory
//   // assume Mac209 is the nex available one
//   assignMac() {
//     return "Mac209 is issued";
//   }
// }

// class Ops extends Issuer {
//   assignMac() {
//     return super.assignMac() + " by ops";
//   }
// }

// class Facilities extends Issuer {
//   assignMac() {
//     return super.assignMac() + " by facilities";
//   }
// }

// const ops = new Ops();
// const facilities = new Facilities();
// const fellow = new Fellow(ops);
// // const fellow = new Fellow(facilities);
// fellow.getMac();
