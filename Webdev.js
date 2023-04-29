import React, { useState } from 'react';
import { Grid, TextField,  Typography,Paper } from '@mui/material';
import axios from 'axios'

import {useMediaQuery} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Link } from 'react-router-dom';
// import {Button} from '@mui/material';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
function Webdev  ()  {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const mobile = useMediaQuery('(max-width:600px)');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(value)) {
        return prevSelectedOptions.filter((option) => option !== value);
      } else {
        return [...prevSelectedOptions, value];
      }
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
		  const { data: res } = await axios.post('http://localhost:5000/send-email', { name,
		  email,selectedOptions,
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
  return (
    <Box>
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, color: '#1F2937',marginLeft:mobile?'0px':'50px' }}>
            Codalent
          </Typography>
          <Button component={Link} to="/Ourwork" sx={{ color: '#6B7280' }}>
  Our work
</Button>

<Button component={Link} to="/blog" sx={{ color: '#6B7280' }}>
  Blog
</Button>

<Button component={Link} to="/careers" sx={{ color: '#6B7280' }}>
  Careers
</Button>

<Button component={Link} to="/Hireus" sx={{ color: '#ffffff', bgcolor: '#E64B18', borderRadius: '8px', width: '80px', height: '35px' }}>
  Hire us
</Button>

        </Toolbar>
      </AppBar>
      <Grid container lg={10} xs={12} sx={{margin:mobile?'auto':' 80px auto'}}>
        <Grid container lg={6} xs={11} sx={{margin:mobile?'auto':''}}>
<Grid item lg={10} xs={11} sx={{margin:'auto',marginTop:mobile?'50px':''}}>
    <Grid item lg={6}>
    <Typography sx={{textAlign:'left',color:'#E64B18'}}>SERVICES</Typography>
    </Grid>
  </Grid>
<Grid container lg={12} xs={12} >
  <Grid item lg={10}  xs={11} sx={{margin:'auto'}}>
  <Typography sx={{textAlign:'Left',fontSize:'28px',color:'#1F2937'}}>Web Development</Typography>
</Grid>
</Grid>
<Grid container lg={10} xs={11} sx={{marginBottom:"30px",margin:'auto'}} >
<Grid item lg={10} xs={10} sx={{margin:'auto',marginLeft:'0px'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>Get an experienced team of frontend for your new project.</Typography>
</Grid>
</Grid>


<Grid container spacing={2} lg={10.8}  sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11}>
					  <Typography >Full Stack Web Development</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11}>
					  <Typography >Best practices andd standards</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11} xs={10}>
					  <Typography >Modern tehnologies: React,GatsBy & Next.js</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11} xs={10}>
					  <Typography >Page speed and core web vitals optimization</Typography>
					 
					  </Grid>
					  </Grid>
            <Grid container spacing={2} lg={10.8} sx={{margin:'auto'}}>	
						<Grid item md={1}  lg={1} sx={{display:'flex',justifyContent:'center'}} >
					  <CheckCircleOutlineRoundedIcon sx={{color:'#E64B18',backgroundColor:'white',borderRadius:"20px"}} />
						  </Grid>
					<Grid item lg={11}>
					  <Typography >Headless CMs's</Typography>
					 
					  </Grid>
					  </Grid>

            {mobile?'':<Grid container lg={10} xs={10} sx={{margin:'auto',marginTop:'30px'}} >
<Grid item lg={10} sx={{margin:'auto',marginLeft:'0px'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>FASTEST GROWING ORGANIZATION TRUST US</Typography>
</Grid>
</Grid>}
            </Grid>
            <Grid container lg={6} xs={11} sx={{margin:'auto',marginTop:mobile?'30px':''}}>
              <Paper sx={{width:mobile?'100% ':'100%',height:'105%'}}>
              <form onSubmit={handleSubmit}>
      <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
        <Typography sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',marginTop:'25px'}}> Name</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="Name"
        type="name"
        defaultValue="Enter your name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto'}}>
      <Typography  sx={{textAlign:'left',fontSize:'18px',fontWeight:'400',}}> Email</Typography>
      <TextField
        required
        fullWidth
        variant="outlined"
        label="email"
        placeholder="Enter your email"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto',marginTop:'20px'}}>
      <FormLabel component="legend" sx={{color:'#000000'}}>How can we support you?</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={selectedOptions.includes('web-dev')} onChange={handleChange} value="web-dev" />}
          label="Web Development"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedOptions.includes('seo')} onChange={handleChange} value="seo" />}
          label="SEO"
        />
        </FormGroup>
        <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={selectedOptions.includes('web-dev')} onChange={handleChange} value="web-dev" />}
          label="Conversion rate optimization"
        />
        <FormControlLabel
          control={<Checkbox checked={selectedOptions.includes('seo')} onChange={handleChange} value="seo" />}
          label="UI/UX Design"
        />
        </FormGroup>
      </Grid>
      <Grid item lg={10} xs={10} sx={{margin:'auto',marginTop:'20px'}}>
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
<Grid item lg={10} xs={10} sx={{margin:'auto',textAlign:'center'}}>
<Button
              type="submit"
             
              variant="contained"
			sx={{
				mt: 0, mb: 5, background: '#E64B18',
				borderRadius: '8px',textTransform:'none',width:'250px',height:'50px',fontSize:'18px'}}
			>
		Submit
			</Button>	
      </Grid>
    </form>
              </Paper>
            </Grid>
            </Grid>
     </Box>
  )
}

export default Webdev
