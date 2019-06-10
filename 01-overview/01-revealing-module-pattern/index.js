const revealingModule = function() {
  const firstName = 'Lemmy';
  const lastName = 'Killmister';

  const showFirstName = () => {
    console.log('Name: ', firstName);
  };
  const showLastName = () => {
    console.log('Surname: ', lastName);
  };

  return {
    showFirstName,
    showLastName,
  };
}();

console.log(global.showFirstName); // undefined
console.log(global.lastName); // undefined
console.log(revealingModule); // { showFirstName: [Function: showFirstName],
                              //   showLastName: [Function: showLastName] }




revealingModule.showFirstName(); // Name: Lemmy
revealingModule.showLastName(); // Surname: Killmister
