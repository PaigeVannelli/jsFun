const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    // .filter(cat => {
    //   cat.color === 'orange';
    // })
    
    // const result = kitties.reduce((acc, cat) => {
    //   if (cat.color === 'orange'){
    //     acc.push(cat.name) 
    //   }
    //   return acc
    // }, [])

    // return result


    // .filter(cat => {
    //   return cat.color === 'orange';
    // })
    // .map(cat => {
    //   return cat.name
    // })
    // return result;

    // I am given an array of objects 
    //I want to return objects that have a certain characteristic 
    //We need to use filter 
    // Annotation:
    // Write your annotation here as a comment

    // filter by kitties.color === organge 
    // return kitties.name
    const result = kitties.filter(cat => {
      return cat.color === 'orange'
    }).map(kitty => {
      return kitty.name
    })

    return result

  },

  sortByAge() {
    // Sort the kitties by their age

    // const result = kitties.sort((a, b) => {
    //   return b.age - a.age;
    // });
    // return result;

    // Annotation:
    //I have an array of objects 
    //I need to sort by their age
    //return an array of the same length that's mutated by reassigning index number
    //.map() most likely 
    // Write your annotation here as a comment

    // use sort and sort by age 

    const result = kitties.sort((a, b) => {
      return b.age - a.age
    })
    return result 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    // const result = kitties.sort((a, b) => {
    //   return b.age - a.age;
    // }).map(cat => {
    //   cat.age += 2; 
    //   return cat
    // })
  //   const result = kitties.sort((a, b) => {
  //     return b.age - a.age;
  //   }).reduce((olderCats, cat) => {
  //     cat.age += 2; 
  //     olderCats.push(cat);
  //     return olderCats;
  //   }, [])

  //   return result;
  // }

  //map and change the age of each Cat by + 2 
  const result = kitties.sort((a, b) => {
    return b.age - a.age
  }).map(cat => {
    cat.age += 2
    return cat
  })

  return result 
  }
}

//I have an array in the wrong order and I want to add two to each age
//My first step is to sort array into the order I'd like using sort 
//second step: use .map() or .reduce() to a new array 
//cats should be in the right order already so I need to add two to ages 
//return each cat object 





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    // const clubNames = clubs.reduce((clubsObject, club) => {
    //   club.members.forEach(member => {
    //     if (!clubsObject[member]) {
    //       clubsObject[member] = [];
    //     }
    //     if (club.members.includes(clubObject[member])) {
    //       clubObjects[member].push(member)
    //   }
    // }

    //   console.log(clubsObject)
    //   return clubsObject
    // }, {})
    // return clubNames
  

    // in: array of obejcts
    // target: members array 
    // return one new object 
    // use a reduce on the clubs array
      // use for each on members
      // if property doesn't exist create it
      //then if members.includes club name push into array 


    // const result = clubs.reduce((keys, clubInfo) => {
    //     let memberNames = clubInfo.members.map(name => {
    //       return name
    //     })
    //     // keys[memberNames] = [];
    //     console.log(memberNames)
    //     return keys
    // }, {});
    // console.log(result)
    // return result;


    // const result = clubs.reduce((nameArray, clubInfo) => {
    //   clubInfo.members.forEach(member => {
    //     if (!nameArray.includes(member)) {
    //       nameArray.push(member)
    //     }
    //   })
    //     return nameArray
    // }, []).reduce((clubs, titles) => {
    //   clubs[titles] = ''
    //   console.log(clubs)
    //   return clubs
    // }, {})

    // given an array of club info objects 
    // each object has a club and members
    // we want one object with property as names non repeating
    // values of array of clubs they are in 
    // 1. reduce() to give us one object
    // 2. for each club we need to go through each member in the members property 
      // Each member should be a key in our new object 
        // using square bracket notation we create a property in an object 
        // We need a conditional that checksif name already exists as a proprty 
      // Assign the values to each name in our new object based on which club object they exist in as a member
        // in the second nested iterator we want to access the objects club value and push it into each new objects array value 
        // 


    // const result = clubs.reduce((membersInfo, club) => {
    //   club.members.forEach(name => {
    //     if (!membersInfo[name]) {
    //       membersInfo[name] = [];
    //     }
    //     if (club.members.includes(name)) {
    //       membersInfo[name].push(club.club)
    //     }
    //   })
    //   return membersInfo
    // }, {})

    // return result;

    // const result = clubs.reduce((membersInfo, club) => {
    //   club.members.forEach(name => {
    //     if (!membersInfo[name]) {
    //       membersInfo[name] = [];
    //     }
    //     if (!membersInfo[name].includes(club.club)) {
    //       membersInfo[name].push(club.club)
    //     }
    //   })
    //   return membersInfo
    // }, {})

    // return result;

    //Annotation #2
    // 1. Need to access array.members iterate through those array and push to new array 
    // Annotation:
    //start with: an array or objects 
    //keys include club name as a string
    //members as an array 
    //I need to return:
    //an object with key of persons name 
    //value of array of clubes they are in 
    //reduce
    //1. .map get an array of all of the name 
    // filter to filter through just unique names
    //reduce to 
    //check each key and see if the value includes a name 
    //if it does add the value to the name key 
    //return an object with name keys and values 


    //Array of objects with members as an array of names 
    //I want to return one new object 
    // use reduce to return an object 
    // 1. iterate through array with reduce 
      // target members array 
      // I want to put them in my object 
      // forEach() member 
      //conditional if object doesn't incclude it 
      // create that key = []
    // 2. values 
      // conditional if members includes member 
      // target the member array in the object .push club

      // const result = clubs.reduce((membersBelonging, club) => {
      //   club.members.forEach(member => {
      //     if (!membersBelonging[member]) {
      //       return membersBelonging[member] = [];
      //     }
      //     if (membersBelonging[member])
      //   })

      // }, {})

      // return result;
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(session => {
      const studentNumber = session.students / session.instructors;
      let object = {};
      object.mod = session.mod;
      object.studentsPerInstructor = studentNumber;
      return object
    });
    return result;

    // const result = mods.reduce((sessionBreakdown, session) => {
    //   let object = {}
    //   const studentNumber = session.students / session.instructors;
    //   object.mod = session.mod;
    //   object.studentsPerInstructor = studentNumber
    //   sessionBreakdown.push(object)
    //   return sessionBreakdown
    // }, []);
    // return result;

    // Annotation:
    //array of objects 
    // return an array same length of object 
    //.map to return an array of the same length but mutated 
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      let newCake = {}
      newCake.flavor = cake.cakeFlavor;
      newCake.inStock = cake.inStock;
      return newCake
    });
    return result;

    // Annotation:
    //We are given an array of objects
    //We want to treturn an array of the same length with fewer keys 
    //.map()
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // I have an array of objects
    // I want to return a short array of the same items
    // .filter to return the right item
    // when cake.inStock > 0
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((stock, cake) => {
      return stock += cake.inStock 
    }, 0);
    return result;

    // Annotation:
    // we have an array of object 
    //We need to target the inStock amount 
    // add up the instock amount for each  
    // need to return a number from an array 
    //reduce 
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((toppings, cake) => {
      cake.toppings.forEach(topping => {
        if (!toppings.includes(topping)) {
          toppings.push(topping)
        }
      })
      return toppings
    }, []);
    return result;

    // Annotation:
    // We want to return an array of a different length
    // array should be all unique toppings
    // I want to use a reduce
    // have a conditional that checks if the new array includes the topping
    // if not push the topping into the array 
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((toppingList, cake) => {
      cake.toppings.forEach(topping => {
        if (!toppingList[topping]) {
          toppingList[topping] = 1
        } else {
          toppingList[topping]++
        }
      })
      return toppingList
    }, {})


    //in array of cake obejcts
    // target: cake.toppings
    // one object
    // reduce return an object 
      //forEach on topppings
      // conditional that if it doesn't exist as a proprty
      // create that property and add one
      // otherwise take proprty ++

    return result;
    // const result = cakes.reduce((list, cake) => {
    //   cake.toppings.forEach(topping => {
    //     if (!list[topping]) {
    //       list[topping] = 0
    //     }
    //     list[topping] += 1
    //   }) 
    //   return list
    // }, {});

    // Annotation:
    //So we want to return ONE object 
    // use a reduce returning an object
    // 1. keys are each unique topping
      // .forEach indiviudal topping 
      // We want a condition to check if that key exists in our object 
      // if not we create a key for each object 
    // 2. assign a value to each key
      // start with a value of 0 for each key 
      // in the same for each iteration outside of the conditional 
      // find the object.key that matches the topping + 1 to the value 
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => {
      return classroom.program === 'FE';
    });
    return result;

    // Annotation:
    // given: Array of object 
    // return: an array of oject where the program is FE
    // I want to reutrn a shorter array not mutated - .filter
    // statement I want to check is if each object.program === 'FE'
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // const result = classrooms.reduce((totalCapacities, classroom) => {
    //   if (!totalCapacities.feCapacity) {
    //     totalCapacities.feCapacity = 0;
    //   };
    //   if (!totalCapacities.beCapacity) {
    //     totalCapacities.beCapacity = 0;
    //   }
    //   console.log(classroom.program)
    //   if (classroom.program === 'FE') {
    //     totalCapacities.feCapacity += classroom.capacity
    //   } else if (classroom.program === 'BE') {
    //     totalCapacities.beCapacity += classroom.capacity;
    //   }
    //   return totalCapacities;
    // // }, {feCapacity: 0, beCapacity: 0});
    // }, {});

    const result = classrooms.reduce((totalCapacities, classroom) => {
      console.log(classroom.program)
      if (classroom.program === 'FE') {
        totalCapacities.feCapacity += classroom.capacity
      } else if (classroom.program === 'BE') {
        totalCapacities.beCapacity += classroom.capacity;
      }
      return totalCapacities;
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // given: array of objects
    // return one object with two keys
    // Use a reduce and return an object with two keys built in 
    // set each key = 0 and add the amount of student for each classroom if the program is right
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    })
    return result;

    // Annotation:
    // given an array of objects
    // I need to return an array od obejcts the same length 
    // I would want to use .sort to sort by capacity 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.filter(book => {
      return book.genre !== 'Horror' && book.genre !== 'True Crime'
    }).map(book => {
      return book.title
    })

    console.log(result)

    // array of book objects
    // targeting book.genre
    // out: a shorter mutated array
    //filter and then a map
      // filter if genre !== horro or true crime 
      // map and return just names 
    // or a recuce 
    


    // const result = books.reduce((removedViolence, book) => {
    //   if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
    //     removedViolence.push(book.title)
    //   }
    //   return removedViolence
    // }, []);
    return result;

    // Annotation:
    // We get an array of book objects 
    // I want to return a new array that's shorter with just book titles 
    // reduce to return a shorter array 
    // I would want to return an array and if the book genre isn't horror or true crime
    // I want to push the books title to my accumulator 

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    // const result = books.reduce((getNewBook, book) => {
    //   if (book.published >= 1990) {
    //     let newBook = {}
    //     newBook.title = book.title;
    //     newBook.year = book.published;
    //     getNewBook.push(newBook);
    //   }
    //   return getNewBook
    // }, []);
    // return result;

    const result = books.filter(book => {
      return book.published >= 1990;
    }).map(book => {
      return {
        title : book.title,
        year : book.published,
      }
    })
    return result

    // use a filter to get all of the books in the right years
    // chain on .map to mutate our objects returning title and year

    // Annotation:
    // given array of book object 
    // a shorter array of just book published in 1990 and 2000
    // use a reduce 
    // return an array 
    // push in book objects
    // w properties title and year
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(city => {
      return (city.temperature.high + city.temperature.low) / 2
    });
    return result;

    // Annotation:
    // given array of objects
    // access each objects temp key obejct 
    // return array of numbers
    // .map
      // add up each cities high low / 2
      // return number 

    
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.filter(city => {
      if (city.type === "sunny" || city.type === "mostly sunny") {
        return city
      }
    }).map(city => {
      return `${city.location} is ${city.type}.`
    })
    return result;

    // Annotation:
    // given array of objects
    // return shorter array of strings
    // use a filter then use a map change what we are returning 
      // check for mostly sunny + sunny 
      // return city and temp in string 
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    let result = weather.sort((a, b) => {
      return b.humidity - a.humidity 
    });
    let newResult = result[0]
    return newResult;

    // Annotation:
    // given - array of objects 
    // return one object not mutated 
    // use .sort on city.humidity
    // return the array position of the highest humidity

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    let parksResult = {
      parksToVisit: [],
      parksVisited: []
    }

    nationalParks.forEach(park => {
      if (park.visited) {
        parksResult.parksVisited.push(park.name)
      } else {
        parksResult.parksToVisit.push(park.name)
      }
    });
    return parksResult;

    // Annotation:
    // given: and array of park objects 
    // return: an object two new arrays with park names 
    // use a forEach
    // conditional that pushes into each array base on true of false
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(park => {
      newPark = {}
      newPark[park.location] = park.name
      return newPark
    });
    return result;

    // Annotation:
    // in: array of park objects
    // out: an array of object same length but mutated 
    // method: .map return objects with 
      // location as a key and name as value 

  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((activities, park) => {
      park.activities.forEach(activity => {
        if (!activities.includes(activity)) {
          activities.push(activity)
        }
      })
      return activities
    }, []);
    return result;

    // Annotation:
    // in: array of objects
    // target: an array in the array 
    // out: new array 
    // reduce in national parks
      // forEach activity 
        // if acitivty doesn't exisit in array push it in
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((totalBeers, brewery) => {
      totalBeers += brewery.beers.length
      // console.log(totalBeers)
      return totalBeers
    }, 0);
    return result;

    // Annotation:
    // in: array of brewery objects 
    // access: the beers array
    // out: one number
    // method: use reduce acc = 0
      //get the length of each beers array add to acc 
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// Create an array of objects that each have the name 
// of the boss and the sum
// loyalty of all their sidekicks. e.g.:
// [
//   { bossName: 'Jafar', sidekickLoyalty: 3 },
//   { bossName: 'Ursula', sidekickLoyalty: 20 },
//   { bossName: 'Scar', sidekickLoyalty: 16 }
// ]
// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    let bossNames = Object.keys(bosses);
    const result = bossNames.reduce((finalArray, boss) => {
      let newBossObject = {
        bossName: bosses[boss].name,
        sidekickLoyalty: 0
      }
      sidekicks.forEach(sidekick => {
        // console.log(bosses[boss].name)
        if (sidekick.boss === bosses[boss].name) {
          newBossObject.sidekickLoyalty += sidekick.loyaltyToBoss
        }
      })
      finalArray.push(newBossObject)
      return finalArray
    }, [])
    return result
  }
}

// Annotation:
//   let bossNames = Object.keys(bosses);
//   let result = bossNames.map(boss => {
//     sidekicks.forEach(sidekick => {
//       if(sidekicks.boss === bosses[boss].name) {
//         let finalObject = {
//           bossName: bosses[boss].name,
//           sidekickLoyalty: 0
//         }
//         console.log("test", sidekick.loyaltyToBoss)
//         finalObject.sidekickLoyalty += sideKick.loyaltyToBoss
//       }
//     })
//     return finalObject 
//   })
//   return result 
// }
    // in: object of objects 
    // use Object.keys on bosses to target each boss name 
    // use a .map on object.keys  return new object 
    // if boss === bossname then add boss loyalty 






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    let constellationName = Object.keys(constellations)
    let allStars = []
    const result = constellationName.forEach(constellation => {
      constellations[constellation].stars.forEach(star => {
        allStars.push(star)
      })
    });
    const finalResult = stars.filter(star => {
      return allStars.includes(star.name)
    })
    return finalResult;

    // Annotation:
    // in: constellation object 
    // method: Object.key and then for each constalation.stars
    // for each Star add to new array 
    // method filter by is new array includes star name 
    // return: new smaller array 
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((finalObject, star) => {
      if (star.color in finalObject) {
      } else {
        finalObject[star.color] = []
      }
      finalObject[star.color].push(star)
      return finalObject
    }, {});
    return result;

    // Annotation:
    // in: stars array of objects 
    // out: one object with color keys and star arrays
    // method: target stars user a reduce to return an object 
    // if star color in object push in star
    // else create key and push in star 
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = movies.reduce((countObject, movie) => {
      countObject[movie.title] = 0
      countObject[movie.title] += movie.dinos.length
      return countObject
    }, {});
    // return result;

    // Annotation:
    // In: movies array of objects 
    // targeting dinos array 
    // return: one object with key of title and value of dinos length
    // methods: reduce on movies array returning an obejct  
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((finalObject, movie) => {
      finalObject[movie.director] = {}
      finalObject[movie.director] = movie.title 
      movieTitleObject = {}
      movieTitleObject[movie.title]
      return finalObject
    }, {});
    return result;

    // Annotation:
    // In: review human object with human objects 
    // in: iterate through movies array targeting cast array 
    // return new object with key director and if that matches 
    // push all movie titels to new object then see if cats names match 
    // grab yearReleased - year born 

    

  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of 
    humans who have not been cast in a Jurassic Park movie (yet), 
    their nationality, and their imdbStarMeterRating.
    The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    let stars = Object.keys(humans)
    let isCast 
    const result = stars.reduce((notCast, star) => {
      isCast = false 
      movies.forEach(movie => {
        if (movie.cast.includes(star)) {
          isCast = true
        }
      })
      if (!isCast) {
        let starObject = {}
        starObject.name = star
        starObject.nationality = humans[star].nationality
        starObject.imdbStarMeterRating = humans[star].imdbStarMeterRating
        notCast.push(starObject)
      }
      let final = notCast.sort((a, b) => {
        return b.nationality - a.nationality
      })
      return final
    }, [])
    return result;

    // Annotation:
    // In: humans obect with human objects 
    // target human.name, nationality and imdb rating 
    // in: movies.cast
    // methods: user reduce on movies array returning an array of object 
    // if cast memeber is not included in cast for each 
    // creat object and push in array 
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) 
    they were in the movie(s) they were cast in, as an array of age(s). 
    Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

   let castMembers = Object.keys(humans)
    const result = castMembers.reduce((castObjects, member) => {
      let newObject = {
        name: member,
        ages: [],
      }
      movies.forEach(movie => {
        if (movie.cast.includes(member)) {
          let age = (movie.yearReleased - humans[member].yearBorn) 
          // console.log(newObject)
          newObject.ages.push(age)
        }
      })
      
      castObjects.push(newObject)
      return castObjects
    }, [])
    
    return result;

    // in: array of movies
    // target - yearReleased and cast 
    // use object.key on humans to get all the cast members 
    // reduce returning an array 
    // if (cast includes the actor find their finormation and caludate thier 
    // age and push it into the array)
  }
};


// let students = [
//   {
//     name: 'Hermione',
//     gender: 'female',
//     house: 'Gryffindor',
//     pointsForHouse: 50,
//     personality: ['logical', 'kind', 'just', 'book worm']
//   },
//   {
//     name: 'Harry',
//     gender: 'male',
//     house: 'Gryffindor',
//     pointsForHouse: 35,
//     personality: ['brave', 'loyal', 'selfless', 'courage']
//   },
//   {
//     name: 'Ron',
//     gender: 'male',
//     house: 'Gryffindor',
//     pointsForHouse: -5,
//     personality: ['stubborn', 'strategist', 'loyal', 'passionate']
//   },
//   {
//     name: 'Luna',
//     gender: 'female',
//     house: 'Ravenclaw',
//     pointsForHouse: 15,
//     personality: ['whimsical', 'quiet', 'dependable']
//   },
//   {
//     name: 'Cedric',
//     gender: 'male',
//     house: 'Hufflepuff',
//     pointsForHouse: 20,
//     personality: ['brave', 'just', 'modest']
//   },
//   {
//     name: 'Draco',
//     gender: 'male',
//     house: 'Slytherin',
//     pointsForHouse: 30,
//     personality: ['cunning', 'arrogant', 'jealous']
//   },
//   {
//     name: 'Pansy',
//     gender: 'female',
//     house: 'Slytherin',
//     pointsForHouse: 10,
//     personality: ['leader', 'selfish', 'team-player']
//   },
//   {
//     name: 'Cho',
//     gender: 'female',
//     house: 'Ravenclaw',
//     pointsForHouse: 20,
//     personality: ['brave', 'loyal', 'intelligent', 'extrovert']
//   }
// ]

// let houseHeads = {
//   McGonagall: 'Gryffindor',
//   Snape: 'Slytherin',
//   Sprout: 'Hufflepuff',
//   Flitwick: 'Ravenclaw'
// }

// //Problems 1-3 use everything above, problems 4-5 use the hogwarts object 

// let hogwarts = {
//   classes: [
//     { name: 'Transfiguration', instructor: 'McGonagall', type: 'core' },
//     { name: 'Charms', instructor: 'Flitwick', type: 'core' },
//     { name: 'Potions', instructor: 'Snape', type: 'core' },
//     { name: 'History of Magic', instructor: 'P. Binns', type: 'core' },
//     { name: 'Defence Against the Dark Arts', instructor: 'N/A', type: 'core' },
//     { name: 'Astronomy', instructor: 'P. Sinistra', type: 'core' },
//     { name: 'Herbology', instructor: 'Sprout', type: 'core' },
//     { name: 'Arithmancy', instructor: 'P. Vector', type: 'elective' },
//     { name: 'Muggle Studies', instructor: 'P. Burbage', type: 'elective' },
//     { name: 'Divination', instructor: 'P. Trelawney', type: 'elective' },
//     { name: 'Study of Ancient Runes', instructor: 'P. Babbling', type: 'elective' },
//     { name: 'Care of Magical Creatures', instructor: 'Hagrid', type: 'elective' }
//   ],
//   rooms: ['Great Hall', 'Kitchens', 'Ravenclaw House', 'Slytherin House', 'Gryffindor House', 'Hufflepuff House', 'Instructor quarters', 'Headmasters Office', 'Hospital Wing', 'Chamber of Secrets', 'Greenhouses', 'Astronomy Tower'],
//   populations: {
//     students: 280,
//     professors: 15,
//     ghosts: 22,
//     'house elves': 100,
//   },
//   founders: ['Godrick Gryffindor', 'Helga Hufflepuff', 'Rowena  Ravenclaw', 'Salazar Slytherin'],
//   currentHeadmaster: {
//     name: 'Albus Percival Wulfric Brian Dumbledore',
//     age: 115,
//     alive: true,
//     wand: '15 inch Elder Thestral tail hair core',
//     gender: 'male',
//     'eye color': 'Blue',
//     family: [
//       { father: 'Percival', alive: false },
//       { mother: 'Kendra', alive: false },
//       { sister: 'Ariana', alive: false },
//       { brother: 'Aberforth', alive: true }
//     ]
//   }
// }



// //Problem 1.1
// // Create a function where you can put the name of a house head
// // and get back the student objects that in that house




// //Problem 1.2
// //Can you make the array send back only the names of the students?





// // Problem 2.1
// //How many house points have been added to the house cups overall?



// //Problem 2.2
// //How many house points have the Ravenclaw folks added to their cup?




// // Problem 3.1
// //For all students excpet the Slytherins, add a property called 'currentlyAttending' with a value of true. For Slytherins, add make it false



// //Problem 3.2
// //Console log the class that each house head is teaching



// // Problem 3.3
// //Check to see if any students are missing from class


// // Problem 5.1
// //Dumbledore just defeated Grindelwald and obtained the elder wand! Create an array of all his wands



// //Problem 5.2
// //Which one of Dumbledore's family members are alive? RETURN JUST THE NAME, not an array of object



// //Problem 5.3
// //Which of them are dead? RETURN JUST THE NAMES, not an array of objects

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
