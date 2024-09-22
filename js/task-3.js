const profile = {
  username: 'Jacob',
  playTime: 300,

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    const updatedTime = hours + this.playTime;
    this.playTime = updatedTime;
  },
};

// Перевірка роботи функцій
console.log(getInfo(profile)); // "Jacob has 300 active hours!"

changeUsername(profile, 'Marco');
console.log(getInfo(profile)); // "Marco has 300 active hours!"

updatePlayTime(profile, 20);
console.log(getInfo(profile)); // "Marco has 320 active hours!"
