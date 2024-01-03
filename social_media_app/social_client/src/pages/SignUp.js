import React, {useState} from 'react'
import { connect } from 'react-redux'
import {signup} from '../actions/authentication/signupActions';

const Signup = ({isLoading, isSignedup, msg, status, signup}) => {
    const [formdata, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const {first_name, last_name, email, password} = formdata
    const onChange = e => setFormData({...formdata, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        signup(first_name, last_name, email, password)
    }
    return (
    <div>
        <h1> Please SignUp! </h1>
        <form onSubmit = {e => onSubmit(e)}>
            <div>
                <input type='text' placeholder='First Name' name='first_name'
                value={first_name} onChange={e=>onChange(e)}
                required/>
            </div>
            <div>
                <input type='text' placeholder='Last Name' name='last_name'
                value={last_name} onChange={e=>onChange(e)}
                required/>
            </div>
            <div>
                <input type='text' placeholder='Email' name='email'
                value={email} onChange={e=>onChange(e)}
                required/>
            </div>
            <div>
                <input type='text' placeholder='Password' name='password'
                value={password} onChange={e=>onChange(e)}
                required/>
            </div>
            <button>Signup</button>
        </form>
    </div>
    );
}
const mapStateToProps = state => {
    return {
        isLoading: state.signupReducer.isLoading,
        isSignedup: state.signupReducer.isSignedup,
        msg: state.errorReducer.msg,
        status: state.errorReducer.status
    }
}
const mapDispatchToProps = {
    signup: signup
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)