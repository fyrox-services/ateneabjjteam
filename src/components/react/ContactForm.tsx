import css from "@/styles/components/Forms.module.css";
import { useForm } from "react-hook-form";
import { useHandleForm } from "@/hooks/useHandleForm";
import type { ContactForm } from "@/types";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { FeedbackMessage } from "./FeedbackMessage";

interface Props {
  style?: string;
}

export function ContactForm({ style = "" }: Props) {
  const { defaultValues, loading, onSubmit, submitStateContent } =
    useHandleForm<ContactForm>(
      {
        name: "",
        email: "",
        phone: "",
        msg: "",
        legal: false,
      },
      {
        route: "/forms/contact",
        successMsg: FEEDBACK_MESSAGES.SUCCESS.SUCCESS_SENDING,
        action: () => {
          console.log("hacer esto");
        },
      }
    );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`fade-in-move-up  ${css.Form} ${css[style]}`}
    >
      <header>
        <h2>rellena los campos</h2>
        <p className={css.Tagline}>
          nos pondremos en contacto contigo para acordar el día
        </p>
      </header>

      {/*  nombre */}

      <div className={css.Field}>
        <label htmlFor="name">nombre</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: FEEDBACK_MESSAGES.ERROR.NAME,
          })}
        />
        <FeedbackMessage>{errors.name?.message}</FeedbackMessage>
      </div>

      {/*  email */}

      <div className={css.Field}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: FEEDBACK_MESSAGES.ERROR.EMAIL,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: FEEDBACK_MESSAGES.ERROR.EMAIL_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.email?.message}</FeedbackMessage>
      </div>

      {/*  teléfono */}

      <div className={css.Field}>
        <label htmlFor="phone">teléfono</label>
        <input
          id="phone"
          type="tel"
          {...register("phone", {
            required: FEEDBACK_MESSAGES.ERROR.PHONE,
            pattern: {
              value: /^[\d\s()+\-]{7,}$/,
              message: FEEDBACK_MESSAGES.ERROR.PHONE_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.phone?.message}</FeedbackMessage>
      </div>

      {/*  mensaje */}

      <div className={`${css.Field} ${css.Msg}`}>
        <label htmlFor="msg">mensaje</label>
        <textarea
          placeholder="Tengo una duda sobre..."
          id="msg"
          {...register("msg", {
            minLength: {
              message: FEEDBACK_MESSAGES.ERROR.MSG_TOO_SHORT,
              value: 5,
            },
            required: FEEDBACK_MESSAGES.ERROR.MSG,
          })}
        ></textarea>
        <FeedbackMessage>{errors.msg?.message}</FeedbackMessage>
      </div>

      {/* política de privacidad  */}

      <div className={`${css.Field} ${css.Legal}`}>
        <label htmlFor="legal">
          <input
            id="legal"
            type="checkbox"
            {...register("legal", {
              required: FEEDBACK_MESSAGES.ERROR.LEGAL,
            })}
          />
          <span>
            Acepto la{" "}
            <a target="_blank" href="/es/legal/politica-privacidad/">
              política de privacidad
            </a>
          </span>
        </label>
        <FeedbackMessage>{errors.legal?.message}</FeedbackMessage>
      </div>

      {/* submit */}

      <button
        disabled={loading !== "off"}
        className={`${css.Submit} ${css[loading]}`}
        type="submit"
      >
        {submitStateContent()}
      </button>
    </form>
  );
}
