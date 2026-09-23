import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Developer",
    company: "GlobalLogic",
    period: "Jul 2024 – Present",
    points: [
      "Building scalable full-stack applications using React, Node.js and TypeScript.",
      "Working on backend services, APIs and distributed systems.",
      "Improving application performance and engineering workflows.",
    ],
  },
  {
    role: "Consultant",
    company: "Deloitte",
    period: "Nov 2023 – Jul 2024",
    points: [
      "Developed enterprise applications and backend services.",
      "Worked across APIs, databases and distributed systems.",
    ],
  },
  {
    role: "Associate Engineer",
    company: "ElasticRun",
    period: "May 2022 – Nov 2023",
    points: [
      "Built and optimized software systems with a focus on scalability.",
      "Worked on backend services and performance improvements.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "RoaDo",
    period: "Jun 2021 – Apr 2022",
    points: [
      "Developed web applications and backend services.",
      "Contributed across the product development lifecycle.",
    ],
  },
  {
    role: "Freelance Website Developer",
    company: "Freelance",
    period: "May 2021 – Jun 2021",
    points: [
      "Designed and developed websites based on client requirements.",
    ],
  },
  {
    role: "Business Process Delivery Associate",
    company: "Accenture",
    period: "Nov 2020 – May 2021",
    points: [
      "Worked on technology-driven business process workflows.",
    ],
  },
  {
    role: "Software Development Trainee",
    company: "Appifax",
    period: "May 2019 – Oct 2020",
    points: [
      "Started my software engineering journey working on application development.",
    ],
  },
];

export default function Experience() {
  return (
    <Box id="experience" >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#7CFF6B",
            fontWeight: 600,
            letterSpacing: "0.08em",
            mb: 2,
          }}
        >
          EXPERIENCE
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.04em",
            mb: 7,
          }}
        >
          Where I've worked.
        </Typography>

        <Box>
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "220px 1fr",
                  },
                  gap: { xs: 2, md: 5 },
                  py: 4,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {experience.period}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {experience.role}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#7CFF6B",
                      mt: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2.5, mt: 2 }}>
                    {experience.points.map((point) => (
                      <Typography
                        component="li"
                        key={point}
                        color="text.secondary"
                        sx={{
                          mb: 1,
                          lineHeight: 1.7,
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}