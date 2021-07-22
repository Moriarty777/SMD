import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import img from './assets/doc.png';
import bharatKumar from './assets/BharatKumar.jpg';
import eash from "./assets/eash.webp";
import vin from "./assets/vin.webp";
import hari from "./assets/hari.webp";
import jay from "./assets/jay.webp";
import nik from "./assets/nik.webp";
import person from './assets/person.png';
import cricket from './assets/cricket.jpeg';
import lifting from './assets/lifting.jpeg';
import med from './assets/med.jpeg';
import kinesis from './assets/kinesis.png';
import medifit from './assets/medifit.png';
import news from './assets/news.png';
import ADoctorAHealer from './assets/ADoctorAHealer.jpg';
import ADoctorWhoPlaysCricket from './assets/ADoctorWhoPlaysCricket.jpg';
import ADoctorWhoLiftsWeights from './assets/ADoctorWhoLiftsWeights.jpg';
import ExerciseIsMedicine from './assets/ExcerciseIsMedicine.jpg';
import GymRatherThanHospital from './assets/GymRatherThanHospital.jpg';
import DoctorWhoCombinedSportsAndMedicine from './assets/DoctorWhoCombinedSportsAndMedicine.jpg';
import DoctorWhoDoesNotPrescribeMedicine from './assets/DoctorWhoDoesNotPrescribeMedicine.jpg';
import DoctorWhoIsAFoodie from './assets/ADoctorWhoISAFoodie.jpg';
import DoctorAThinker from './assets/ADoctorAThinker.jpg';
import SportsInjury2 from './assets/SportsInjury2.jpeg';
import Musculoskeletal from './assets/MusculoSkeletal.png';
import MedicalWeightLoss from './assets/MedicalweightLoss.jpeg';
import RevereseDia from './assets/ReverseDiabetes.jpeg';
import SportsNutrition from './assets/SportsNutrition.jpeg';
import MedifitLogo from './assets/White.png'
import AthleteHealth from './assets/AthleteHealth.jpeg'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from 'react-bootstrap/Container';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';    
import Modal from '@material-ui/core/Modal';
import Carousel from 'react-material-ui-carousel';
import { Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './home.scss';
import News3CardDemo from "./ventures/ventures"
import News3CardDemo2 from './ventures/ventures_medifit';
import BlogCardDemo from './consultCards/consultCards';
import testi1 from './assets/testi1.png';
import testi2 from "./assets/testi2.png";
import testi3 from "./assets/testi3.png";
import testi4 from "./assets/testi4.png";
import testi5 from "./assets/testi5.png";
import testi6 from "./assets/testi6.png";

// function Item(props)
// {
//   const [open, setOpen] = React.useState(false);
//   const [modalStyle] = React.useState(getModalStyle);
//   const classes = useStyles();

//     const handleOpen = () => {
//         setOpen(true);
//       };
    
//       const handleClose = () => {
//         setOpen(false);
//       };
//     return (
//         <Paper>
//             <Grid container >
//                 <Grid item xs={12} sm={3}>
//                     <Avatar alt="Dr. Bharath Kumar" className={classes.large} src={props.item.avatar} style={{marginLeft:"120px"}}/>
//                 </Grid>
//                 <Grid item xs={12} sm={9}>
//                     <Typography variant="h5"  gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'25px', margin:"30px" }}>
//                     {props.item.name}
//                     </Typography>
//                     <Typography variant="h6" gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'25px', margin:"30px" }}>
//                     {props.item.description}
//                     </Typography>
//                     {/* <Button onClick={handleOpen}>Read More...</Button> */}
//                 </Grid>
//             </Grid>
//                     <Modal
//                         open={open}
//                         onClose={handleClose}
//                     >
//                         <div style={modalStyle} className={classes.paper}>
//                             <Typography variant="h6" gutterBottom align="left" style={{fontFamily: 'Times New Roman', fontSize:'20px', margin:"30px" }}>
//                                 {props.item.rm}
//                             </Typography>
//                         </div>
//                     </Modal>
//         </Paper>
//     )
// }

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
    function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    root: {
        maxWidth: 343,
        borderRadius: 20,
        backgroundColor: "#ededeb",
      },
      content: {
        padding: 24,
      },
    paper: {
    position: 'absolute',
    width: 1100,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
    paperContainer: {
        backgroundImage: `url(${ADoctorAHealer})`
    },

    
  }));

function Home() {
  const classes = useStyles();
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [image , setImage] = React.useState("");

  const handleOpen = (img) => {
    setOpen(true);
    setImage(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var items = [
    {
        name: "Vijayindra Prabhakar",
        description: "Dear all, my name is Vijayindra P. and I have been running for more than an year now. I have participated in quite a few 10K and 5K runs and I intend to run a half marathon soon.Around 7 months back, I fell and injured my left shoulder while running. ",
        avatar: person,
        rm:"I slipped on a stone and fell on my shoulder and had a very tough time moving my shoulder. My range of motion had become so weak that I used to experience excruciating pain even while externally rotating to 30 degrees. I met many doctors who were specialized in Orthopedics. They had a look at the x-ray of my shoulder and came to a conclusion that the only way they can treat my shoulder was through an invasive route (surgical method). I was somehow hesitant to get my shoulder operated and was looking out for a person who could treat my shoulder through a noninvasive method. In the ensuing period, I got my shoulder treated at a known Ayurvedic Clinic which did not help me either.One day while sipping coffee at Hotel Maiyas, I came across Kinesis Sports Clinic which was close-by and thought of visiting the doctor. I met Dr. Bharat Kumar who in turn had a look at my left shoulder and ordered for an ultrasound of the same. My ultrasound did reveal some tears, but the doctor said he could give it a try in treating nonsurgically.I started visiting Dr. Bharat Kumar everyday and he started treating my shoulder in the form of various exercises. Initially, I had a tough time to move my shoulder, but over time, I was able to rotate my shoulder internally and externally. With each day, I was able to slowly increase my range of motion from 30 degrees to 50, 60, 70, and 80 degrees, respectively. Within 8 weeks, I was able to externally rotate my shoulder to 90 degrees.It was Dr. Bharat Kumar who took great care in treating my shoulder and I will be ever so grateful to him. But for him, I would have ended with surgical option which would cost me lot of money and it would have taken more time to heal.From last month or so, Dr. Bharat has been treating my knees as I had developed severe knee pain. My core strength had become extremely weak and he started teaching many knee strengthening exercises which I have been doing at home and my pain has reduced to a large extent now. I was not able to do planks for 30 seconds earlier, but now I can reach up to 2 minutes. He has taught me to do squats, lunges, step-ups, side kicks, dead lifts and other very useful exercises. I ran a 10K event at Jayanagar last week and I could finish my 10K in under 60 minutes. My previous best timings was 63 minutes and I owe my success to Dr. Bharath.I have not written this article to get some mileage for Dr. Bharath Kumar. I can only say he is the best person to contact if you have any sports related injuries as he takes great care in treating them. He is one person who is not after money. There were many days wherein he used to come all the way from his home just to treat me and he has been charging nominal fees from me and others.Dr. Bharat Kumar can be contacted at 8884244200. Post my visits, many of my friends who are into running have visited him and they have reaped rich benefits after meeting him.I once again thank you, Dr. Bharat Kumar for all the trouble you took in treating my shoulder and knees. I wish you good luck and may you be one of the most sought after doctors as far as the sports related injuries are concerned."
    },
    {
        name: "Dr. Eash Hoskote",
        description: "Dr Bharath is an excellent sports Doctor who relies more on clinical diagnosis than investigative diagnosis.I had a persistent Knee problem for years and was slowly going into depression and overweight.He made a simple diagnosis and the treatment was very simple and advised changes in lifestyle.",
        avatar: eash,
        rm:"Small steps towards healthy lifestyle and the Whatsapp group where he offers lots of info was the turning point.Keep up the good work Doctor 💪.God Bless you."
    },
    {
        name: "Jayanta Ghosh",
        description: "I had developed a secondary tear in the elbow area. I was suffering because of this for almost half a year then. I met Dr Bharath.He also explained the exercises required to heal the tennis elbow issue and as to how those exercises will heal the affected area. It has been 2 months now I have recovered 80%.When I met him I did not even have strength to do a hand shake with firm grip and today because of the treatment by Dr. Bharath I have regained that strength. I and my wife also have started consulting him for fat loss and overall health well being for a month now. There are very positive results and I have lost almost 1.5 kgs of fat mass.",
        avatar: person,
        rm:"He also explained the exercises required to heal the tennis elbow issue and as to how those exercises will heal the affected area. It has been 2 months now I have recovered 80%. When I met him I did not even have strength to do a hand shake with firm grip and today because of the treatment by Dr. Bharath I have regained that strength. I and my wife also have started consulting him for fat loss and overall health well being for a month now. There are very positive results and I have lost almost 1.5 kgs of fat mass. The programmatic approach of step by step capturing the data and auditing it is the most important aspect here which guides an individual if something goes wrong. I had been into fat loss journey for 3 years now however my journey for last 1 year had become stagnant. I did not know why! Dr. Bharath conducted few blood parameter tests and we identified the reason. It is a lifetime journey of adhering to healthy lifestyle and we learn everyday from him and his team. Dr. Bharath patiently responds to all our questions <Sorry Sir, I bug you with too many questions :-) > and explains the concept behind it. I am really thankful that we found him."
    }
]

  return (
     <div>

<div style={{marginTop:"150px"}}>
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:'1900px', }}>
 
                <ol class="carousel-indicators" align="center" style={{top:"10px"}}>
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                    <li data-target="#myCarousel" data-slide-to="6"></li>
                    <li data-target="#myCarousel" data-slide-to="7"></li>
                    <li data-target="#myCarousel" data-slide-to="8"></li>
                </ol>


                <div class="carousel-inner" style={{width:"1900px", height:"800px"}}>

                <div class="item active"  style={{width:"2000px", height:"350px"}}>
                    {/* <div className="row">

                        <div className="col-sm-6" style={{backgroundColor:"white"}}>
                        
                            <img src={bharatKumar} alt="Chania" style={{height:"800px", width:"1000px"}}/>
                        </div>
                        <div className="col-sm-6" style={{align:"left", textAlign:"left", 
                        fontSize:"22px", backgroundColor:"#DEB887", paddingTop:"100px", 
                        backgroundImage:{bharatKumar}, paddingBottom:"250px"}}>
                              
                                   <b>Hi !</b>   <br/> <br/>
                                        This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized
                                        <br/>in Sports Medicine.
                                        I graduated from the prestigious Netaji Subhas National
                                        <br/>  Institute of Sports. 
                                        <br/> <br/>
                                        I am the Founder, Director of Kinesis Sports Clinic and Creator
                                        <br/> & Program Director of MediFit, 
                                        an online Medical Weight Loss program.
                                        <br/> <br/>
                                        My mission is to help the athletes to win Gold medals at the Olympics.
                                        <br/> I strive to create a Fit India 
                                        through Nutrition, Exercise, and Lifestyle. I envision 
                                        <br/> a world free from lifestyle disorders!
                                        <br/> <br/> <br/>
                                        <div style={{fontFamily: 'Berkshire Swash',fontWeight:"400"}}>
                                        <h1>DR. BHARATH KUMAR B</h1> </div>
                                        <div style={{fontFamily: '',fontSize:"250px"}}>
                                        <h4>MBBS, PGDSM (Sports Medicine)</h4>
                                            </div>
                                        </div>
                        </div> */}
                                <img src={bharatKumar}  alt="Chania" style={{height:"925px", width:"1835px",zIndex:"-1"
                                 }}/>
                                <div class="carousel-caption" align="left" style={{position:"Absolute",top:"50px", color:"white",
                                fontSize:"30px", textAlign:"left", marginLeft:"550px" ,textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black", 
                            }}>
                                    {/* <h1 style={{fontFamily: 'Comfortaa', fontSize:"120px", }}>A doctor, a healer...</h1> */}
                                
                                    {/* <Button variant='primary' style={{marginBottom:"100px"}}>Read More...</Button> */}
                                    
                                    
                                      <div style={{fontSize:"40px"}}>Hi !</div>   
                                       
                                        This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized
                                        <br/>in Sports Medicine.
                                        I graduated from the prestigious Netaji Subhas National Institute of Sports. 
                                        <br/> <br />
                                        {/* I am the Founder, Director of Kinesis Sports Clinic and Creator
                                        <br/> & Program Director of MediFit, 
                                        an online Medical Weight Loss program.
                                        <br/> <br/> */}
                                        My mission is to help the athletes to win Gold medals at the Olympics.
                                        <br/> I strive to create a Fit India 
                                        through Nutrition, Exercise, and Lifestyle. I envision 
                                        <br/> a world free from lifestyle disorders!
                                       <br /> <br />
                                        <div style={{fontFamily: 'Berkshire Swash',fontWeight:"400"}}>
                                           
                                        <h1>DR. BHARATH KUMAR B</h1> </div>
                                        <div style={{fontFamily: '',fontSize:"250px"}}>
                                        <h4>MBBS, PGDSM (Sports Medicine)</h4>
                                            </div>
                                  
                                </div>

                        

                    </div>

                    <div class="item"  style={{width:"1900px", height:"800px"}}>
                        <img src={ADoctorAHealer}  alt="Chania" style={{opacity:"0.9"}}/>
                        <div class="carousel-caption" align="center">
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"145px", textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A doctor, a healer...</h1>
                           
                            <Button variant="contained" color="secondary" style={{marginBottom:"240px"}}><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"400px"}}>
                        <img src={ADoctorWhoPlaysCricket} alt="Chicago" />
                        <div class="carousel-caption" align="center" style={{position:"Absolute", top:"170px"}}>
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"140px", textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A doctor, who plays cricket...</h1>
                            <Button variant='contained' color="secondary" ><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"900px"}}>
                        <img src={ADoctorWhoLiftsWeights} alt="New York" style={{opacity:"0.9"}}/>
                        <div class="carousel-caption" align="center">
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"140px", textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A Doctor, who lifts weights...</h1>
                            <Button variant='contained' color="secondary" style={{ marginBottom:"250px"}}><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"200px", marginTop:"35px"}}>
                        <img src={ExerciseIsMedicine} alt="New York"/>
                        <div class="carousel-caption" align="center" style={{position:"Absolute", top:"35px"}}>
                            {/* <div style={{}}> */}
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"123px", color:"black", paddingTop:"150px", textShadow: "5px 5px 5px white, 5px 5px 5px white, 5px 5px 5px white"}}>Exercise is Medicine...</h1>
                            <Button variant='contained' color="secondary" style={{}}><h4>Read More...</h4></Button>
                            {/* </div> */}
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"800px"}}>
                        <img src={GymRatherThanHospital} alt="New York" style={{opacity:"0.9"}}/>
                        <div class="carousel-caption" align="center">
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"120px", color: "maroon",textShadow: "5px 5px 5px white, 5px 5px 5px white, 5px 5px 5px white"}}>A doctor who would rather work in a gym than a hospital...</h1>
                            <Button variant='contained' color="secondary" style={{marginBottom:"70px"}}><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"800px"}}>
                        <img src={DoctorWhoCombinedSportsAndMedicine} alt="New York" style={{opacity:"0.9"}}/>
                        <div class="carousel-caption" align="center">
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"110px",paddingTop:"120px", textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A doctor who combined Sports and Medicine... </h1>
                            <Button variant='contained' color="secondary" style={{marginBottom:"180px"}}><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"300px", marginTop:"30px"}}>
                        <img src={DoctorWhoDoesNotPrescribeMedicine} alt="New York" />
                        <div style={{marginTop:"200px"}}>
                        <div class="carousel-caption" align="center" style={{position:"Absolute", top:"5px"}}>
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"120px",}}><div style={{marginTop:"200px", color:"#ffb3de",textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A doctor who does not prescribe medicine...</div></h1>
                            <Button variant='contained' color="secondary" style={{marginBottom:"5px"}}><h4>Read More...</h4></Button>
                        </div>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"400px"}}>
                        <img src={DoctorWhoIsAFoodie} alt="New York"/>
                        <div class="carousel-caption" align="center" style={{position:"Absolute", top:"15px"}}>
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"140px",paddingTop:"140px", textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"}}>A doctor who is a foodie...</h1>
                            <Button variant='contained' color="secondary" style={{marginBottom:"1px"}}><h4>Read More...</h4></Button>
                        </div>
                    </div>

                    <div class="item"  style={{width:"1900px", height:"800px"}}>
                        <img src={DoctorAThinker} alt="New York"/>
                        <div class="carousel-caption" align="center" style={{position:"Absolute", bottom:"8px"}}>
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"140px", color:"black", textShadow: "5px 5px 5px white, 5px 5px 5px white, 5px 5px 5px white"}}>A doctor who is a thinker...</h1>
                            <Button variant='contained' color="secondary" style={{marginBottom:"125px",}}><h4>Read More...</h4></Button>
                        </div>
                    </div>
                </div>


                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
         
        {/* <div style={{marginTop:"150px"}}>
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:'1900px'}}>
 
                <ol class="carousel-indicators" align="center">
                    <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                    
                </ol>


                <div class="carousel-inner" style={{width:"1900px", height:"800px"}}>

                <div class="item active"  style={{width:"1900px", height:"200px", marginTop:"35px"}}>
                        <img src={ExerciseIsMedicine} alt="New York"/>
                        <div class="carousel-caption" align="center" style={{position:"Absolute", top:"35px"}}>
                         
                            <h1 style={{fontFamily: 'Comfortaa', fontSize:"120px", color:"black"}}>Exercise is Medicine...</h1>
                            <Button variant='contained' color="secondary" style={{}}><h4>Read More...</h4></Button>
                           
                        </div>
                    </div>
                        </div>
                    </div>
                    </div> */}

    {/* <Grid container style={{backgroundColor:'white'}}>
            <Grid item xs={12} sm={5}>
            <img src={img}  width="500" height="700"  style={{verticalAlign:"top", position:"center", marginTop:"200px"}}/>
            </Grid>
            <Grid item xs={12} sm={7} >
                <Typography  variant="h6" align="left" style={{fontSize:'30px', fontWeight:"500",marginTop:"250px", marginRight:"20px"}} gutterBottom>
                   Hi!             
                </Typography>
                <Typography  variant="h6" align="left" style={{fontFamily: 'Comfortaa',fontSize:'25px', fontWeight:"500",marginRight:"20px"}}>
                    This is Dr. Bharath Kumar B. I am an Allopathic Doctor specialized in Sports Medicine. I graduated from the prestigious 
                    Netaji Subhas National Institute of Sports. 
                    I am the Founder, Director of Kinesis Sports Clinic and Creator & Program Director of MediFit, an online Medical Weight Loss program.                
                </Typography>
                <Typography  variant="h6" align="left" style={{fontFamily: 'Comfortaa',fontSize:'25px', fontWeight:"500",marginTop:"20px",marginRight:"20px"}}>
                    My mission is to help the athletes to win Gold medals at the Olympics. I strive to create a Fit India through 
                    Nutrition, Exercise, and Lifestyle. I envision a world free from lifestyle disorders!                
                </Typography>

                <Typography  variant="h5" align="left" style={{fontSize:'30px',marginTop:"30px",marginRight:"20px"}}>
                    DR. BHARATH KUMAR B              
                </Typography>
                <Typography  variant="h5" align="left" style={{fontFamily: 'Times New Roman',fontSize:'25px',marginTop:"0px",marginRight:"20px"}}>
                    MBBS, PGDSM (Sports Medicine)               
                </Typography>

                <Typography  variant="h5" align="left" style={{fontFamily: 'Comfortaa',fontSize:'40px',marginTop:"50px",marginRight:"20px"}}>
                    My Ventures :             
                </Typography>
                <br />
                <Typography align="left">
                    <img src={kinesis} alt="" width='400px'height='100px' style={{marginRight:'50px', border:"3px solid black"}}/>

                    <img src={medifit} alt="" width='400px'height='100px' style={{border:"3px solid black"}}/>
                </Typography>
                <br />
            </Grid>
            <br/>

    </Grid>  */}
    
    {/* <Grid item xs={12} style={{backgroundColor:"grey"}}>
                <Typography  variant="h5" align="center" style={{fontFamily: 'Comfortaa', 
                fontSize:'50px', paddingBottom:"100px", marginTop:"30px"}}>
                   My Ventures
                </Typography>
            </Grid> */}
           
    
    
        {/* <div style={{backgroundColor:"lightyellow"}}>
        <Grid item xs={12} >
                <Typography  variant="h5" align="center" style={{fontFamily: 'Comfortaa', margin:"30px" ,fontSize:'50px'}}>
                   How can I help?
                </Typography>
            </Grid>
            <br /><br />
        <Grid container >
            <Grid item xs={12} sm={4}>
                <img src={SportsInjury2}/>
                <h3>Sports Injury Management</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={Musculoskeletal}/>
                <h3>Musculoskeletal Pain Syndromes</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={MedicalWeightLoss}/>
                <h3>Medical Weight Loss</h3>
            </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"lightyellow"}}>
            <Grid item xs={12} sm={6}>
                <img src={AthleteHealth}/>
                <h3>Athlete Health & Doping</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={SportsNutrition}/>
                <h3>Sports Nutrition</h3>
            </Grid>
           
        </Grid>
        <br /><br />
        </div> */}
        

    {/* <div style={{backgroundColor:'#CCCCCC'}}>
    <Container>
    <Grid container>
            <Grid item xs={12} >
                <Typography  variant="h5" align="center" style={{fontFamily: 'Comfortaa', margin:"30px" ,fontSize:'50px'}}>
                    Who am I.....
                </Typography>
            </Grid>
     </Grid>
     <br/>
     <br/>
     <Grid container >
                
                <Grid item xs={12} sm={8}>


                    <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:'1100px'}}>
 
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div class="carousel-inner">
                        <div class="item active">
                        <img src={cricket} alt="Chania"/>
                        <div class="carousel-caption">
                            <h1 style={{fontFamily: 'Comfortaa'}}>A doctor, who plays cricket...</h1>
                            
                            <button variant='primary'>Read More...</button>
                        </div>
                        </div>

                        <div class="item">
                        <img src={lifting} alt="Chicago"/>
                        <div class="carousel-caption">
                            <h1 style={{fontFamily: 'Comfortaa'}}>A Doctor, who lifts weights...</h1>
                            <button variant='primary'>Read More...</button>
                        </div>
                        </div>

                        <div class="item">
                        <img src={med} alt="New York"/>
                        <div class="carousel-caption">
                            <h1 style={{fontFamily: 'Comfortaa'}}>A doctor who combined Sports and Medicine... </h1>
                            <button variant='primary'>Read More...</button>
                        </div>
                        </div>
                    </div>


                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </Grid>

     </Grid>
    </Container>
    </div> */}
    {/* <div style={{backgroundColor:'#CCCCCC'}}><br /><br /></div> */}

            <div style={{backgroundColor:""}}> 
            <Typography  variant="h4" align="center" style={{fontFamily: 'Comfortaa', fontSize:"40px",color:'black'}}>                 
            <br />
                    How can I help you ?
                    <br />
                </Typography>
                <br /> <br />
               <BlogCardDemo/>
               <br /> <br />
               </div>   

               <Grid container style={{backgroundColor:"#F68D91" , paddingBottom:"30px", paddingTop:"50px"}}>
    <Grid item xs={12} sm={1}></Grid>
    <Grid item xs={12} sm={3} style={{fontFamily:"East Sea Dokdo", color:"white", fontSize:"150px", 
     textShadow: "5px 5px 5px black, 5px 5px 5px black, 5px 5px 5px black"
    }}><i>My Ventures</i></Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={3} style={{paddingRight:"70px", marginRight:"10px", marginLeft:"0"}}><News3CardDemo /></Grid>
        
        <Grid item xs={12} sm={3} style={{paddingRight:"70px"}}><News3CardDemo2 />
        {/* <div style={{fontFamily:"East Sea Dokdo", color:"white", fontSize:"130px"}}>My Ventures</div> */}
        </Grid>
       
    </Grid>

    <div style={{backgroundColor:"GREY"}}>
        <br />
        <Grid container>
                <Grid item xs={12}>
                    <img src={news}alt="" width='200px' height='200px' />
                {/* </Grid>
                <Grid item xs={4}> */}
                <Typography  variant="h4" align="center" style={{fontFamily: 'Comfortaa', fontSize:"40px",color:'black'}}>                 
                    Subcribe to my NewsLetter!
                </Typography>
                <br />
                <input type="text" placeholder='Enter your Email' style={{width:'300px'}}/>
                <br /><br />
                <Button variant='contained' color="secondary" ><h4>Submit</h4></Button>
                
                </Grid>
                
        </Grid>
        <br />
        
    </div>
    {/* <Container> */}
    <Grid item xs={12} >
                <Typography  variant="h2" align="center" style={{fontFamily: 'Comfortaa', margin:"30px" , fontSize:"50px"}}>                 
                    What People Say About Me...  
                </Typography>
                </Grid>
                 <div style={{marginTop:"50px", backgroundColor:"white"}}>
                        <div id="myCarousel1" class="carousel slide" data-ride="carousel" style={{width:'1900px', backgroundColor:"white"}}>
                
                                <ol class="carousel-indicators" align="center">
                                    <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel1" data-slide-to="1"></li>
                                </ol>

                                <div class="carousel-inner" style={{width:"1900px", height:"500px", backgroundColor:"white"}}>

                                    <div class="item active row"  style={{width:"1900px", height:"200px", marginTop:"35px", backgroundColor:"white"}}>
                                            <div className="col-sm-4" style={{  marginLeft:"10px"}}>
                                                <img src={testi1} style={{height:"450px", width:'600px',}} />
                                            </div>
                                            <div className="col-sm-4">
                                                <img src={testi2} style={{height:"450px", width:'600px'}} />
                                            </div>
                                            <div className="col-sm-3">
                                                <img src={testi3} style={{height:"450px", width:'600px'}} />
                                            </div>
                                    </div>
                                    <div class="item row"  style={{width:"1900px", height:"200px", marginTop:"35px",  backgroundColor:"white"}}>
                                            <div className="col-sm-4" style={{  marginLeft:"10px"}}>
                                                <img src={testi4} style={{height:"450px", width:'600px',}} />
                                            </div>
                                            <div className="col-sm-4">
                                                <img src={testi5} style={{height:"450px", width:'600px'}} />
                                            </div>
                                            <div className="col-sm-3">
                                                <img src={testi6} style={{height:"450px", width:'600px'}} />
                                            </div>
                                    </div>
                                </div>
                                <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel1" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
                        </div>
                    </div>

    {/* <div style={{backgroundColor:'#FFCE85'}}>
        <Grid container style={{backgroundColor:'#FFCE85'}}>
                <Grid item xs={12} >
                <Typography  variant="h2" align="center" style={{fontFamily: 'Comfortaa', margin:"30px" , fontSize:"50px"}}>                 
                    What People Say About Me...  
                </Typography>
                </Grid>
        </Grid>
        <br />       
       

        <Grid container style={{backgroundColor:'#FFCE85'}}>
            
        <Grid item xs={12} sm={3} ></Grid>   
        
        <Grid item xs={12} sm={2} >
            
            <img src={nik} alt="" width="150px" height="150px" style={{borderRadius:'50%', border: "1px solid black"}}/>
            <br />
            <h3>Nikilesh Nagaraja</h3>
            <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                The MediFit program changed my life. It is a simple, easy to follow program which helped me reverse all my medical conditions. Today, I feel more healthy than ever. Thanks to the MediFit team!
            </Typography>
            <Typography variant="h1" style={{color:'red'}}>
                ''
            </Typography>

            
        </Grid>
        <Grid item xs={12} sm={2} >
            <img src={vin} alt="" width="150px" height="150px" style={{borderRadius:'50%', border: "1px solid black"}}/>
            <br />
            <h3>Vinutha Harish</h3>
            <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                At MediFit, they give you complete knowledge of how your food habits and lifestyle changes help you for a lifetime. The mantra I learned from them was Food is medicine and Health is home-cooked!
            </Typography>
            <Typography variant="h1" style={{color:'red'}}>
                ''
            </Typography>
        </Grid>
        <Grid item xs={12} sm={2} >
            <img src={jay} alt="" width="150px" height="150px" style={{borderRadius:'50%', border: "1px solid black"}}/>
            <br />
            <h3>Jayanta Ghosh.</h3>
            <Typography  variant="h4" align="left" style={{fontFamily: 'Economica', margin:"30px"}}>                 
                I had hit the dreaded plateau for almost a year. No matter what I did nothing worked. Dr. Bharath and his team of MediFit cracked this mystery and also educated me on this.
            </Typography>
            <Typography variant="h1" style={{color:'red'}}>
                ''
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3} ></Grid>  
        </Grid>
    </div> */}
   
    </div>
  );
}

export default Home;