class Student {
  constructor(studentName, phone_number, age) {
    this.hobbies = null;
    this.studentName = studentName;
    this.phone_number = phone_number;
    this.age = age;
  }

  setHobbies(hobbies) {
    this.hobbies = hobbies;
  }

  getHobbies() {
    return this.hobbies;
  }

  greetings() {
    return `Hello, my name is ${this.studentName} and I'm ${this.age} of age.`
  }
}


