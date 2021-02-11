import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
import Link from "../styles/Link";

const About: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js 10.0.6
        </Typography>
        <Link href="/">Go to the main page</Link>
      </Box>
    </Container>
  );
};

export default About;
