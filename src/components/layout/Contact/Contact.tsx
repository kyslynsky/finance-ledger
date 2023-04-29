import styles from "./Contact.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { Button } from "../../common/Button";
import { PTag } from "../../common/PTag";
import SvgWarning from "../../iconComponents/Warning";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface IFormData {
  name?: string;
  email: string;
}

export const Contact = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => console.log(data);

  return (
    <Section className={styles.contactSection} id="about">
      <div className={styles.contactBg}></div>
      <div className={styles.wrapper}>
        <HTag tag="h2">Request Callback</HTag>

        <form
          name="contact"
          action="/contact"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Enter email*"
            {...register("email", { required: "Email is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <PTag color="black">
                <SvgWarning />
                {message}
              </PTag>
            )}
          />
          <Button type="submit" appearence="green">
            Send
          </Button>
        </form>
      </div>
    </Section>
  );
};
