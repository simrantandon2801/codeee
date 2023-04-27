import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import axios from 'axios'
import {Image} from 'mui-image';
function Contact  ()  {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
		  const { data: res } = await axios.post('http://localhost:5000/send-email', { name,
		  email,
		  message,phone,message}).then(response => {
      // Handle response from the backend
      console.log(response);
    });
		const data = await res;
		console.log(data);
	  }
    
	  catch(error) { 
		console.error(error);
		  
	  }
    // Backend code to send email
  }

	return (<>
 
	<Grid container spacing={2}>
  <Grid item lg={12}>
    <Typography sx={{margin:'auto',fontWeight:'600',marginTop:'20px',marginBottom:'20px',fontSize:'24px'}}>Contact Us</Typography>
  </Grid>
  <Grid item xs={12} lg={6}>
    <Image src="https://drive.google.com/uc?export=view&id=16SKLwmqZZkbgD_eoNfBbHuHLlw2AJjla" width='100%' height='82%' style={{borderRadius:"20px"}} />  
  </Grid>
  <Grid item xs={12} lg={6}>
    <form onSubmit={handleSubmit}>
      <Grid item lg={10}>
        <Typography sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Name</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="Email"
        type="email"
        defaultValue="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Email</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Phone Number</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="Phone"
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Message</Typography>
     <TextField
  required
  fullWidth
  variant="outlined"
  label="Message"
  multiline
  rows={4}
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  sx={{ mb: 2 }}
/>
</Grid>
<Button
              type="submit"
             
              variant="contained"
			sx={{
				mt: 0, mb: 0, background: '#3A81F3',
				borderRadius: '8px',textTransform:'none',width:'250px',height:'50px',fontSize:'18px'}}
			>
		Submit
			</Button>	
    </form>
  </Grid>
</Grid>

          
		</>
  );
}

export default Contact;


