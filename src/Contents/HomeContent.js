const events = [
    { 
        name: "Demo: Embedded system",
        description: "Introduction to electronics,Applications of Electronics,Basic Circuit of Development,Introduction to microcontrollers . PROJECT -Automatic door Smart dustbin,RF Tx Rx module circuit, Mobile control Robot,clothes retailar project, Electronic Voting Machine",
        date: '24',
        month: 'Aug',
        image: '../Images/IMG_20190331_112818.jpg'
    },
    { 
        name: "Demo: Internet of things, Arduino",
        description: "Introduction to Internet of Things Introduction to HTML Basic programming project Home automation",
        date: '02',
        month: 'Jun',
        image: '../Images/IMG-20190610-WA0015.jpg'
    },
    { 
        name: "Demo: AutoCAD, SolidWorks, CATIA",
        description: "Introduction to electronics,Applications of Electronics,Basic Circuit of Development,Introduction to microcontrollers . PROJECT -Automatic door Smart dustbin,RF Tx Rx module circuit, Mobile control Robot,clothes retailar project, Electronic Voting Machine",
        date: '15',
        month: 'Mar',
        image: '../Images/IMG-20190610-WA0017.jpg'
    },
    { 
        name: "Balram",
        description: "Hello hello hello",
        date: '29',
        month: 'Sep',
        image: '../Images/IMG_20200201_120456.jpg'
    },
]

const gallery = [
    { src: "../Images/IMG_20190331_112818.jpg" },
    { src: "../Images/IMG_20190331_112845.jpg" },
    { src: "../Images/IMG_20190402_140149.jpg" },
    { src: "../Images/IMG_20190420_191337.jpg" },
    { src: "../Images/IMG_20200201_120456.jpg" },
    { src: "../Images/IMG-20190402-WA0029.jpg" },
    { src: "../Images/IMG_20200201_120456.jpg" },
  ];

  const results = [
      {
          competition: "Robospridh Competition",
          participants: [
              {
                  position: "1",
                  name: "John Doe",
                  RegisterNumber: "RA1811003010698",
                  photo: "../Images/Selected/IMG_20200112_124652.jpg"
              },
              {
                  position: "2",
                  name: "Richard Roe",
                  RegisterNumber: "RA1811003010711",
                  photo: "../Images/Selected/IMG_20200112_124652.jpg"
              },
              {
                  position: "3",
                  name: "Jane Roe",
                  RegisterNumber: "RA1811003010069",
                  photo: "../Images/Selected/IMG_20200112_124652.jpg"
              },
          ]
      },
  ]

module.exports = {
    events,
    gallery,
    results,
}