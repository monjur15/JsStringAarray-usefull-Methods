const anthem = 'amar sonar bangla ami tomay vhalobashi';
const word = anthem.split(' ');
const withOutA = anthem.split('a');
// console.log(withOutA);


// slice
const smallSlice = anthem.slice(2, 14);
// console.log(smallSlice);

//subString
const anotherPart = anthem.substr(5, 12);
// console.log(anotherPart);

// su string (kind of slice)
const subStringAnotherPart = anthem.substring(11, 17);
// console.log(subStringAnotherPart);

// concatanation

const first = 'harry';
const second = 'poter';
// const fullName = first + second;
const fullName = first.concat(second).concat('Hello world');
// console.log(fullName);

// join

const letter = ['Bangladesh', 'Australia', 'USA', 'Canada', 'Japan', 'China'];
/* const allJoin = letter.join(' ');
const allJoin = letter.join(''); */
// const allJoin = letter.join(',');
const allJoin = letter.join(', ');
console.log(allJoin);