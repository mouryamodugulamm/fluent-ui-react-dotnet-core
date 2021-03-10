import React from "react";
import {
  DefaultButton,
  IconButton,
  Persona,
  PrimaryButton,
  Stack,
  Text,
  TextField,
} from "@fluentui/react";
import ProfileStyles, { ProfileTokens } from "./styles/Profile.Styles";
import { TestImages } from "@uifabric/example-data";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";

const EditProfile = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { userId } = useParams();
  return (
    <div>
      <h3>Edit Your Profile</h3>

      <Stack tokens={ProfileTokens.sectionStack}>
        <Stack.Item className={ProfileStyles.headerImage}>
          <Persona
            coinSize={72}
            imageUrl={TestImages.personaMale}
            title="Mourya Vamsi"
          />
        </Stack.Item>
        <Stack horizontal tokens={ProfileTokens.header}>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: "add" }}
              ariaLabel="Add another"
              title="Add another profile"
            />
          </Stack.Item>
          <Stack.Item>
            <Text>{userId}</Text>
          </Stack.Item>
        </Stack>

        <Stack.Item tokens={ProfileTokens.sectionStack}>
          <TextField
            label="First Name"
            errorMessage={formik.errors.firstName}
            name="firstName"
            onChange={formik.handleChange}
          />

          <TextField
            label="Last Name"
            errorMessage={formik.errors.lastName}
            name="lastName"
            onChange={formik.handleChange}
          />

          <TextField
            label="E-mail"
            errorMessage={formik.errors.email}
            name="email"
            onChange={formik.handleChange}
          />
          <Stack horizontal tokens={ProfileTokens.sectionStack}>
            <PrimaryButton
              text="Save"
              onClick={() => {
                formik.submitForm();
              }}
            />
            <DefaultButton
              text="Back"
              onClick={() => {
                history.push("/profile");
              }}
            />
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  );
};

export default EditProfile;
