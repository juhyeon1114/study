/**
 * factory키워드를 사용해서 생성자를 구현하면, 해당클래스의 인스턴스를 항상 새로 만들지 않아도 됨
 * js의 prototype과 유사할까...?
 */
class Logger {
  final String name;
  bool mute = false;

  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) => _cache.putIfAbsent(name, () => Logger._internal(name));

  factory Logger.fromJson(Map<String, Object> json) => Logger(json['name'].toString());

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}

void main() {
  var logger = Logger('UI');
  logger.log('Button clicked');

  var logMap = {'name': 'UI'};
  var loggerJson = Logger.fromJson(logMap);
  print(loggerJson);
}

