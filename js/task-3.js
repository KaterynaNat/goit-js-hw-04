const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Перевірка роботи функцій
console.log(getInfo(profile)); // "Jacob has 300 active hours!"

changeUsername(profile, 'Marco');
console.log(getInfo(profile)); // "Marco has 300 active hours!"

updatePlayTime(profile, 20);
console.log(getInfo(profile)); // "Marco has 320 active hours!"
