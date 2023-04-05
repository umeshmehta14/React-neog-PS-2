import "./styles.css";
import Todo from "./Todo.js";
// Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.

// Data:

const todoItems = [
  {
    id: 1,
    title: "Complete practice set",
    description: "Practice set 1 of React",
    isCompleted: true
  },
  {
    id: 2,
    title: "Attend revision session",
    description: "Revision session of React",
    isCompleted: false
  },
  {
    id: 3,
    title: "Watch recording",
    description: "Live session recording of React",
    isCompleted: true
  },
  {
    id: 4,
    title: "Attend DSH",
    description: "Doubt Solving Hours of React",
    isCompleted: false
  },
  {
    id: 5,
    title: "Complete practice set",
    description: "Practice set 2 of React",
    isCompleted: false
  }
];

export default function App() {
  return (
    <div className="App">
      <Todo todoItems={todoItems} />
    </div>
  );
}


const Todo = (props) => {
    const { todoItems } = props;
    return (
      <>
        <div>
          {todoItems.map(({ title, description, isCompleted }) => {
            return (
              <>
                <div style={{ color: isCompleted ? "green" : "red" }}>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <hr />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  
  export default Todo;
  