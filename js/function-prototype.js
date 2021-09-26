function Employee(id,name,dept,salary) {
    this.id= id;
    this.name= name;
    this.dept= dept;
    this.salary= salary;
}
Employee.prototype.nationality ="Canadian";
Employee.prototype.address ="R Street.";

Employee.prototype.showId = function () {
    return this.id;
};

let employee1 = new Employee(1001,"John","Engineering",9945.54);
employee1.jobType = "S/W";

let employee2 = new Employee(1002,"John","Engineering",9945.54);

console.log(employee1.address);
console.log(employee1.showId());
console.log(employee2.showId());

console.log(employee1);
console.log(employee2);