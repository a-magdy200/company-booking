import React from 'react';
import {Button, InputComponent} from "../../../shared";
import { renderErrors } from "../../../shared/functions";

const LoginForm = (props) => {
    const {errors, loginHandler, email, password, onChange} = props;
    return (
        <div className={"form-container"}>
            <h2>Login</h2>
            { renderErrors(errors) }
            <form action="">
                <InputComponent
                    value={email}
                    label={"email"}
                    name={"login_email"}
                    type={"email"}
                    placeholder={"example@domain.com"}
                    onChange={onChange}/>
                <InputComponent
                    value={password}
                    label={"password"}
                    name={"login_password"}
                    type={"password"}
                    placeholder={"********"}
                    onChange={onChange}/>
                <Button
                    text={"login"}
                    handler={loginHandler}/>
            </form>
        </div>
    )
};
export default LoginForm;
