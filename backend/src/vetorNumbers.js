function vetorNumbers() {
  const num = [];
  for (let i = 0; i < 10; i++) {
      num.push(Math.floor(Math.random() * 100) + 1);
  }
  return num;
}

module.exports = { vetorNumbers };
