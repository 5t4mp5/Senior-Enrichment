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
    .then(([campus1, campus2]) => Student.create({
        firstName: "Steve",
        lastName: "Austin",
        email: "austin@bsr.com",
        gpa: 3.5,
        campusId: campus1.id
    }));
};