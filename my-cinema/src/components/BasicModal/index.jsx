import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import './basicModal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({isOpen, setIsOpen}) {
  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const [firstName, setFirstName] = useState('');

  const [password, setPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');

  const [email, setEmail] = useState('');

  const [lastName, setLastName] = useState('');

  const [phone, setPhone] = useState('');

  const [modalState, setModalState] = useState(true);

  const [errorEmail, setIsEmailError] = useState(false);

  const [isEqualPasswords, setIsEqualPasswords] = useState(true);

  const [passwordShown, setPasswordShown] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  }

  const handleSignUp = () => {
    setModalState(false);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone('+' + +e.target.value);
  }

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;

    return re.test(email);
  };

  const handleSubmit = () => {
    console.log('email', email);
    console.log('firsName', firstName)
    console.log('lastName', lastName);
    console.log('phone', phone);

    if(password === repeatPassword) {
      setIsEqualPasswords(true);
    } else {
      setIsEqualPasswords(false);
    }

    if(email !== isValidEmail) {
      setIsEmailError(true)
    }
  }

  const handleShowPassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalState
        ?
        <Box className="container" sx={style}>
        <Typography className="modal-title" variant="h6" component="h2">
          Sign In
        </Typography>
        <TextField id="standard-basic" label="Email" type='email' variant="standard" value={email} onChange={handleEmailChange}/>
        <TextField label="Password" type={passwordShown ? "text" : "password"} variant="standard"  value={password} onChange={handleChangePassword}/>
        <RemoveRedEyeIcon className='showPswSgnIn' onClick={handleShowPassword}/>
        
        <Button disabled={(!email, !password)} className='sign-in-btn' href="#text-buttons">Sign In</Button>
        <div>
          Don't you have an account? <Button onClick={handleSignUp}>Create one</Button>  
        </div>
      </Box>
      :
      <Box className="container" sx={style}>
        <Typography className="modal-title-sign-up" variant="h6" component="h2">
          Sign Up</Typography>
        <TextField id="standard-basic" type='email' label="email" variant="standard" value={email} onChange={handleEmailChange}/>
        {errorEmail && <div className='error-message'>Email is not valid</div>}
        <TextField id="standard-basic" label="First name" variant="standard" value={firstName} onChange={handleFirstNameChange}/>
        <TextField id="standard-basic" label="Last name" variant="standard" value={lastName} onChange={handleLastNameChange}/>
        <TextField id="standard-basic" type="tel" label="phone" variant="standard" value={phone} onChange={handlePhoneChange}/>
       
        <TextField label="Password" type={passwordShown ? "text" : "password"} variant="standard" value={password} onChange={handleChangePassword}/>
        <RemoveRedEyeIcon className='showPswSgnUp' onClick={handleShowPassword}/>
  
        <TextField label="Repeat password" type={passwordShown ? "text" : "password"} variant="standard" value={repeatPassword} onChange={handleRepeatPassword} />
        <RemoveRedEyeIcon className='showPswSgnUpRep' onClick={handleShowPassword}/>

        {!isEqualPasswords && <div className='error-message'>Passwords are not equal</div>}

        <Button disabled={(!email, !firstName, !lastName, !phone, !password)} onClick={handleSubmit} className='sign-in-btn' href="#text-buttons">Sign Up</Button>
      </Box>
      }
      </Modal>
    </div>
  );
}
