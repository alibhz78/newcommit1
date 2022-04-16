import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <form className='foem-1' action="">
      <label className='label-form-signin' htmlFor="">ورود</label>
      <input className='input-sabtnam' type="text" placeholder=' نام کاربری' />
      <input className='input-sabtnam' type="text" placeholder='رمز ورود' />
      <button className='btn-form-signin'>وارد شوید</button>
      <Link className='link-form-signin' to={'/'}> رمز خود را فراموش کردید؟!!</Link>

    </form>
    </>
  )
}

export default Signin