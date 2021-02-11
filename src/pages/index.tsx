import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MuiLink from "@material-ui/core/Link";
import styled from "styled-components";
import Link from "../styles/Link";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home: React.FC = () => (
  <Container maxWidth="sm">
    <Title>Home Page Title with styled-components</Title>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js 10.0.6
      </Typography>
      <Link href="/about" color="primary">
        Go to the about page
      </Link>
    </Box>
  </Container>
);

export default Home;
