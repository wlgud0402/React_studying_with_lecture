import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  //증가
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      // 선택된 id와 실제 id가 같은경우 즉 선택한 객체에만 count애 +1을 적용하고 나머지는 그대로 사용하던 값으로 내버려둔다.
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  //감소
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  //삭제
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  //추가
  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };
  //리셋
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length} //카운트가 0 이상인것만 계산
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
