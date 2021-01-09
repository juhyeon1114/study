import './functions.dart';
import './class.dart';

String name = 'Voyager I';
int year = 1977;
double antennaDiameter = 3.7;
List<String> flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Map image = {
  'tags' : ['saturn'],
  'url': '//path/to/saturn.jpg'
};
  
void main() {
  int result = timesTwo(2);
  print('Result : ${result}');

  Car newCar = Car(3, 'red');
  print(newCar.color);
}