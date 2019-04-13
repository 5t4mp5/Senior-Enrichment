const { Student, Campus } = require("./models");

module.exports = () => {
    return Promise.all([
        Campus.create({
            name: "Test Campus 1",
            address: "123 Fake Street",
            description: "A very real place that is real"
        }),
        Campus.create({
            name: "Test Campus 2",
            address: "1313 Mockingbird Lane",
            description: "It's spoooooooooky!"
        })
    ])
    .then(([campus1, campus2]) => Promise.all([
        Student.create({
            firstName: "Steve",
            lastName: "Austin",
            email: "austin@bsr.com",
            gpa: 3.1,
            campusId: campus1.id
        }),
        Student.create({
            firstName: "Lanny",
            lastName: "Poffo",
            email: "genius@poffo.com",
            gpa: 4.0,
            campusId: campus2.id
        })
    ]));
};