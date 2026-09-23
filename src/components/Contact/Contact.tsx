import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 14 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            CONTACT
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            Let's build something
            <br />
            <span style={{ color: "#7CFF6B" }}>great together.</span>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 3,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: 600,
            }}
          >
            Have an interesting project, engineering opportunity, or idea?
            I'd love to hear about it.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 5 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Mail size={18} />}
              endIcon={<ArrowUpRight size={17} />}
              href="mailto:your-email@example.com"
              sx={{
                px: 3,
                py: 1.5,
              }}
            >
              Email Me
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Download size={18} />}
              href="/resume.pdf"
              target="_blank"
              sx={{
                px: 3,
                py: 1.5,
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}