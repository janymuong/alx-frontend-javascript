interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

//   const teacher1: Teacher = {
//     firstName: 'GNU Linux Person',
//     fullTimeEmployee: true,
//     lastName: 'OS',
//     location: 'Nairobi, Kenya',
//   };

//   const teacher3: Teacher = {
//     firstName: 'Doe',
//     fullTimeEmployee: false,
//     lastName: 'Smith',
//     location: 'Birmingham',
//     contract: false,
//   };

//   console.log(teacher1);
//   console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
  }

//   const director1: Directors = {
//     firstName: 'Erwin',
//     lastName: 'Smith',
//     location: 'Paradis Island',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };

//   console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("GNU-Linux", "Person")); // logs 'G. Person'