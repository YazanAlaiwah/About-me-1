'use strict';
alert('welcome to my page ! Are you ready to know more about me?');
var whoYouAre = prompt('First can you told me what is your name');
// console.log(whoYouAre);
alert('Hello ' + whoYouAre + ' happy to talk with you!' + ' Lets start!');
var counterForMarke = 0;
(function() {
  var study = prompt(
    ' Do you think that I studied photography at the university?'
  ).toUpperCase();
  // console.log(study);

  if (study === 'YES' || study === 'Y') {
    alert('No I did not! I studied computer engineering');
  } else if (study === 'NO' || study === 'N') {
    alert(
      ' No but i wish i did ! This is a great hobby for me, Photography is a beautiful passion , I hope you love to shoot and loves the beauty of pictures, especially nature pictures '
    );
    counterForMarke = counterForMarke + 1;
  } else {
    alert('You skip first qustion');
  }
  alert(
    'Iam going to put Some photos taken by my lens here for some places, I hope you like it'
  );
})();

(function() {
  var love = prompt(' do you think that i love Reading ?').toUpperCase();
  // console.log(love);

  if (love === 'YES' || love === 'Y') {
    alert('Oh thats right i love reading very much');
    counterForMarke = counterForMarke + 1;
  } else if (love === 'NO' || love === 'N') {
    alert('Why do you think that ! Iam reading lover ');
  } else {
    alert('You skip second qustion');
  }
})();

function book() {
  var book = prompt(
    ' do you think that i love the scientific books more than novels ?'
  ).toUpperCase();
  // console.log(book);

  if (book === 'YES' || book === 'Y') {
    alert('of course not ! I feel bored quickly');
  } else if (book === 'NO' || book === 'N') {
    alert(
      ' Yes, the novels are great, but you have to choose them carefully to be as good as you want. There will be some novels that I have read and liked.'
    );
    counterForMarke = counterForMarke + 1;
  } else {
    alert('You skip third qustion');
  }
}
// book();

function grade() {
  var grade = prompt(
    ' do you think that i had graduate easily ?'
  ).toUpperCase();
  // console.log(grade);

  if (grade === 'YES' || grade === 'Y') {
    alert('of course not ! I suffered until that day');
  } else if (grade === 'NO' || grade === 'N') {
    alert(' right. that was hard!');
    counterForMarke = counterForMarke + 1;
  } else {
    alert('You skip fourth qustion');
  }

  alert('I hope you did not suffer to graduate like me');
}
// grade();

var film = function() {
  var film1 = prompt(
    ' do you think that i love Arabic movies more than English?'
  ).toUpperCase();
  // console.log(film);

  if (film1 === 'YES' || film1 === 'Y') {
    alert(
      'It is hard to find beautiful Arabic movies, so I dont like them more than english movies The best Arabic movies comedies movies Like Ahmed Helmys films'
    );
    counterForMarke = counterForMarke + 1;
  } else if (film1 === 'NO' || film1 === 'N') {
    alert('Not all movies, but there are really great movies');
    counterForMarke = counterForMarke + 1;
  } else {
    alert('You skip fifth qustion');
  }
};
// film();

var collegeYears = function() {
  for (var i = 0; i < 4; i++) {
    var MyCollegeYears = parseInt(
      prompt('Expect how many years of my life I spent at university')
    );
    if (MyCollegeYears === 5) {
      alert('It is right');
      i = i + 10;
      counterForMarke = counterForMarke + 1;
    } else if (MyCollegeYears > 5) {
      alert('Too high');
    } else if (MyCollegeYears < 5) {
      alert('too low');
    } else {
      alert('Some thing rong');
    }
    if (i === 3) {
      alert('I spent 5 years');
    }
  }
};
// collegeYears();
var travel = function() {
  var placeToTravel = ['spain', 'france', 'maldives', 'turkey', 'italia'];
  for (var j = 0; j < 6; j++) {
    //console.log(j);
    var country = prompt(
      'Choose a country that you think I would like to travel to'
    ).toLowerCase();
    for (var index = 0; index < placeToTravel.length; index++) {
      if (country == placeToTravel[index]) {
        counterForMarke = counterForMarke + 1;
        alert('right');
        j += 10;
        break;
      }
    }
  }

  alert('I love spain ,france ,maldives,turkey and italia ');

  alert(
    'It was a beautiful time, wasnt it? Thank you for your time ' + whoYouAre
  );
  alert('Your scoor is : ' + counterForMarke + '/7');
};

(function() {
  var functionsName = [book, grade, film, collegeYears, travel];
  for (var g = 0; g < functionsName.length; g++) {
    functionsName[g]();
  }
})();
// travel();
// var MyCollegeYears = parseInt (prompt('Expect how many years of my life I spent at university'));
// while ()
// { var MyCollegeYears = parseInt (prompt('Expect how many years of my life I spent at university'));

// }
// switch (country) {
// case 'spain':
// case 'france':
// case 'maldives':
// case 'turkey':
// case 'italia':

//   break;

// if (country === placeToTravel){
