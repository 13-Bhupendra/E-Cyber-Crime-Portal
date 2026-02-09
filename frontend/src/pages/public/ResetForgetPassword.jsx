import React, { useState } from 'react'
import Footer from '../../components/Footer'
import LOGO from "../../assets/images/logo.png"
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ResetForgetPassword = () => {
  const [email , setEmail] = useState("")
  const [isOtpSending , setIsOtpSending] = useState(false)
  const [error , setError] = useState("")

  const navigate = useNavigate()
  const BASE_URL = import.meta.env.VITE_BACKEND_SERVER_URL

  const handleResetForgetPasswordReq = async()=>{
      try {
          setIsOtpSending(true)
          const res = await axios.post(`${BASE_URL}/api/reset/forgetPassword` , {email : email})
       
          localStorage.setItem("email" , email );
       
          if(res.data.status === true){
            alert(res.data.message)
            navigate("/auth/otp/verify/create/newPassword")
          }

          setEmail("")
      } catch (error) {
        if(error.response?.data?.message){
          setError(error.response.data.message)
          setEmail("");
        }
      }finally{
        setIsOtpSending(false)
      }
  }

  return (
 <div className='mainSection' >
      <div className="d-flex justify-content-center">
        <Navbar PageName="Reset Forget Password" />

        <div className="signUpFormContainer mt-5 mb-5">
          <div className="formHeader p-3">
            <div className="headerLogo me-2">
              <img src={LOGO} alt="" />
            </div>
            <div className="headerText">
              <h1 className="fw-bold" style={{ color: "lightcyan" }}>
                Password Reset
              </h1>
              <p style={{ color: "whitesmoke" }}>
                Welcome back! Sign in to continue
              </p>
            </div>
          </div>

        {isOtpSending ? 
        //loading
        <div className="loader">
              <div className="loading d-flex column justify-content-center mt-5 pt-5">
                <div className="honeycomb">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
            <p className='text-center mt-5 fs-3 fw-bold' style={{color : "#1667b2"}}>OTP Sending.....</p>
        </div>
          : 
           //Form 
          <div className="form">
            <section className="mt-5 ">
              <label htmlFor="">Email</label> <br />
              <input
                type="email"
                className="input mb-2"
                placeholder="Enter your Email "
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
            </section>


            <button className="registerBtn mt-4 mb-2 " onClick={handleResetForgetPasswordReq}>Submit</button>
             {<p className='text-center' style={{color : "red" , fontSize:"12px"}}>{error}</p>}

          </div>
          } 

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ResetForgetPassword
