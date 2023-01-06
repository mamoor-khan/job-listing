import { useState } from 'react'
import '../styles/Form.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [signInForm, setSignInForm] = useState({ userName: '', password: '' })

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
        <div className='form--group'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            name='userName'
            autoComplete='off'
            value={signInForm.userName}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className='form--group'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            name='password'
            autoComplete='off'
            value={signInForm.password}
            onChange={(e) =>
              setSignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
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
