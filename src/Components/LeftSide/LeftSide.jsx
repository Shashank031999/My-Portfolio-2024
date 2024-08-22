import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { Link } from "react-router-dom";

const IconTypography = { padding: "0px 12px 0px 0px", cursor: "pointer" };

const DetailsTypography = {
  fontSize: "14px",
  textAlign: "center",
  padding: "12px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 300,
};
const SubHeadingTypography = {
  textAlign: "center",
  padding: "10px",
  fontSize: "20px",
  fontWeight: 100,
  fontFamily: "Poppins, sans-serif",
};
const HeadingTypography = {
  textAlign: "center",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 200,
};
const EmailTypography = {
  textAlign: "center",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 200,
  fontSize:"0.9rem"
};

const boxLeftSide = {
  position: { xs: "static", sm: "fixed" },
  left: { sm: 0 },
  top: { sm: "10%" },
  width: { xs: "100%", sm: "50%" },
};

const linkCss = { textDecoration: "none", color: "white" };

const LeftSide = ({ fromRightSideComp }) => {
  
  const NavTypographyAbout = {
    padding: "5px",
    fontFamily: "Poppins, sans-serif",
    filter: fromRightSideComp == "about" ? "brightness(50)" : "brightness(0.5)",
    fontSize: fromRightSideComp == "about" ? "1.5rem" : "1rem",
  };
  const NavTypographyExperience = {
    padding: "5px",
    fontFamily: "Poppins, sans-serif",
    filter:
      fromRightSideComp == "experience" ? "brightness(50)" : "brightness(0.5)",
    fontSize: fromRightSideComp == "experience" ? "1.5rem" : "1rem",
  };
  const NavTypographyProjects = {
    padding: "5px",
    fontFamily: "Poppins, sans-serif",
    filter:
      fromRightSideComp == "projects" ? "brightness(50)" : "brightness(0.5)",
    fontSize: fromRightSideComp == "projects" ? "1.5rem" : "1rem",
  };

  return (
    <>
      <Box
        height={{ sm: "auto", xs: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={boxLeftSide}
      >
        <Typography variant="h3" sx={HeadingTypography}>
          Shashank Gupta
        </Typography>
        <Typography variant="h6" sx={EmailTypography}>
          guptashashank31999@gmail.com
        </Typography>
        <Typography variant="h5" sx={SubHeadingTypography}>
          Frontend Developer / MERN Stack Developer
        </Typography>

        <Typography variant="h6" sx={DetailsTypography}>
          I build pixel-perfect, engaging, and accessible digital experiences with React JS. I
          also Work on Backend with Node JS, Express JS, Mongodb. 
        </Typography>
        <Typography variant="h6" sx={DetailsTypography}>
          I  also use some frontend and backend  libraries like Material UI, Tailwind, CSS, SCSS React Redux Toolkit ,React Recoil, TanStack Query , GraphQL, React Strap, Bootstrap, Material Tables, Axios, Axios Intersaptors, Mutler, Json web token, Array to CSV converter, Formic Library, .

        </Typography>
        <Typography variant="h6" sx={DetailsTypography}>
          I  also use some graphs based libraries like Apex Charts , Chart JS Google Chart, Ant Charts, also use LeafLet for map implementation.
        </Typography>
        <Typography variant="h6" sx={DetailsTypography}>
         I also have knowledge of NectJS library.
        </Typography>

        <Typography sx={NavTypographyAbout}>About</Typography>
        <Typography sx={NavTypographyExperience}>Experience</Typography>
        <Typography sx={NavTypographyProjects}>Projects</Typography>

        <Box display="flex" alignItems="center" flexDirection="row" my={2}>
          <Typography sx={IconTypography}>
            <Link
              style={linkCss}
              target="_blank"
              to={"https://github.com/guptashashank31999?tab=repositories"}
            >
              <GitHubIcon titleAccess="Git Hub" />
            </Link>
          </Typography>
          <Typography sx={IconTypography}>
            <Link
              style={linkCss}
              to={"https://www.linkedin.com/in/shashank-gupta-3bb5402aa/"}
              target="_blank"
            >
              <LinkedInIcon titleAccess="LinkedIn" />
            </Link>
          </Typography>

          {/* <Typography sx={IconTypography}>
            <EmailIcon titleAccess="Email" />
          </Typography> */}

          <Typography sx={IconTypography}>
            <Link
              style={linkCss}
              to={"https://codesandbox.io/u/guptashashank31999"}
              target="_blank"
            >
              <ViewInArIcon titleAccess="Code Sandbox" />
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LeftSide;
