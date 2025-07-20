import css from "@/styles/components/Forms.module.css";
import { useStore } from "@nanostores/react";
import { modality } from "@/stores";
import { useForm } from "react-hook-form";
import { useHandleForm } from "@/hooks/useHandleForm";
import type { ContactForm } from "@/types";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";

interface Props {
  style?: string;
}

export function ContactForm({ style = "" }: Props) {
  const $modality = useStore(modality);

  const { defaultValues, loading, onSubmit, submitStateContent } =
    useHandleForm<ContactForm>(
      {
        name: "",
        email: "",
        phone: "",
        msg: "",
        legal: false,
      },
      "/forms/meeting-2-form"
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
        <p>nos pondremos en contacto contigo para acordar el día</p>
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
      </div>

      {/*  email */}

      <div className={css.Field}>
        <label htmlFor="email">email</label>
        <input id="email" type="email" />
      </div>

      {/*  teléfono */}

      <div className={css.Field}>
        <label htmlFor="phone">teléfono</label>
        <input id="phone" type="tel" />
      </div>

      {/*  mensaje */}

      <div className={`${css.Field} ${css.Msg}`}>
        <label htmlFor="msg">mensaje</label>
        <textarea id="msg"></textarea>
      </div>

      {/* política de privacidad  */}

      <div className={`${css.Field} ${css.Legal}`}>
        <label htmlFor="legal">
          <input id="legal" type="checkbox" />
          <span>
            Acepto la
            <a href="/legal/politica-privacidad/"> política de privacidad</a>
          </span>
        </label>
      </div>

      {/* submit */}

      <button className={`btn ${css.Submit}`} type="submit">
        enviar
      </button>
    </form>
  );
}
