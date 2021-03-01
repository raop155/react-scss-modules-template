import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import TextArea from "components/TextArea/TextArea"
import Select from 'components/Select/Select'
import styles from "./Login.module.scss"

const Login = () => {
  const history = useHistory()
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("user", user);
    console.log("password", password);
    console.log("option", option);
    console.log("message", message);
    history.push("/queue")
  }

  return (
    <main className={styles.component}>
      <div className="container">
        <div className={styles.content}>
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <Input type="text" inputMode="text" className="input" placeholder="User..." value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="form__field">
              <Input type="password" className="input" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form__field">
              <Select className="select" value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="" disabled>Pick an option...</option>
                <option value="first">First</option>
                <option value="second">Second</option>
              </Select>
            </div>
            <div className="form__field">
              <TextArea placeholder="Send me a message..." className="input" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="form__field">
              <Button type="submit" className="button secondary" >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;