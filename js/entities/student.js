class Student {

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
        // dit mag ook, dit noemen we een template literals
        // return `${this.firstName} ${this.lastName}`;
    }

}

export default Student;