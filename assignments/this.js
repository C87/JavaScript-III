/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding will return the window object which contains the global context.
* 2. Implicit binding is bound to the context for which a method belongs, specifically objects.
* 3. New binding with constructor functions returns an object that contains the instatiation of the constructor.
* 4. Explicit binding uses the bind, call or apply methods to explicitiy detatch a function from an object.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const shaun = {
    name: 'Shaun',
    job: 'Full Stack Engineer',
    speak: function() {
        console.log(`Hello I'm ${this.name}, and I'm a ${this.job}`);
    }
}

shaun.speak();

// Principle 3

// code example for New Binding

function NewPerson(person) {
    this.name = person.name;
    this.job = person.job;
    this.intro = function() {
        console.log(`Hello I'm ${this.name}, and I'm a ${this.job}`);
    };
}

const shaunC = new NewPerson({
    name: 'ShaunC',
    job: 'Full Stack Engineer',
});

shaunC.intro();

// Principle 4

// code example for Explicit Binding

// Bind, call, apply

const applicant = {
    name: 'Shaun',
    role: 'Full Stack Engineer',
}

const skills = ['HTML', 'CSS', 'JS'];

function introduction (skills1, skills2, skills3) {
    console.log(`Hi there! My name is ${this.name}, and I think the skills I have in ${skills1}, ${skills2}, ${skills3} would be ideal for the role of ${this.role}`);
}

introduction.apply(applicant, skills);