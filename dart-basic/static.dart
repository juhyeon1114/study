/**
 * static 은 instance에 귀속되지 않고, class에 통째로 귀속된다.
 */

void main() {
  Employee person1 = Employee('kim');
  Employee person2 = Employee('ju');

  // person1.building = 'hihi'; // 이렇게 building값을 변경할 수 없음. 왜냐하면, building은 static property이기 때문
  Employee.building = 'hihi';

  person1.printNameAndBuilding();
  person2.printNameAndBuilding();
}

class Employee {
  static String building;
  String name;

  Employee(this.name);

  void printNameAndBuilding() {
    print('제 이름은 ${this.name}입니다. $building 건물에서 근무하고 있습니다.');
  }
}