//i18n
import { useTranslation, Trans } from "react-i18next";
import Box from "@mui/material/Box";
//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
//svg
import avatarWhite from "../assets/avatar-white.svg";
import avatar from "../assets/avatar.svg";
import MuiIcon from "../assets/MuiIcon.svg";
import TailwindIcon from "../assets/TailwindIcon.svg";
import CssIcon from "../assets/CssIcon.svg";
import FirebaseIcon from "../assets/FirebaseIcon.svg";
import Html5Icon from "../assets/Html5Icon.svg";
import ReactIcon from "../assets/ReactIcon.svg";
import JavascriptIcon from "../assets/JavascriptIcon.svg";

const About = ({ mode }) => {
  const { t } = useTranslation();
  const { text } = t("aboutPage");

  return (
    <Box
      id="about"
      bgcolor={"background.default"}
      color={"text.primary"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box p={4} sx={{ maxWidth: "900px" }}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <Box
            component="img"
            sx={{
              maxHeight: 236,
              maxWidth: 268,
            }}
            alt="avatar"
            src={mode === "dark" ? avatarWhite : avatar}
          />

          <Card
            sx={{ height: "100%", width: { xs: 420, md: 540 } }}
            elevation={0}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="primary"
                fontWeight="fontWeightBold"
              >
                ABOUT ME
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={2}>
                <Trans
                  i18nKey={text}
                  components={{
                    1: <br />,
                  }}
                />
              </Typography>

              {/**skill */}
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  variant="button"
                  fontWeight="fontWeightBold"
                  sx={{ fontSize: "16px" }}
                  noWrap
                >
                  Tech Stack |
                </Typography>
                <IconButton>
                  <img src={Html5Icon} alt="html5" width={25} height={25} />
                </IconButton>
                <IconButton>
                  <img src={CssIcon} alt="css" width={25} height={25} />
                </IconButton>
                <IconButton>
                  <img src={JavascriptIcon} alt="js" width={25} height={25} />
                </IconButton>
                <IconButton>
                  <img src={ReactIcon} alt="react" width={25} height={25} />
                </IconButton>

                <IconButton>
                  <img src={MuiIcon} alt="mui" width={25} height={25} />
                </IconButton>
                <IconButton>
                  <img
                    src={TailwindIcon}
                    alt="tailwind"
                    width={25}
                    height={25}
                  />
                </IconButton>
                <IconButton>
                  <img
                    src={FirebaseIcon}
                    alt="firebase"
                    width={25}
                    height={25}
                  />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
