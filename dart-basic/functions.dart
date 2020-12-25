int timesTwo(int x) {
  return x * 2;
}

int timesFour(int x) => timesTwo(timesTwo(x));

int runTwice(int x, Function f) {
  for (var i=0; i<2; i++) {
    x = f(x);
  }
  return x;
}