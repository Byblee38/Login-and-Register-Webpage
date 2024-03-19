import React from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='Body'>
      <div className='login-card'>
        <div className='incard'>
        <div className='card-container'>
        <img src='../public/Logopz.png' alt='Logopz'/>
        </div>
        <div className='title-container'>
          <h1>Hai, Masuk Disini</h1>
          <img src='../public/Handhai.png'/>
        </div>
        <div>
          <h1 className='header-text-container'>
            Silahkan masuk menggunakan akun kamu ya
          </h1>
        </div>
        <div className='form-container'>
          <form className='email-form'>
            <label className="email-label" htmlFor="email">Email Atau Username Anda</label>
            <input className="email-input" type="email" id="email" name="email" placeholder='   Masukkan Email Anda'/>
          </form>
          <form className='password-form'>
            <label className="password-label" htmlFor="password">Password <a style ={{textDecoration: 'none', color: '#169AD7', cursor: 'pointer'}}>Lupa kata sandi?</a></label>
            <input className="password-input" type="password" id="password" name="password" placeholder='   Masukan kata sandi kamu'/>
          </form>
        </div>
        <div className='bag-2'>
        <label className="remember-label">
            <input type="checkbox" name="remember" id="remember" className='remember-box' />
            Ingat Saya
          </label>  
          <button className="login-button">Masuk Sekarang</button>
          <p className="register-text">Tidak punya akun? <a style ={{textDecoration: 'none', color: '#169AD7'}} href='./Register'>Daftar Sekarang</a></p>
        <div className='or-line'>
        <hr className='line'/>
        <div className='or'><p>atau</p></div>
        <hr className='line' />
        </div>
        <div className='social-media' alt='social-media'>
          <img src='../public/Facebook.png' style={{cursor: 'pointer'}} alt='Facebook'/>
          <img src='../public/Twitter.png' style={{cursor: 'pointer'}}  alt='Twitter' />
          <img src='../public/Google.png' style={{cursor: 'pointer'}} alt='Google'/>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
