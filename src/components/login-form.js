import React from "react"
import SubmitButton from "./submit-button"




export default class LoginForm extends React.Component {
    render() {
        return(
        <div>
            <form>
                <h4>Log In</h4>
                <label>
                    Username: <input type="text" />
                </label>
                <label>
                    Password: <input type="text" />
                </label>
                <SubmitButton />
            </form>
        </div>
        );}}