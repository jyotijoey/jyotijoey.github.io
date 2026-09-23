import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, borderTop: "1px solid", borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          color="text.secondary"
          variant="body2"
        >
          © {new Date().getFullYear()} Jyoti Burnwal. Built with React.
        </Typography>
      </Container>
    </Box>
  );
}