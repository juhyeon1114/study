class Car {
  // properties
  int seats;
  String color;

  // constructor
  Car(int sts, [String clr = 'black']) { // 대괄호로 감싼 부분은 선택사항이됨
    this.seats = sts;
    this.color = clr;
  }

  //methods
  Map getInfo() {
    return {
      'seats' : this.seats,
      'color': this.color
    };
  }

}