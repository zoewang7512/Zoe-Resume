import React from "react";
//i18n
import { useTranslation, Trans } from "react-i18next";
//mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
//icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
//assets
import zoe from "../assets/Zoe.svg";

const Home = () => {
  const { t } = useTranslation();
  const { title, subTitle } = t("homePage");

  //csustom badge
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#10d2ff",
      color: "#10d2ff",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      height: 50,
      width: 50,
      borderRadius: 50,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box
      id="home"
      bgcolor={"background.default"}
      color={"text.primary"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box p={4} sx={{ maxWidth: "900px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <Card elevation={0}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="fontWeightBold"
              >
                {title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" mb={4}>
                <Trans
                  i18nKey={subTitle}
                  components={{
                    1: <strong />,
                    2: <span style={{ color: "#10d2ff" }} />,
                  }}
                />
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <IconButton
                  href="https://github.com/zoewang7512/"
                  target="_blank"
                  rel="gitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/chia-jou-wang/"
                  target="_blank"
                  rel="linkin"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="mailto:zoework0401@gmail.com"
                  target="_blank"
                  rel="email"
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>

          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Zoe Wang" src={zoe} sx={{ width: 250, height: 250 }} />
          </StyledBadge>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
