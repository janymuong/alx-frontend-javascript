interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  const teacher1: Teacher = {
    firstName: 'GNU Linux Person',
    fullTimeEmployee: true,
    lastName: 'OS',
    location: 'Nairobi, Kenya',
  };

  const teacher3: Teacher = {
    firstName: 'Doe',
    fullTimeEmployee: false,
    lastName: 'Smith',
    location: 'Birmingham',
    contract: false,
  };

  console.log(teacher1);
  console.log(teacher3);
    