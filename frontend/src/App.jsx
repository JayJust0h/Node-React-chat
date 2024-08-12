
import { useState } from "react"; // Import useState from react

import "./App.css"; // Import the App.css file

import AuthPage from "./AuthPage"; // Import the AuthPage component
import ChatsPage from "./ChatsPage"; // Import the ChatsPage component

function App() {
  // useState is a hook that allows you to add state to a functional component
  const [user, setUser] = useState(undefined);

  // If there is no user, return the AuthPage component
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    // If there is a user, return the ChatsPage component
    return <ChatsPage user={user} />;
  }
}

export default App; // Export the App component