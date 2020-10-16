import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); //필요할때 ref를 생성해서 멤버변수를 정의 (1)
  const onSubmit = (event) => {
    event.preventDefault(); //submit이 실행되면 브라우저가 재시작됨 => preventDefault로 방지
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // 초기화
    // inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef} //(2) 해당하는 리액트 컴포넌트에 ref 연결
        type="text"
        className="add-input"
        placeholder="add your Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
