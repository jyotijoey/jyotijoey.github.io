import {
    Box,
    //   Button,
    Card,
    CardContent,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
    {
        title: "NearMe",
        description:
            "A location-based discovery platform for finding nearby companies, offices, jobs and opportunities.",
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "PostGIS"],
    },
    {
        title: "VS Code Debugging Tool",
        description:
            "An open-source developer tool designed to improve debugging workflows inside VS Code.",
        technologies: ["TypeScript", "VS Code API", "Node.js"],
    },
    {
        title: "Scalable Backend Systems",
        description:
            "Backend services built around microservices, GraphQL, Redis and RabbitMQ with a focus on performance and scalability.",
        technologies: ["Node.js", "GraphQL", "Redis", "RabbitMQ"],
    },
];

export default function Projects() {
    return (
        <Box id="projects" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        color: "#7CFF6B",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        mb: 2,
                    }}
                >
                    PROJECTS
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        mb: 6,
                    }}
                >
                    Things I've built.
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 3,
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ height: "100%" }}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "rgba(124,255,107,0.35)",
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: 3,
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            mt: 2,
                                            lineHeight: 1.7,
                                            flexGrow: 1,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        sx={{
                                            flexWrap: "wrap",
                                            gap: 1,
                                            mt: 3,
                                        }}
                                    >
                                        {project.technologies.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                            />
                                        ))}
                                    </Stack>

                                    {/* <Button
                    variant="text"
                    endIcon={<ArrowUpRight size={17} />}
                    sx={{
                      mt: 3,
                      alignSelf: "flex-start",
                      color: "#7CFF6B",
                    }}
                    href="#"
                  >
                    View Project
                  </Button> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}