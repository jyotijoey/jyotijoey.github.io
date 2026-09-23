import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box id="about" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "#7CFF6B",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  mb: 2,
                }}
              >
                ABOUT ME
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                Engineer.
                <br />
                Builder.
                <br />
                Problem Solver.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                I'm a Senior Full Stack Engineer with 6+ years of experience
                building scalable web applications and backend systems.
                My primary stack includes React, Node.js, TypeScript,
                Python, and Golang.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                I enjoy working on complex engineering problems — from
                designing APIs and microservices to improving application
                performance and building reliable developer tools.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                }}
              >
                Beyond coding, I've led engineering teams, contributed to
                open-source projects, and enjoy turning ideas into products
                that people can actually use.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}