import 'dart:async';

Future<int> sumStreamErr(Stream<int> strem) async {
  try {
    var sum = 0;
    await for (var value in strem) {
      sum += value;
      print(sum);
    }
    return sum;
  } catch (e) {
    print(e.toString());
    return -1;
  }
}

Stream<int> countStreamErr(int to) async* { // js의 generator와 비슷
  for (int i=1; i<= to; i++) {
    await Future.delayed(const Duration(milliseconds: 500));
    if (i == 5) {
      throw new Exception('International Error');
    } else {
      yield i;
    }
  }
}

Future<int> sumStream(Stream<int> strem) async {
  var sum = 0;
  await for (var value in strem) {
    sum += value;
    print(sum);
  }
  return sum;
}

Stream<int> countStream(int to) async* { // js의 generator와 비슷
  for (int i=1; i<= to; i++) {
    await Future.delayed(const Duration(milliseconds: 500));
    yield i;
  }
}

// StreamTransformer의 제네릭에서 첫번째 인수는 입력될 데이터타입, 두번째인수는 변경될 데이터타입
var transformer = new StreamTransformer<int, String>.fromHandlers(handleData: (value, sink) {
  sink.add('value: $value');
});

main() async {
  /**
   * transformer를 추가하는 방법
   */
  // var stream = countStream(10);
  // stream.transform(transformer).listen((value) {
  //   print(value);
  // });

  /**
   * stream을 listening하는 방법
   */
  // var stream = countStream(10);
  // stream.listen((value) {
  //   print('current : ${value.toString()}');
  // });
  
  /**
   * 일반
   */
  // var stream = countStream(10);
  // var sum = await sumStream(stream);
  // print('hello$sum');

  /**
   * 에러 처리
   */
  // var stream = countStreamErr(10);
  // var sum = await sumStreamErr(stream);
  // print('hello$sum');

  /**
   * Broadcast stream
   * -> 기본적으로 stream은 하나의 listening만 가능하지만, Broadcasting Strem은 multiple한 listening이 가능하다.
   */
  var stream = countStream(10);
  var bcStream = stream.asBroadcastStream();
  bcStream.listen((value) { // listening stream 1
    print('again $value');
  });
  var sum = await sumStream(bcStream); // listening stream 2
  print(sum);
}