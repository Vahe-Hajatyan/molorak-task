// class molorak
class Molorak {
  constructor() {
    this.continents = [];
  }
  // avelacnum enq moloraki mech continent@
  addContinent(continent) {
    this.continents.push(continent);
  }
}
//class Continent
class Continent {
  constructor(name) {
    this.name = name;
    this.countries = [];
  }
  // avelacnum enq contineti mech country-in
  addCountry(country) {
    this.countries.push(country);
  }
}
// class Country
class Country {
  constructor(name, martQanak) {
    this.name = name;
    this.martQanak = martQanak;
  }
}

// sarqum enq molorak@
const molorak = new Molorak();

// sarqum enq continenty
const continent1 = new Continent("continent-1");
const continent2 = new Continent("continent-2");

// sarqum enq qaxaqner@
const country_1_1 = new Country("country_1_1", generationMartuQanak());
const country_1_2 = new Country("country_1_2", generationMartuQanak());
const country_2_1 = new Country("country_2_1", generationMartuQanak());
const country_2_2 = new Country("country_2_2", generationMartuQanak());

// avelacnum enq qaxaqner@ continenti mech
continent1.addCountry(country_1_1);
continent1.addCountry(country_1_2);
continent2.addCountry(country_2_1);
continent2.addCountry(country_2_2);

// avelacnum enq moloraki mech continentner@
molorak.addContinent(continent1);
molorak.addContinent(continent2);

// genreacnum enq martkanc qanak@
function generationMartuQanak() {
  return Math.floor(Math.random() * 5) + 5;
}

// import enq anum fs module@
const FS = require("fs");

//sarqum enq function vor@ poxuma orer@
function changeTimeAndData(or) {
  const timeOfDate = or % 2 === 0 ? "gisher" : "aravot";
  const timeOfDateForContinent2 = or % 2 === 0 ? "aravot" : "gisher";
  const continentIndexOfActive = Math.floor(or / 2) % 2;
  const activeContinent = molorak.continents[continentIndexOfActive];
  const NotActiveContinent = molorak.continents[1 - continentIndexOfActive];

  //sarqum enq dynamic string
  const eventDate =
    `or ${or + 1}: ${timeOfDate} a ${activeContinent.name}, ,` +
    `${timeOfDateForContinent2} a ${NotActiveContinent.name}`;

  console.log(eventDate);

  // texadrum enq file-i mech
  FS.appendFileSync("data.txt", eventDate + "\n");
}

// oreri hamar cikl enq sarqum
for (let or = 0; or < 10; ++or) {
  changeTimeAndData(or);
}
//prcanq
