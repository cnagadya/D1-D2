/**
 * OCP Violation
 * If a new person with a different designation is added, the code need modification to the work experience function
 */
class Andelan {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }
  workExperience() {
    if (this.designation === "fellow") {
      console.log("Min experience is 0");
    } else if (this.designation === "stc") {
      console.log("Min experience is 5");
    }
    else{
      //
    }
  }
}

const joe = new Andelan("Joe", "fellodwf");
joe.workExperience()

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

//   // set name(value){
//   //   this._name = value
//   // }
// }

// class Fellow extends Andelan {
//   constructor(name) {
//     super(name, "fellow")
//   }
//   workExperience() {
//     console.log("Min experience is 0");
//   }
// }

// class STC extends Andelan {
//   constructor(name) {
//     super(name, "stc")
//   }
//   workExperience() {
//     console.log("Min experience is 5");
//   }
// }

// class Director extends Andelan {
//   constructor(name) {
//     super(name, "director")
//   }
//   workExperience() {
//     console.log("Min experience is 10");
//   }
// }



// const fellow = new Fellow("Joe de Fellow");
// const stc = new STC("Smith de STC");
// const director = new Director("Director Doe");
// fellow.name = "ret"
// console.log(fellow._designation)
// fellow.workExperience();
// stc.workExperience();
// director.workExperience();
