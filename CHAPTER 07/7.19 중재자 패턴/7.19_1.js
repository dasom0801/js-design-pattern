// 특정 이벤트가 발생하면 수행될 동작을 지정하는 중재자 역할
const orgChart = {
  addNewEmployee() {
    // getEmployeeDetail이 사용자가 상호작용하는 뷰를 제공
    const employeeDetail = this.getEmployeeDetail();

    // 직원 정보 입력이 완료되면,
    // 중재자('orgchart' 객체)가 다음 행동을 결정
    employeeDetail.on('complete', employee => {
      const managerSelector = this.selectManger(employee);
      managerSelector.on('save', employee => {
        employee.save();
      })
    })
  },
  getEmployeeDetail() {
    // ...
  },
  selectManger(employee) {
    // ...
  }
}