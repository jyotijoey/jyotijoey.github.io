import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "5+", label: "Tech Ecosystem" },
  { value: "3", label: "Engineers Led" },
  { value: "30+", label: "Projects Built" },
];

export default function Stats() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.02)",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "rgba(124,255,107,0.35)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 800,
                      color: "#7CFF6B",
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 0.5, fontSize: "0.9rem" }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}