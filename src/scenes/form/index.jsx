import { Box, TextField, boxClasses } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  adress1: '',
  adress2: '',
};

const phoneRegExp =
  /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup
    .string()
    .email("Merci d'entrer un e-mail valide")
    .required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, "Merci d'entrer un numéro valide")
    .required('required'),
  adress1: yup.string().required('required'),
  adress2: yup.string().required('required'),
});

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <button onClick={() => console.log(userSchema)}>log</button>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            ></Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
