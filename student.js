const studentsList = [
    {
        studentName: 'Andrei',
        phone_number: '4857463748',
        age: 25,
        hobbies: ['gaming', 'eating']
},
    {
        studentName: 'Mihai',
        phone_number: '4857463748',
        age: 28,
        hobbies: ['books', 'cycling']
},
    {
        studentName: 'Marius',
        phone_number: '4857463748',
        age: 23,
        hobbies: [ 'music', 'sleeping']
},
    {
        studentName: 'Costel',
        phone_number: '4857463748',
        age: 25,
        hobbies: ['music', 'books']
},
    {
        studentName: 'Catalin',
        phone_number: '4857463748',
        age: 30,
        hobbies: ['gaming']
}  
];

let allStudents =  [];

for (let i =0 ; i < studentsList.length; i++){
    let student = new Student(studentsList[i].studentName, studentsList[i].phone_number, studentsList[i].age);
    student.setHobbies(studentsList[i].hobbies);
    allStudents[allStudents.length] = student;
}

console.log(allStudents);

console.log('One of the students presentet himself: ' + allStudents[0].greetings());

for (i = 0; i < allStudents.length; i++){
    if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('books')){
        console.log(allStudents[i].greetings())
    }
}