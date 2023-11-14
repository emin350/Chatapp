import "./App.css";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} exact />
    </div>
  );
}

export default App;