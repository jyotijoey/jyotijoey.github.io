import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const links = ["About", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(11, 13, 16, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            flexGrow: 1,
            letterSpacing: "-0.04em",
          }}
        >
          JB<span style={{ color: "#7CFF6B" }}>.</span>
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
          }}
        >
          {links.map((link) => (
            <Button
              key={link}
              color="inherit"
              href={`#${link.toLowerCase()}`}
              sx={{ textTransform: "none" }}
            >
              {link}
            </Button>
          ))}

          <Button
            color="inherit"
            href="https://github.com/jyotijoey"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: "none" }}
          >
            GitHub
          </Button>

          <Button
            color="inherit"
            href="https://www.linkedin.com/in/jyotiburnwal"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: "none" }}
          >
            LinkedIn
          </Button>
        </Box>

        <Button
          variant="outlined"
          href="#contact"
          sx={{
            ml: 2,
            borderColor: "#7CFF6B",
            color: "#7CFF6B",
            textTransform: "none",
            "&:hover": {
              borderColor: "#7CFF6B",
              background: "rgba(124,255,107,0.08)",
            },
          }}
        >
          Let's Talk
        </Button>
      </Toolbar>
    </AppBar>
  );
}