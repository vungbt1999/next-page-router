import { ButtonBase, InputForm, InputPasswordForm } from '@/components/form-base';
import LogoSquare from '@/components/logo/logo-square';
import { SEO } from '@/components/seo';
import { FastField, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import * as Yup from 'yup';

export default function EmployeeLoginPage() {
  const router = useRouter();

  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username required.'),
    password: Yup.string().required('Password required')
  });

  const onSignIn = async (values: any) => {
    const result = await signIn('credentials', { ...values, redirect: false });
    if (result?.ok && result.status === 200) router.replace('/');
  };

  return (
    <Fragment>
      <SEO />
      <div className="container sm:w-full md:w-1/2 xl:w-1/3 mx-auto py-28">
        <LogoSquare />
        <h1 className="my-4 text-3xl font-semibold text-primary">Login as Jobseeker</h1>
        <h2 className="text-secondary font-normal">Step into Success: Your Ideal Job Awaits</h2>
        <div className="mt-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSignIn}
          >
            {() => (
              <Form className="flex-1 flex flex-col w-full">
                <div className="">
                  <FastField
                    name="username"
                    component={InputForm}
                    label="Username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="mt-6">
                  <FastField
                    name="password"
                    component={InputPasswordForm}
                    label="Password"
                    placeholder="Password"
                    required
                  />
                </div>
                <ButtonBase type="submit" className="mt-5 w-full !text-base" label="Login" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
}
