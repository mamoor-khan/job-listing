import { useRef, useState } from 'react'
import '../styles/Form.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [signInForm, setSignInForm] = useState({ userName: '', password: '' })
  const username = useRef(null)
  const pwd = useRef(null)

  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    console.log(signInForm)
    navigate('/home')
    // return redirect('/home')
  }
  return (
    <div className='form--page'>
      <form method='POST' onSubmit={submitForm} autoComplete='off'>
        <h4>POC-4</h4>
        <div className='form--group'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            name='userName'
            readOnly
            ref={username}
            autoComplete='off'
            value={signInForm.userName}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            onFocus={() => {
              username.current.removeAttribute('readonly')
            }}
            onBlur={() => {
              username.current.addAttribute('readonly')
            }}
          />
        </div>
        <div className='form--group'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            name='password'
            readOnly
            ref={pwd}
            autoComplete='new-password'
            value={signInForm.password}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            onFocus={() => {
              pwd.current.removeAttribute('readonly')
            }}
            onBlur={() => {
              pwd.current.addAttribute('readonly')
            }}
          />
        </div>
        <div className='form--group'>
          <input type='submit' value='Login' />
        </div>
      </form>
    </div>
  )
}

export default Form
