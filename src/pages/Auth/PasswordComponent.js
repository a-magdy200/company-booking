import React from 'react';
import { connect } from 'react-redux';
import {change_auth_layout, login_input_update, submit_login_password} from "../../redux/actions/loginActions";
import {Button} from "../../shared";
const PasswordComponent = ({ updateInput, staySigned, email, password, submitPassword, changeLayout, loading }) => {

    if (loading) return <div className={'loading'}>Loading...</div>;

    return <div>
        <p onClick={ () => changeLayout('login') } className={'back-to-email'}><i className={'fa fa-arrow-left'} /> { email }</p>
        <form>
            <h2 className="text-left">enter password</h2>
            <input
                type={'password'}
                className={'form-control'}
                name={'password'}
                value={password}
                placeholder={'********'}
                onChange={updateInput}/>
            <div className={'checkbox-container'}>
                <input
                    type={'checkbox'}
                    name={'staySigned'}
                    checked={staySigned}
                    value={'staySigned'}
                    id={'staySignedInCheckbox'}
                    onChange={updateInput} />
                <label htmlFor={'staySignedInCheckbox'} className={'control-label'}>Stay signed In</label>
            </div>
            <p className="dummy-link">Forgotten your password?</p>
            <span className={'button-container'}>
                <Button
                    type={'primary btn-flat'}
                    text={'sign in'}
                    handler={ submitPassword } />
            </span>
        </form>
    </div>
};
const mapStateToProps = ({ login }) => {
    const { staySigned, password, email } = login.login;
    return { staySigned, password, email, loading: login.loading };
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch(login_input_update(event)),
        changeLayout: layout => dispatch(change_auth_layout(layout)),
        submitPassword: event => dispatch(submit_login_password(event))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PasswordComponent);
