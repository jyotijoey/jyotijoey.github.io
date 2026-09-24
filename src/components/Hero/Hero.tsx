import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(124,255,107,0.08)",
          filter: "blur(100px)",
          top: "15%",
          right: "10%",
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            sx={{
              color: "#7CFF6B",
              fontWeight: 600,
              mb: 2,
              letterSpacing: "0.08em",
            }}
          >
            SENIOR FULL STACK ENGINEER · FREELANCE · CONTRACT
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5.5rem",
              },
              lineHeight: 1,
              letterSpacing: "-0.06em",
              maxWidth: 900,
            }}
          >
            Building products
            <br />
            that <span style={{ color: "#7CFF6B" }}>scale.</span>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 4,
              maxWidth: 650,
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}
          >
            I'm Jyoti Burnwal, a Senior Full Stack Engineer with 6+ years
            of experience building performant web applications, scalable
            backend systems, and developer-focused tools using React,
            Node.js, TypeScript, Python, and Golang. Available for freelance
            and contract software engineering work.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 5 }}
          >
            <Button
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#contact"
              startIcon={<Mail size={18} />}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </motion.div>

        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}