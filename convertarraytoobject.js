var students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(){
    // newObject = Object.assign({}, students)
    // console.log(newObject);
    // let newObj = Object.fromEntries(students);
    // console.log(newObj);
    let obj = {};
    obj.push(students[0][0]);
    obj.push(students[0][1]);
    obj.push(students[0][2]);
}
console.log(obj)
convertArrayToObject(students)