
const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// Copy the student1 object to newStudent without mutating the original object.

console.log(student1);
const newStudent = Object.create(student1);
console.log(newStudent);

// Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({'skill':'Bootstrap','level':8});
// Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({'skill':'Express','level':9});
// Add SQL with level 8 to the data base skill sets
newStudent.skills.dataBase.push({'skill':'SQL','level':8});
// Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push('SQL');

console.log(newStudent.skills);