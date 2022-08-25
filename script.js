let students = [];
students[0] = {
  firstName: "Devon",
  lastName: "Kisob",
  id: "353564610;",
  grades: [96,93,88,88],
  };

students[1] = {
  firstName: "Pandora",
  lastName: "Long",
  id: "353564620",
  grades: [97,84,90,96]
  };

students[2] = {
  firstName: "Jacayl",
  lastName: "Ali",
  id: "353564630",
  grades: [99,80,92,94]
  };

students[3] = {
  firstName: "Diamond",
  lastName: "Waters",
  id: "353564640",
  grades: [99,98,99,99]
  };

students[4] = {
  firstName: "Ace",
  lastName: "Mitchfield",
  id: "353564650",
  grades: [91,89,92,91]
  };

for (let i = 0; i<students.length; i++){
  let sum = 0
  for (let j = 0; j<students[i].grades.length; j++){
    sum+=students[i].grades[j]
  }
  students[i].gpa = sum/4/25
}

var sortedGPA = students.sort(({gpa:a}, {gpa:b}) => b-a);

for (let x = 0; x<students.length;x++){
  console.log(students[x].firstName + " "+ students[x].gpa)
}

