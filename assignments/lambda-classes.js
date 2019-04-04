// CODE here for your Lambda Classes
class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender;
    }
    speak() {
        return `Hello my name is ${name}, I am from ${location}`
    }
}

class Instructor extends Person {
    constructor(details) {
        super(details);
        this.specialty = details.specialty;
        this.favLanguage = details.favLanguage;
        this.catchPhrase = details.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(details) {
        super(details);
        this.previousBackground = details.previousBackground;
        this.className = details.className;
        this.favSubjects = details.favSubjects;
    }
    listsSubjects() {
        return `My favorite subjects are: ${this.favSubjects}`
    }
    PRAssignment(subject) {
        `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(details) {
        super(details);
        this.gradClassName = details.gradClassName;
        this.favInstructor = details.favInstructor;
    }
    standUp(slack) {
        return `${this.name} announces to ${slack}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const erik = new Student({
    name: 'Erik',
    location: 'California',
    age: 24,
    gender: 'male',
    previousBackground: 'Warehouse Worker',
    className: 'Web19',
    favSubjects: ['javascript', ' css', ' html']
});