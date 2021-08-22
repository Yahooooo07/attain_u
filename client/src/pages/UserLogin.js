import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../actions/users";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#123C69",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserLogin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data, actions) => {
    dispatch(userLogin(data, actions, history));
  };

  return (
    <Formik
      initialValues={{
        user_email: "",
        user_password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ submitForm, isSubmitting, values }) => (
        <Container
          component="main"
          maxWidth="xs"
          style={{ background: "#FFC629" }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ color: "#123C69" }}
            >
              User Log in
            </Typography>
          </div>
          <Form>
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="user_email"
              autoComplete="email"
              disabled={false}
              InputLabelProps={{ color: "secondary" }}
              color="secondary"
            />
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="user_password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={false}
              InputLabelProps={{ color: "secondary" }}
              color="secondary"
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={submitForm}
            >
              Log In
            </Button>
            <Typography
              component="h3"
              variant="h6"
              style={{ color: "#123C69" }}
            >
              New User? <u onClick={() => history.push("/signup")}>Signup</u>
            </Typography>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
