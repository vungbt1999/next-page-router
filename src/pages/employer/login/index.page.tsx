import { SEO } from '@/components/seo';
import { Fragment } from 'react';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonBase, InputForm, InputPasswordForm } from '@/components/form-base';

export default function EmployerLoginPage() {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username required.'),
    password: Yup.string().required('Password required')
  });

  const onSignIn = (values: any) => {
    console.log('values====>', values);
  };

  return (
    <Fragment>
      <SEO />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSignIn}>
        {() => (
          <Form className="flex-1 flex flex-col w-full">
            <div className="">
              <FastField
                name="username"
                component={InputForm}
                label="Username"
                placeholder="Username"
              />
            </div>
            <div className="mt-6">
              <FastField
                name="password"
                component={InputPasswordForm}
                label="Password"
                placeholder="Password"
              />
            </div>
            <ButtonBase type="submit" className="mt-5 w-full !text-base" label="Login" />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
