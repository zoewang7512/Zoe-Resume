import React, { useState } from "react";
//i18n
import { useTranslation } from "react-i18next";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
//assets
import caDemoSvg from "../assets/ca-demo.svg";
import caDemoGif from "../assets/ca-demo.gif";
import dpDemoSvg from "../assets/3dp-demo.svg";
import dpDemoGif from "../assets/3dp-demo.gif";
import letivDemoPng from "../assets/letiv-demo.png";
import letivDemoGif from "../assets/letiv-demo.gif";

const Projects = () => {
  const [imageCa, setImageCa] = useState(caDemoSvg);
  const [image3dp, setImage3dp] = useState(dpDemoSvg);
  const [imageLetiv, setImageLetiv] = useState(letivDemoPng);
  //i18n
  const { t } = useTranslation();
  const {
    project1Title,
    project1Text,
    project2Title,
    project2Text,
    project3Title,
    project3Text,
  } = t("projectsPage");

  // 2021 Canada Travelogue
  const chipProject1Data = [
    { key: 0, label: "react" },
    { key: 1, label: "react router" },
    { key: 2, label: "firestore" },
    { key: 3, label: "material ui" },
    { key: 4, label: "i18next" },
    { key: 5, label: "react map gl" },
  ];

  //3D列印機設備管理面板
  const chipProject2Data = [
    { key: 0, label: "react" },
    { key: 1, label: "react router" },
    { key: 2, label: "firebase" },
    { key: 3, label: "react-bootstrap" },
    { key: 4, label: "chart.js" },
  ];

  //An e-commerce site
  const chipProject3Data = [
    { key: 0, label: "react" },
    { key: 1, label: "react router" },
    { key: 2, label: "fetch api" },
    { key: 3, label: "tailwind css" },
    { key: 4, label: "react icons" },
    { key: 4, label: "skeleton loading" },
  ];

  const ProductsCard = ({ title, text, chipData, codeLink, liveLink }) => {
    return (
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardContent>
          <Typography
            variant="subtitle2"
            fontWeight="fontWeightBold"
            textAlign="center"
            gutterBottom
          >
            {title}
          </Typography>

          <Typography variant="body2" mb={2}>
            {text}
          </Typography>
          {chipData.map((data) => {
            return (
              <Chip
                clickable
                key={data.id}
                label={data.label}
                size="small"
                sx={{ mr: 1 }}
              />
            );
          })}
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            endIcon={<GitHubIcon />}
            target="_blank"
            href={codeLink}
            sx={{ textTransform: "none" }}
          >
            Code
          </Button>

          <Button
            endIcon={<OpenInNewIcon />}
            target="_blank"
            href={liveLink}
            sx={{ textTransform: "none" }}
          >
            LiveDemo
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box
      id="projects"
      bgcolor={"background.default"}
      color={"text.primary"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {/* title */}
      <Typography
        color="primary"
        fontWeight="fontWeightBold"
        variant="h6"
        display="block"
        gutterBottom
      >
        PROJECTS
      </Typography>
      <Box
        sx={{
          p: 2,
          maxWidth: 900,
        }}
      >
        {/**2021 Canada Travelogue*/}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          <Box
            component="img"
            src={imageCa}
            onMouseEnter={() => setImageCa(caDemoGif)}
            onMouseOut={() => setImageCa(caDemoSvg)}
            alt="ca demo"
            sx={{
              p: 1,
              height: { xs: 197, md: 280 },
              width: { xs: 350, md: 497 },
            }}
          />
          <ProductsCard
            title={project1Title}
            text={project1Text}
            chipData={chipProject1Data}
            codeLink={"https://github.com/zoewang7512/2021-Canada-Travelogue"}
            liveLink={"https://zoewang7512.github.io/2021-Canada-Travelogue/"}
          />
        </Stack>

        {/**3D-Printer-Dashboard*/}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          {/* card */}
          <ProductsCard
            title={project2Title}
            text={project2Text}
            chipData={chipProject2Data}
            codeLink={"https://github.com/zoewang7512/3D-Printer-Dashboard/"}
            liveLink={"https://dp-react-firebase.web.app/"}
          />
          {/* pic */}
          <Box
            component="img"
            src={image3dp}
            onMouseEnter={() => setImage3dp(dpDemoGif)}
            onMouseOut={() => setImage3dp(dpDemoSvg)}
            alt="3dp demo"
            sx={{
              p: 1,
              height: { xs: 197, md: 280 },
              width: { xs: 350, md: 497 },
            }}
          />
        </Stack>

        {/**project3 */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          {/* pic */}
          <Box
            component="img"
            src={imageLetiv}
            onMouseEnter={() => setImageLetiv(letivDemoGif)}
            onMouseOut={() => setImageLetiv(letivDemoPng)}
            alt="letiv demo"
            sx={{
              p: 1,
              height: { xs: 197, md: 280 },
              width: { xs: 350, md: 497 },
            }}
          />
          {/* card */}
          <ProductsCard
            title={project3Title}
            text={project3Text}
            chipData={chipProject3Data}
            codeLink={"https://github.com/zoewang7512/Letiv"}
            liveLink={"https://letiv.vercel.app/"}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Projects;
