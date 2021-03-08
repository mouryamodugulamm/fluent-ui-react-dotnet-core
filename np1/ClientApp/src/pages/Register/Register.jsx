import {
  classNamesFunction,
  DefaultButton,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  styled,
  TextField,
} from "@fluentui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { ThemeToggle } from "./../../components/molecules/ThemeToggle";
import { useAuthentication } from "./../../components/util/authentication";
import apiClient from "./../../services/apiClient";

const getClassNames = classNamesFunction();

function Register({ theme, styles }) {
  const { isAuthenticated, principal, logout } = useAuthentication();
  const { handleSubmit, control, errors } = useForm();
  const [error, setError] = React.useState();
  const history = useHistory();

  const classNames = getClassNames(styles, { theme });

  return (
    <Stack className={classNames.root}>
      {isAuthenticated && (
        <Stack tokens={{ childrenGap: "1em" }}>
          <h3 className={classNames.title}>
            {principal.username}, you are already signed in.
          </h3>
          <Stack horizontal tokens={{ childrenGap: "1em" }}>
            <PrimaryButton
              onClick={() => history.push("/")}
              iconProps={{ iconName: "Home" }}
            >
              Go to Home
            </PrimaryButton>
            <DefaultButton onClick={logout} iconProps={{ iconName: "SignOut" }}>
              Logout
            </DefaultButton>
          </Stack>
        </Stack>
      )}

      {!isAuthenticated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack horizontal horizontalAlign="end" verticalAlign="center">
            <ThemeToggle as={DefaultButton} />
          </Stack>
          <h3 className={classNames.title}>Register</h3>
          <Stack
            tokens={{
              childrenGap: "1em",
            }}
          >
            <Controller
              as={TextField}
              control={control}
              label="Username"
              autoComplete="username"
              errorMessage={getErrorMessage("username")}
              autoFocus
              minLength={3}
              maxLength={32}
              defaultValue=""
              name="username"
              rules={{
                required: "Please enter your username",
                minLength: {
                  value: 3,
                  message: "Please enter your username",
                },
                maxLength: { value: 32, message: "Username is too long" },
              }}
            />

            <Controller
              as={
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  errorMessage={getErrorMessage("password")}
                />
              }
              name="password"
              control={control}
              defaultValue=""
              minLength={4}
              maxLength={64}
              rules={{
                required: "Please enter your password",
                minLength: {
                  value: 4,
                  message: "Please enter your password",
                },
                maxLength: { value: 64, message: "Password is too long" },
              }}
            />

            <Controller
              as={
                <TextField
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  errorMessage={getErrorMessage("password")}
                />
              }
              name="confirmPassword"
              control={control}
              defaultValue=""
              minLength={4}
              maxLength={64}
              rules={{
                required: "Please re-type password",
                minLength: {
                  value: 4,
                  message: "Please enter your password",
                },
                maxLength: { value: 64, message: "Password is too long" },
              }}
            />

            <Stack
              horizontal
              horizontalAlign="end"
              tokens={{ childrenGap: "1em" }}
            >
              <RouterLink to="/login">Already had an account?</RouterLink>
              <PrimaryButton type="submit">Register</PrimaryButton>
            </Stack>
            {error && (
              <MessageBar
                messageBarType={MessageBarType.error}
                onDismiss={() => setError(null)}
              >
                {error}
              </MessageBar>
            )}
          </Stack>
        </form>
      )}
    </Stack>
  );

  function onSubmit(values) {
    setError(null);
    remoteAuthService(values)
      .then((identity) => {
        // login(identity);
        // history.replace(from);
      })
      .catch(setError);
  }

  function getErrorMessage(name) {
    return errors[name]?.message;
  }
}

const remoteAuthService = async (values) => {
  console.log(values);

  const result = await apiClient.post("/Account/Register", {
    eMail: values.username,
    fullName: values.username,
    password: values.password,
    confirmPassword: values.confirmPassword,
  });

  console.log(result.data);
  console.log(result.status);
};

function getStyles({ theme }) {
  return {
    root: {
      margin: "10em auto",
      width: "30em",
      backgroundColor: theme.palette.neutralLighter,
      padding: theme.spacing.l2,
      borderRadius: theme.effects.roundedCorner2,
    },
    title: {
      ...theme.fonts.xLargePlus,
      marginTop: 0,
    },
  };
}

export default styled(Register, getStyles);
