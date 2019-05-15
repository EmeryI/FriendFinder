// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        "name": "Iron Man",
        "photo": "FriendFinder/images/IronMan.jpg",
        "scores": [
            9,
            1,
            4,
            7,
            2,
            7,
            4,
            1,
            4,
            3
        ]
    },
    {
        "name": "Captain America",
        "photo": "FriendFinder/images/CaptainAmerica.jpg",
        "scores": [
            8,
            2,
            5,
            8,
            2,
            5,
            8,
            1,
            3,
            3
        ]
    },
    {
        "name": "Thor",
        "photo": "FriendFinder/images/Thor.jpg",
        "scores": [
            7,
            3,
            6,
            9,
            2,
            5,
            9,
            1,
            4,
            3
        ]
    },
    {
        "name": "Thanos",
        "photo": "FriendFinder/images/Thanos.jpg",
        "scores": [
            6,
            4,
            7,
            1,
            2,
            1,
            4,
            1,
            2,
            4
        ]
    },
    {
        "name": "Black Widow",
        "photo": "FriendFinder/images/BlackWidow.jpg",
        "scores": [
            5,
            5,
            8,
            2,
            2,
            2,
            4,
            1,
            5,
            4
        ]
    },
    {
        "name": "Hulk",
        "photo": "FriendFinder/images/Hulk.jpg",
        "scores": [
            4,
            6,
            9,
            3,
            2,
            3,
            4,
            1,
            1,
            4
        ]
    },
    {
        "name": "Gamora",
        "photo": "FriendFinder/images/Gamora.jpg",
        "scores": [
            3,
            7,
            1,
            4,
            1,
            4,
            4,
            1,
            5,
            1
        ]
    },
    {
        "name": "Nebula",
        "photo": "FriendFinder/images/Nebula.jpg",
        "scores": [
            2,
            8,
            2,
            5,
            2,
            5,
            4,
            1,
            3,
            2
        ]
    },
    {
        "name": "Rocket Raccoon",
        "photo": "FriendFinder/images/RocketRaccoon.jpg",
        "scores": [
            1,
            9,
            3,
            6,
            3,
            6,
            4,
            1,
            5,
            5
        ]
    },
    {
        "name": "Okoye",
        "photo": "FriendFinder/images/Okoye.jpg",
        "scores": [
            9,
            1,
            4,
            7,
            4,
            7,
            4,
            1,
            4,
            3
        ]
    },
    {
        "name": "Star Lord",
        "photo": "FriendFinder/images/StarLord.jpg",
        "scores": [
            8,
            2,
            5,
            8,
            5,
            8,
            4,
            1,
            2,
            5
        ]
    },
    {
        "name": "Loki",
        "photo": "FriendFinder/images/Loki.jpg",
        "scores": [
            7,
            3,
            6,
            9,
            6,
            9,
            4,
            5,
            2,
            4
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;