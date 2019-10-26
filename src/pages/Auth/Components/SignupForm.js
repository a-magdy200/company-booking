import React from "react";
import {Button, InputComponent} from "../../../shared";
import {renderErrors} from "../../../shared/functions";

const SignupForm = (props) => {
    const {
        signUpHandler,
        first_name,
        last_name,
        onChange,
        password,
        confirm_password,
        email,
        errors
    } = props;
    return (
        <div className={"form-container"}>
            <h2>Sign up</h2>
            { renderErrors(errors) }
            <form action="">
                <InputComponent
                    onChange={onChange}
                    label={"first name"}
                    name={"first_name"}
                    type={"text"}
                    placeholder={"John"}
                    value={first_name}
                />
                <InputComponent
                    onChange={onChange}
                    label={"last name"}
                    name={"last_name"}
                    type={"text"}
                    placeholder={"Doe"}
                    value={last_name}
                />
                <InputComponent
                    onChange={onChange}
                    label={"email"}
                    name={"signup_email"}
                    type={"email"}
                    placeholder={"example@domain.com"}
                    value={email}
                />
                <InputComponent
                    onChange={onChange}
                    label={"password"}
                    name={"signup_password"}
                    type={"password"}
                    placeholder={"********"}
                    value={password}
                />
                <InputComponent
                    onChange={onChange}
                    label={"confirm password"}
                    name={"signup_confirm_password"}
                    type={"password"}
                    placeholder={"********"}
                    value={confirm_password}
                />
                <Button text={"signup"} handler={signUpHandler}/>
            </form>
        </div>
    )
};
export default SignupForm;
