import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import css from "./ContactForm.module.css"
import { useDispatch} from "react-redux";
import {addContact} from "../../redux/contacts/operations"

const User = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(15, "Too long, max 15 letters!")
    .required("This field is required!"),
  number: Yup.number()
    .positive("Invalid character!")
    .moreThan(6, "Too short, min 7 numbers!"),
});


export default function ContactForm() {
  
  const dispatch = useDispatch();
  

  const handleContacts = (values, actions) => {
    actions.resetForm();
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={User}
      onSubmit={handleContacts}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label className={css.label}>Name</label>

          <Field type="text" className={css.input} name="name" />
          <ErrorMessage
            name="name"
            component="span"
            className={css.error}
          />
        </div>

        <div className={css.formGroup}>
          <label className={css.label}>Number</label>
          <Field type="tel" className={css.input} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  )
}
