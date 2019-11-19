import React from 'react';
import { connect } from 'react-redux';
import {change_auth_layout, register_input_update, submit_register_form} from "../../../redux/actions/loginActions";
import {Button} from "../../../shared";

const RegisterComponent = ({ updateInput, email, password, confirm_password, loading, submitForm, changeLayout }) => {

    if (loading) return <div className={'loading'}>Loading...</div>;

    return <div>
        <h2 className="text-left">
            <span onClick={ () => changeLayout('login') } className={'back-to-email'}><i className={'fa fa-arrow-left'} /></span>
            create account</h2>
        <form>
            <input
                type={'email'}
                name={'email'}
                onChange={updateInput}
                className={'form-control'}
                placeholder={'example@domain.com'}
                value={email} />
            <input
                type={'password'}
                name={'password'}
                onChange={updateInput}
                className={'form-control'}
                placeholder={'********'}
                value={ password } />
            <input
                type={'password'}
                name={'confirm_password'}
                onChange={updateInput}
                className={'form-control'}
                placeholder={'********'}
                value={ confirm_password } />
            <span className={'button-container'}>
                <Button
                    type={'primary btn-flat'}
                    text={'next'}
                    handler={ submitForm } />
            </span>
        </form>
        <div className="notes">
            <p>Lorem ipsum dolor.</p>
            <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>At et similique veritatis voluptas!</li>
                <li>Beatae impedit ipsam quo veniam?</li>
            </ul>
        </div>
    </div>;
};

const mapStateToProps = ({ login }) => {
    const { email, password, confirm_password } = login.register;
    return { email, password, confirm_password, loading: login.loading };
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch(register_input_update(event)),
        submitForm: event => dispatch(submit_register_form(event)),
        changeLayout: layout => dispatch(change_auth_layout(layout)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
