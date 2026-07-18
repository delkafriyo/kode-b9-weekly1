function countN(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

countN(3);
