import React from "react";
import logo from "./logo.svg";
import userService from "./services/user";
import "./App.css";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const isComponentMounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await userService.getAll();
      if (isComponentMounted) {
        setUsers(response.data);
      }
    };

    fetchUser();
  }, []);

  const onChange = (event) => {
    event.persist();
    const target = event.target.value;
    setUsername(target);
  };
  const onSubmit = async (event) => {
    if (event) event.preventDefault();
    const input = { username };
    setUsername("");
    await userService.create(input);
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmit} noValidate>
          <div>
            username:{" "}
            <input
              type="text"
              name="username"
              onChange={onChange}
              value={username}
              required
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <p>Users:</p>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user._id} - {user.username}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
