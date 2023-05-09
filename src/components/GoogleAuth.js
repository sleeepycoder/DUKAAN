import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
 import ENV from '../config.js'
import { Navigate } from 'react-router-dom';
const GoogleAuth = () => {


  return (
 
<GoogleOAuthProvider clientId={ENV.CLIENT_ID}><GoogleLogin
          onSuccess={credentialResponse => {
            const details =jwt_decode(credentialResponse.credential); 
              console.log(details.email);

if(details.email !=""){
    Navigate("/")
}

            //   console.log(credentialResponse);
          } }
          onError={() => {
              console.log('Login Failed');
          } }  />
          </GoogleOAuthProvider>
        
  )
}

export default GoogleAuth