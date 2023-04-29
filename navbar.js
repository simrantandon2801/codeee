import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Paper } from "@mui/material";
import { Link } from 'react-router-dom';
import {useMediaQuery} from "@mui/material";
import {Grid} from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Grow} from "@mui/material";
import {Image} from "mui-image";
import {Card, CardActionArea, CardMedia,CardContent} from "@mui/material"
import {Divider} from "@mui/material";




export default function App() {
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)  and (orientation: landscape)');
	const ipad1 = useMediaQuery('(min-width: 600px) and (max-width: 900px)  and (orientation: portrait)');
   return (
	

    

    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, color: '#1F2937',}}>
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
	  <Box sx={{width:mobile?'110%': '100%', height:mobile?'517px': '592px', bgcolor: '#F9FAFB'}}>
      <Grid container lg={10.3} md={12} xs={12} sm={10} sx={{margin:'auto'}}  >
						<Grid container md={5} lg={8} xs={8.5} sm={10} sx={{margin:'auto'}}>
							<Grid item md={12} lg={12} sm={12} xs={12} sx={{marginTop:mobile?'46px':'128px',display:'flex',justifyContent:'left'}}>
							<Typography variant='h1' sx={{ fontWeight: '700', fontSize: mobile?'32px':'56px', color:'#333335', textAlign:'initial', lineHeight: mobile?'38px': '65.63px', fontStyle:"normal"}}>
When You Need<br/>More than Just a website
</Typography>
					</Grid>
							<Grid item md={12}  lg={12} xs={12} sm={12} sx={{marginTop:mobile?"12px":"0px"}}>
						
								 
										<Grid item  lg={12}md={12} xs={10} sx={{display:'flex',justifyContent:'left'}}>
							<Typography variant='h6' sx={{ fontWeight: '400', fontSize: mobile?'14px':'18px', color: '#333335',textAlign:'initial',lineHeight:"24px"}}>We are a team of software engineers specializing in web	</Typography>
							</Grid>
								<Grid item md={8}  lg={8} xs={12} sx={{ backgroundRepeat: 'no-repeat', backgroundPosition: '65px 21px' }}>
									<Typography variant='h6' sx={{ fontWeight: '400', fontSize: mobile ? '14px' : '18px', color: '#333335', textAlign: 'initial', marginBottom: '50px' }}>development and Martech</Typography>
								</Grid>
								
		
					</Grid>	
					<Grid container direction="row">
  <Grid item md={12} lg={4} xs={12} sm={12} sx={{display:'flex',justifyContent:mobile?"center":'left'}}>
    <Link to='./Start a project' style={{ textDecoration: "none" }}>
      <Button variant='contained' sx={{ backgroundColor:'#E64B18',borderRadius: '8px', textTransform: 'none', fontSize: mobile ? "12px" : "16px", fontWeight: "500", lineHeight: "24px", width: mobile?'36vh':'151px', height: "58px" }} >Start a Project</Button>
    </Link>
  </Grid>	
  <Grid item md={12} lg={8} xs={8} sx={{display:'flex',justifyContent:mobile?"center":'left',marginLeft:mobile?'52px':'170px',marginTop:mobile?'18px':'-57px'}}>
    <Link to='./Our Services' style={{ textDecoration: "none", color: '#6B7280' }}>
      <Button variant='contained' sx={{ backgroundColor:'#FFFFFF', borderRadius: '8px', textTransform: 'none', fontSize: mobile ? "12px" : "16px", fontWeight: "500", lineHeight: "24px", width: mobile ? '36vh' : '151px', height: "58px", color: 'grey' }}>Our Services</Button>
    </Link>
  </Grid>
</Grid>


				</Grid>
				<Grid Container md={6} xs={12} sm={10}  lg={4} sx={{margin:'auto'}} >
							<Grid item md={12} sm={12} xs={12} lg={6} style={{display:"flex",justifyContent:mobile?'center':'left'}}>	
								
								{mobile?'':	
									<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1pUjs3GwoJBl1_PmrYtprffUPFl5QiTzw" style={{
    width:mobile?'272px':'570px',height:mobile?'170.4px':'540px',transitionDuration:'0',animation:'0' ,marginTop:mobile?'36px':"30px",
									}}></Image>
}	
									
									
									
						</Grid>
				</Grid>
			</Grid>
    </Box>
	<Grid container lg={11} xs={8} justifyContent="flex-start" sx={{margin:mobile?'auto':'auto',}}>
    <Grid container lg={6}  >
    <Grid item md={12} lg={9} xs={12} sm={12} >
<Typography sx={{fontStyle: 'normal', fontWeight: '600', fontSize: mobile?'12px':'24px', lineheight: '40px', marginTop:mobile?'15px':"56px", marginLeft:mobile?'0px':"0px", color:'#E64B18', margin:mobile?'auto':''}}>
OUR CLIENTS
</Typography>
<Typography sx={{fontStyle: 'normal', fontWeight: '400', fontSize: mobile?'12px':'24px', lineheight: '20px', marginTop:mobile?'15px':"15px", marginLeft:mobile?'0px':"0px", color:'#6B7280'}}>
Fastest growing organizations in Silicon Valley trust us
</Typography>
</Grid>
    </Grid>
    <Grid container lg={6} xs={10} sx={{ margin: 'auto', justifyContent: 'flex-end', gap: '1.5rem',marginTop: '6rem' }}>
    <Grid item md={3} sm={6} xs={12} lg={2} >
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1XhMAPomR3o2DvWYgwl3QuJoYGMLioVAK"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
    </Grid>
    <Grid item md={3} sm={6} xs={12} lg={2}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1mD2mz66BMeV_AK-zl969fn63O6MA6nxw"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
    </Grid>
    <Grid item md={3} sm={6} xs={12} lg={2}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1L5vcP09hOJmZnWb18ltY-qiOSbjCTZKa"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
    </Grid>
    <Grid item md={3} sm={6} xs={12} lg={2}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1Kk0sTcB2Ss7-fy9lMCrURaKLf8weOcLz"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
    </Grid>
    {mobile?'':<Grid item md={3} sm={6} xs={12} lg={2}>
      <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=16gsw49hlW1EroTVY8_Eaavt3Aj-596wo"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
    </Grid>}
  </Grid>





</Grid>
<Grid container lg={12} xs={10} sx={{margin:mobile?'auto':''}}>
  <Grid item lg={12}  xs={12} sx={{marginTop:'80px'}}>
    <Typography sx={{textAlign:'center',color:'#E64B18'}}>ABOUT US</Typography>
  </Grid>
  <Grid container lg={5} >
  <Grid item lg={8} xs={12} >
    <Typography sx={{textAlign:'center',color:'#171717',marginTop:'20px',fontWeight:'600',fontSize:'28px'}}>At the Intersection of Engineering and Marketing</Typography>
  </Grid>
  </Grid>
  <Grid container lg={12} xs={12}>
  <Grid item lg={4} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',marginTop:'20px',color:'#6B7280',fontsize:'18px'}}>At Codalent, we operate at the intersection of Engineering and Marketing.We collaborated with marketing teams and extract them minimum value out of their online presence.</Typography>
  </Grid>
</Grid>
</Grid>
<Grid container lg={12} >
  <Grid item lg={8} xs={10} sx={{margin:mobile?'auto':'auto'}}>
<Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
</Grid>
</Grid>
<Grid container lg={12}>
  <Grid item lg={12} xs={12} sx={{marginTop:mobile?'70px':''}}>
  <Typography sx={{textAlign:'center',fontSize:'28px',color:'#1F2937'}}>Our Services</Typography>
</Grid>
</Grid>
<Grid container lg={12}  >
<Grid item lg={12} xs={12} >
  <Typography sx={{textAlign:'center',fontSize:'18px',marginTop:'20px',color:'#737373'}}>We handle everything technical for you so you can focus on growing your business</Typography>
</Grid>
</Grid>
<Grid container  lg={10}  spacing={3} sx={{margin:'auto'}}>
  <Grid item xs={3}  lg={4} xs={12} sx={{margin:mobile?'auto':''}} >
    <Grid item lg={12} sx={{margin:'auto'}}>
  <Card sx={{ maxWidth: 330,height:'275px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1tZupTeGOu3s_FWcoeXGVU7WWBMeC87pf"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Web development
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Writing back-end code 
• Developing back-end portals with an optimized database.
• Writing API's
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  </Grid>


<Grid item lg={4} >
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
  <Card sx={{ maxWidth: 330 ,height:'275px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Full Stack Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Developed and deployed a secure authentication system, allowing users to securely access our platform.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>
<Grid item lg={4}>
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
  <Card sx={{ maxWidth: 330, height:'275px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          SEO optimization
          </Typography>
          <Typography variant="body2" color="text.secondary">
          SEO optimization involves various techniques and strategies, including keyword research and analysis. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>
<Grid container lg={12}  spacing={3} sx={{margin:'auto'}}>
  <Grid item xs={3} lg={4} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
    <Grid item lg={12} sx={{margin:'auto'}}>
  <Card sx={{ maxWidth: 330,height:'275px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Wordpress Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Developing the Content and Designing the page using WordPress Styling of Page using CSS Using CMS making Page for the website
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>

<Grid item lg={4}   >
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
  <Card sx={{ maxWidth: 330,height:'275px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mobile Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It involves designing and developing applications for various platforms such as iOS and Android 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>
<Grid item lg={4}>
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}} >
  <Card sx={{ maxWidth: 330,height:'275px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=12saTXD6A5sGtQB8u-dOOUpc6TZitT0Vv"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Hosting Websites
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fast, secure, scalable hosting plans with expert support and SSL certificates for your portfolio website.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  </Grid>
  
</Grid>
</Grid>
</Grid>
<Box sx={{bgcolor:'#F9FAFB',height:'1100px',width:'100%'}}>
<Grid container lg={12}>
  <Grid item lg={12} xs={12} sx={{marginTop:'80px'}}>
    <Typography sx={{textAlign:'center',color:'#E64B18'}}>JAMSTACK</Typography>
  </Grid>
  <Grid container lg={8} sx={{margin:'auto'}}>
  <Grid item lg={8} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',color:'#171717',marginTop:'20px',fontWeight:'600',fontSize:'28px'}}>Upgrade to a Modern Technology Stack </Typography>
  </Grid>
  </Grid>
  <Grid container lg={12}>
  <Grid item lg={5} xs={10} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'center',marginTop:'20px',color:'#6B7280',fontsize:'18px'}}>We use cutting edge technologies for our clients to build the best in class infrastructure which is robust,performance and solve the problem.</Typography>
  </Grid>
</Grid>
</Grid>




<Grid container lg={6} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'40px'}}>
  <Grid item lg={4}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={4}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=16R2z6_uPbXe0Zks2vkXP786-ZuupNxTT"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={4}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1x6DDUgrhtUYa-SUh15QNgJmI8zJKpjCq"
        style={{
          justifyContent: 'space-around',
          width: '110%',
          height: '150px',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>


<Grid container lg={7} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px',height:'150px'}}>
 
    
    <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1f05KxTrz8zVOA7tTuh-spkzwI2J4pOwr"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
 
  <Grid item lg={3}>

  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=13rJgebAUdMjvYK4J9phWfFv1cbNKKfaM"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>

    
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=17-5N69Z0zVKXAAFBDQFx5uidxZTUvh2_"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
    
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1Di7RpDaVm-oSIpfPhq97C_yl-nX2ZTmF"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
    
  <Grid item lg={3} >
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1YNsByQh4-o1b-LCAamgFlQO2s62smdp6"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
    
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1WHaYcPcHb5iVuEV7RZGTSRL-zsfh61fb"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1WHaYcPcHb5iVuEV7RZGTSRL-zsfh61fb"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
<Grid container lg={7} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px',height:'150px'}}>
 
    
    <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1f05KxTrz8zVOA7tTuh-spkzwI2J4pOwr"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
 
  <Grid item lg={3}>

  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=13rJgebAUdMjvYK4J9phWfFv1cbNKKfaM"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
<Grid container lg={7} sx={{margin:'auto',border:'1px solid black',borderRadius:'20px',marginTop:'50px',height:'150px'}}>

    
    <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1f05KxTrz8zVOA7tTuh-spkzwI2J4pOwr"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  
 
  <Grid item lg={3}>

  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=13rJgebAUdMjvYK4J9phWfFv1cbNKKfaM"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}>
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
  <Grid item lg={3}> 
  <Image
        Duration={0}
        src="https://drive.google.com/uc?export=view&id=1skGu-3dOo5UaGb9kaHE4eblEc7IHbXQN"
        style={{
          justifyContent: 'space-around',
          width: '100%',
          height: 'auto',
          transitionDuration: '0',
          animation: '0',
        }}
      />
  </Grid>
</Grid>
</Box>
<Grid container lg={12} sx={{marginTop:mobile?'400px':'80px'}}>
<Grid item lg={10} sx={{margin:'auto'}}>
    <Typography sx={{textAlign:'left',color:'#E64B18'}}>CASE STUDIES</Typography>
  </Grid>
  </Grid>
<Grid container lg={12}>
  <Grid item lg={10} sx={{margin:'auto'}}>
  <Typography sx={{textAlign:'Left',fontSize:'28px',color:'#1F2937'}}>Our Work</Typography>
</Grid>
</Grid>
<Grid container lg={12} sx={{marginBottom:"30px"}} >
<Grid item lg={4} sx={{marginLeft:'105px'}} >
  <Typography sx={{textAlign:'left',fontSize:'18px',marginTop:'20px',color:'#737373'}}>We have worked with the some of the world's most successful companies.Checkout our work.</Typography>
</Grid>
</Grid>
<Grid container  lg={10.5} spacing={2} sx={{margin:'auto'}}>
  <Grid item xs={3}  lg={4} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
    <Grid item lg={12} sx={{margin:'auto'}}>
  <Card sx={{ maxWidth: 330,height:'400px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1JnGHHZrGj5WDWJF0sx_0MY9c160GYkX-"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Deep learning website with Next.js & Headless Wordpress
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Learn how we migrated Deeplearning AI'S website to a Jamstack architecture with headless css and Next.js
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={6} sx={{marginTop:'20px'}}>
  <Button variant="contained" color="primary" >
    Read More
  </Button>
  </Grid>
  <Grid item lg={6} sx={{marginTop:'20px',justifyContent:'end',display:'flex'}}>
  <Button variant="contained" color="primary" >
    arrow
  </Button>
  </Grid>
      </Box>
    </Card>
    
  </Grid>
  </Grid>


  <Grid item lg={4}>
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
    <Card sx={{ maxWidth: 330, height:'400px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1H4emreIYcirSwNFGmlKno1xIa96jxb-W"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Data-Centric AI Resource Hub using GatsBy and Headless Wordpress
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Chect out our case study on how we built the data centric AI resource Hub using Gatsby and Headless wordpress. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={11.5} sx={{marginTop:'20px'}}>
  <Button variant="contained" color="primary" >
    Read More
  </Button>
  </Grid>
      </Box>
    </Card>
  </Grid>
</Grid>

<Grid item lg={4}>
  <Grid item xs={3} lg={12} xs={12}  sx={{margin:mobile?'auto':'auto'}}>
    <Card sx={{ maxWidth: 330, height:'400px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://drive.google.com/uc?export=view&id=1qnxQm8pWIc7Ccc0bUyxhkGWzz0maYLzs"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Andrew Ng's presonal websites with GatsBy and Headless Wordpress
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chect out our case study on how we built the data centric AI resource Hub using Gatsby and Headless wordpress.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Grid item lg={11.5} sx={{marginTop:'20px'}}>
  <Button variant="contained" color="primary" >
    Read More
  </Button>
  </Grid>
      </Box>
    </Card>
  </Grid>
</Grid>

</Grid>
	</Box>
	
    
      
    
   );
}
