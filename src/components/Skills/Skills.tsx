import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Golang", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases & Systems",
    skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
  },
  {
    title: "Engineering",
    skills: ["Microservices", "Docker", "Git", "System Design"],
  },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#7CFF6B",
            fontWeight: 600,
            letterSpacing: "0.08em",
            mb: 2,
          }}
        >
          TECH STACK
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.04em",
            mb: 6,
          }}
        >
          Tools I build with.
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={group.title}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2.5, fontWeight: 700 }}>
                    {group.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {group.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}