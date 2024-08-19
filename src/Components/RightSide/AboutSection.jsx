import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const AboutSection = ({activeSection}) => {
  const AboutSectionTypography = {
    fontSize: "0.85rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
    padding: "4px",
    opacity: activeSection == "about" ? "1" : "0.5"
  };
  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column" m="10%"  id="about-section">
        <Typography sx={AboutSectionTypography}>
          Back after my schooling , I started my carrier in Information technology from Dr. Rammanohar Lohiya Awadh University, Ayodhya. During my gradutaion i work on some basic project like Path Following Robote , Automatic Fire Extinguisher System.<br/> Then i get some more ideas and start learing C language during this time i developed Student Ranking System. <br/> Then i came to know UI/UX development then i start learnig HTML Css and JavaScript after learnig these tehnology i develeopd  Replica of my collage website , Dashboard for Shopping Application, and also work in some static HTML pages. I also leran Oracle Database with Sql and PL/Sql  <br/>
          For my final year i start learnig Python Programming Language and work on Corona Virus Case detection and Registration in this i used <Link style={{color:"white"}} target="_blank" to="https://www.geeksforgeeks.org/convolutional-neural-network-cnn-in-machine-learning/">CNN(convolutional neural network)</Link> for detection of corona virus.
        </Typography>

        <Typography sx={AboutSectionTypography} my={1}>
        I start my industry carrier as UI/UX developer i completely work on ReactJS.
        <br/> Here i came to know how actually work on industry standard. Here i learnd so many things and librarys.
        like Mapbased library, chart based librarys and much more. 
        </Typography>
        <Typography sx={AboutSectionTypography} my={1}>
          Then i switch my carrier as a software developer and work on MERN technology.<br/>
          Here i learn so many things like ReactJs and Redux Redux Toolkit, MongoDB, Express, NodeJs.<br/>
          I standalone developed two project(check the experience section for details) on ReactJS and with the help of backend team i also created APIs.
        </Typography>
      </Box>
    </>
  );
};

export default AboutSection;
