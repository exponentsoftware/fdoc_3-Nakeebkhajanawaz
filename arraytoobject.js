  
/*A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name,
skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.*/

function ArraytoObject(array) {

    return array.map(person => Object.assign(...person.map(([k, v]) => ({ [k]: v }))));
  }
  
  var array = [[["name",'David'], ["skills",['HTM', 'CSS', 'JS', 'React']], ["scores",[98, 85, 90, 95]]]]
  
  console.log(ArraytoObject(array));
 // console.log(array);
