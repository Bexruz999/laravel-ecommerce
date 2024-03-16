
let user1 = new User;

console.log(
    user1
        .setName('admin')
        .setAge(12)
        .setCity(new City("Buxoro", ["qorako'l", 'olot']))
        .getName()
);

let student1 = new Student();

console.log(student1.getAge())
