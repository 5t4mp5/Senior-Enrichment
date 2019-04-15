const { Student, Campus } = require("./models");

module.exports = () => {
    return Promise.all([
        Campus.create({
            name: "Adams Hall",
            address: "1 North Cemetary Drive",
            description: "The Addams family mansion is the ancestral home of the Addams family. Its properties, dimensions and decor are as strange and mysterious as the family itself. But, as they say, 'weird is relative'. The mansion is decorated with various bricabrac, all of which seem to hail from different tastes. This ranges from suits of armor to life-sized preserved animal remains. Doors tend to open and close on their own, and there appear to be numerous unseen passageways through which the disembodied hand, Thing, may travel.",
            imgUrl: "http://www.manic-expression.com/wp-content/uploads/2017/10/Addams-Family-Trivia-EMGN12.jpg"
        }),
        Campus.create({
            name: "Munster Mansion",
            address: "1313 Mockingbird Lane",
            description: "It's spoooooooooky! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imgUrl: "http://www.thestudiotour.com/wp/wp-content/gallery/ush-backlot-colonial-munster/Screen-Shot-2012-03-19-at-23.54.38.png"
        }),
        Campus.create({
            name: "Xanadu",
            address: "41 Kane Drive",
            description: "Here, on the deserts of the Gulf Coast, a private mountain was commissioned and successfully built. One hundred thousand trees, twenty thousand tons of marble are the ingredients of Xanadu's mountain. Contents of Xanadu's palace: paintings, pictures, statues, the very stones of many another palace — a collection of everything so big it can never be cataloged or appraised; enough for ten museums; the loot of the world. Xanadu's livestock: the fowl of the air, the fish of the sea, the beast of the field and jungle. Two of each; the biggest private zoo since Noah. Like the Pharaohs, Xanadu's landlord leaves many stones to mark his grave. Since the Pyramids, Xanadu is the costliest monument a man has built to himself.",
            imgUrl: "http://www.scriptgodsmustdie.com/wp-content/uploads/2015/02/Xanadu-Gates-Citizen-Kane.png"
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