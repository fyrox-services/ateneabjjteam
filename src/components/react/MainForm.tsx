import css from "@/styles/components/MainForm.module.css";

interface Props {
  style?: string;
}

export function MainForm({ style = "" }: Props) {
  return (
    <form className={`fade-in-move-up  ${css.Form} ${css[style]}`}>
      <header>
        <h2>rellena los campos</h2>
        <p>nos pondremos en contacto contigo para acordar el día</p>
      </header>

      {/*  nombre */}

      <div className={css.Field}>
        <label htmlFor="name">nombre</label>
        <input id="name" type="text" />
      </div>

      {/*  email */}

      <div className={css.Field}>
        <label htmlFor="name">email</label>
        <input id="email" type="email" />
      </div>

      {/*  teléfono */}

      <div className={css.Field}>
        <label htmlFor="phone">teléfono</label>
        <input id="phone" type="tel" />
      </div>

      {/*  modalidad */}

      <div className={`${css.Field} ${css.Modality}`}>
        <label className={css.Label} htmlFor="modalidad">
          modalidad
        </label>
        <select className={css.Select} id="modalidad">
          <option defaultValue={""} disabled value="">
            -- Selccione --
          </option>
          <option value="">kimono - gi</option>
          <option value="">grappling - nogi</option>
          <option value="">niños</option>
        </select>
      </div>

      {/*  horario */}

      <div className={`${css.Field} ${css.Hours}`}>
        <label className={css.Label} htmlFor="hours">
          horario
        </label>
        <select className={css.Select} id="hours">
          <option defaultValue={""} disabled value="">
            -- Selccione --
          </option>
          <option value="">10:30 - 11:30</option>
          <option value="">11:30 - 12:30</option>
          <option value="">14:00 - 15:15</option>
        </select>
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
