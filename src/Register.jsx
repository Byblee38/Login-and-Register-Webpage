import React from 'react';
import './App.css';

function Register () {
    return (
        
        <div className='Body'>
            <div className='register-card'>
                <div className='incard'>
                <div className='card-container'>
                <img src='../public/Logopz.png' alt='Logopz'/>
                </div>
                <div className='title-container'>
                    <h1>Hai, Daftar Disini</h1>
                    <img src='../public/Handhai.png'/>
                </div>
                <div>
                    <h1 className='header-text-container'>
                        Silahkan daftarkan akun kamu ya
                    </h1>
                </div>
                <div className='all-container'>
                <div className='form-container'>
                    <form className='email-form'>
                        <label className="email-label" htmlFor="email">Masukan Email Anda</label>
                        <input className="email-input" type="email" id="email" name="email" placeholder='   Masukkan Email Anda'/>
                    </form>
                    <form className='username-form'>
                        <label className='username-label' htmlFor="username">Masukan Username Anda</label>
                        <input className="username-input" type="text" id="username" name="username" placeholder='   Masukkan Username Anda'/>
                    </form>
                    <form className='password-form'>
                        <label className="password-label" htmlFor="password">Masukan kata sandi kamu<a style ={{textDecoration: 'none', color: '#64C653'}}>Kata sandi kuat</a></label>
                        <input className="password-input" type="password" id="password" name="password" placeholder='   Masukan kata sandi kamu'/>
                    </form>
                    <form className='confirm-password-form'>
                        <label className="confirm-password-label" htmlFor="confirm-password">Konfirmasi kata sandi</label>
                        <input className="confirm-password-input" type="password" id="confirm-password" name="confirm-password" placeholder='   Masukan kata sandi kamu'/>
                    </form>
                </div>
                <div className='bag-2-register'>
                    <button className="login-button">Daftar Sekarang</button>
                      <p className="register-text">Sudah punya akun? <a style ={{textDecoration: 'none', color: '#169AD7'}} href='./Login'>Masuk Sekarang</a></p>
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
        </div>

    )    
    }
    
        
export default Register;