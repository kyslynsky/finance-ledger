import { ContactFormProps } from "./ContactForm.props";
import styles from "./ContactForm.module.css";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { PTag } from "../PTag";
import SvgWarning from "../../iconComponents/Warning";
import { Button } from "../Button";
import { toast } from "react-toastify";

interface IFormData {
  name?: string;
  email: string;
}

const encode = (data: { [x: string]: string | number | boolean }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const ContactForm = ({
  className,
  ...props
}: ContactFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        reset();
        toast(
          `Thank you! We recive you request ${data.name}. This form will send data to Netlify by POST method`,
          {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: true,
          }
        );
        console.log(data);
      })
      .catch(error => alert(error));
  };

  const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <form
      name="contact"
      action="/contact"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
      className={cn(styles.form, className)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your name"
        autoComplete="true"
        {...register("name")}
      />

      <input
        className={cn(styles.input, {
          [styles.errors]: !watch("email"),
        })}
        type="email"
        placeholder="Enter email*"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: emailRegex,
            message: "Email is required",
          },
        })}
      />

      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => (
          <PTag color="red" className={styles.errorMsg}>
            <SvgWarning />
            {message}
          </PTag>
        )}
      />
      <Button type="submit" appearence="primary" className={styles.submitBtn}>
        Send
      </Button>
    </form>
  );
};
