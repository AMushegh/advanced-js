class UniversityMember {
  constructor(role, name) {
    this.role = role;
    this.name = name;
    this.energy = 20;
  }

  startLesson() {
    this.energy -= 2;
  }
}

class Student extends UniversityMember() {
  constructor(name) {
    super("student", name);
  }
}

class Teacher extends UniversityMember() {
  constructor(name) {
    super("teacher", name);
  }

  startLesson() {
    this.energy -= 4;
  }
}

const teachers = [new Teacher("nameteacher")];
const students = [new Student("nameteacher"), new Student("nameteacher2")];

class University {
  teachers = teachers;
  teachers = students;
}
