const INITIAL_STATE = {
    layout: 'login',
    login: {
        email: '',
        emailValid: false,
        password: '',
        loading: false
    },
    register: {
        email: '',
        password: '',
        confirm_password: '',
        loading: false
    },
    forget_password_email: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
