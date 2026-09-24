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
                I'm Jyoti Burnwal, a Senior Full Stack Engineer with 6+ years
                of experience building scalable web applications, backend
                systems, APIs, and developer tools. I specialize in React,
                Node.js, TypeScript, Python, and Golang.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                I work across frontend and backend engineering, including
                API design, microservices, databases, distributed systems,
                performance optimization, and system architecture. I enjoy
                turning complex technical problems into reliable and
                maintainable software.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                I'm also available for freelance projects, contract
                engineering engagements, software consulting, and startup
                development. Whether you need a full-stack application,
                backend service, API, performance improvement, or help
                designing a scalable system, I can work across the product
                and engineering lifecycle.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                }}
              >
                Beyond coding, I've led engineering teams, contributed to
                open-source projects, and enjoy building products and tools
                that solve real problems.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}