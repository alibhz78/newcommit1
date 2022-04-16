import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
    <form className='foem-1' action="">
      <label className='label-form-signin' htmlFor="">ثبت نام</label>
      <input className='input-sabtnam' type="text" placeholder='نام کاربری' />
      <input className='input-sabtnam' type="text" placeholder='رمز ورود' />
      <input className='input-sabtnam' type="text" placeholder='تایید رمز ورود' />
      <button className='btn-form-signin'>ثبت نام</button>
      <Link className='link-form-signin' to={'/'}> رمز خود را فراموش کردید؟!!</Link>

    </form>
    </>
  )
}

export default Signup