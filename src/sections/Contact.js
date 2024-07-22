import React, { useState, useRef } from "react";
//i18n
import { useTranslation } from "react-i18next";
//emailjs
import emailjs from "@emailjs/browser";
//mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
//icons
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const { t } = useTranslation();
  const { line1, line2, line3, locationText } = t("contactPage");

  const form = useRef();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (userName === "") {
      setUserNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    if (userName && email && message) {
      console.log(userName, email, message);

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setOpen(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <Box
      id="contact"
      bgcolor={"background.default"}
      color={"text.primary"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Alert severity="success" onClose={handleClose}>
          Mail sent!
        </Alert>
      </Dialog>
      <Box
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} container direction="row" alignItems="center">
            <EmailIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              GET IN TOUCH
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form ref={form} autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                onChange={(e) => setUserName(e.target.value)}
                required
                variant="outlined"
                type="text"
                sx={{ mb: 3 }}
                fullWidth
                name="from_name"
                value={userName}
                error={userNameError}
              />
              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                type="email"
                sx={{ mb: 3 }}
                fullWidth
                name="from_email"
                value={email}
                error={emailError}
              />
              <TextField
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
                variant="outlined"
                name="message"
                value={message}
                error={messageError}
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 3 }}
              />
              <Fab variant="extended" type="submit" color="primary">
                Send Message
              </Fab>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" mb={4} mr={2}>
              {line1}
              <br />
              {line2}
              <br />
              {line3}
            </Typography>

            <Stack direction="row" spacing={2} mb={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Typography variant="body1">zoework0401@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} mb={1} alignItems="center">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body1">{locationText}</Typography>
            </Stack>

            <Link
              href="https://www.linkedin.com/in/chia-jou-wang/"
              underline="none"
              target="_blank"
              color="inherit"
            >
              <Stack direction="row" spacing={2} mb={1} alignItems="center">
                <LinkedInIcon fontSize="small" />
                <Typography variant="body1">Zoe Wang</Typography>
              </Stack>
            </Link>
            <Link
              href="https://github.com/zoewang7512/"
              underline="none"
              target="_blank"
              color="inherit"
            >
              <Stack direction="row" spacing={2} mb={1} alignItems="center">
                <GitHubIcon fontSize="small" />
                <Typography variant="body1">zoewang7512</Typography>
              </Stack>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
