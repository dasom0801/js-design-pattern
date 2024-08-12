// 자동차 정보 조회, 구매, 시승 신청의 명령을 실행하는 커맨드 객체
const CarManager = {
  // 정보 조회
  requestInfo(model, id) {
    return `The information for ${model} with ID ${id} is foobar`;
  },
  // 자동차 구매
  buyVehicle(model, id) {
    return `You have successfully purchased Item ${id}, a ${model}`;
  },
  // 시승 신청
  arrangeViewing(model, id) {
    return `You have booked a viewing of ${model} (${id})`
  },
  execute(name) {

  }
}

CarManager.execute = function (name) {
  return (CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1)))
}

console.log(CarManager.execute(
  'arrangeViewing', 'Ferrari', '14523'
));
console.log(CarManager.execute(
  'requestInfo', 'Ford Mondeo', '54323'
));
console.log(CarManager.execute(
  'buyVehicle', 'Ford Escort', '34232'
));