import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef(); //필요할때 ref를 생성해서 멤버변수를 정의 (1)
  onSubmit = (event) => {
    event.preventDefault(); //submit이 실행되면 브라우저가 재시작됨 => preventDefault로 방지
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // 초기화
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  //랜더링
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef} //(2) 해당하는 리액트 컴포넌트에 ref 연결
          type="text"
          className="add-input"
          placeholder="add your Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
