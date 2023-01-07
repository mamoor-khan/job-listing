import { useRef, useState } from 'react'
import '../styles/Form.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [signInForm, setSignInForm] = useState({ nklvdh: '', cvfsdf: '' })
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
      <div className='form'>
        <h4>POC-6</h4>
        <div className='form--group'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            name='nklvdh'
            readOnly
            ref={username}
            autoComplete='off'
            value={signInForm.nklvdh}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            onFocus={() => {
              username.current.removeAttribute('readonly')
            }}
            onBlur={() => {
              username.current.setAttribute('readonly', true)
            }}
          />
        </div>
        <div className='form--group'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            name='cvfsdf'
            readOnly
            ref={pwd}
            autoComplete='new-password'
            value={signInForm.cvfsdf}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            onFocus={() => {
              pwd.current.removeAttribute('readonly')
            }}
            onBlur={() => {
              pwd.current.setAttribute('readonly', true)
            }}
          />
        </div>
        <button onClick={submitForm}>Login</button>
        <div className='form--group'>
          <input type='submit' value='Login' />
        </div>
      </div>
    </div>
  )
}

export default Form
