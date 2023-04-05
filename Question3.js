import "./styles.css";
import UserProfile from "./UserProfile.js";
// Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

// Data:

const userData = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

export default function App() {
  return (
    <div className="App">
      <UserProfile userData={userData} />
    </div>
  );
}

const UserProfile = (props) => {
    const {
      userData: { name, age, email }
    } = props;
    return (
      <>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <p>email:{email}</p>
      </>
    );
  };
  
  export default UserProfile;
  