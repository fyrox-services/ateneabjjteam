import css from "@/styles/components/MainForm.module.css";

export function MainForm() {
  return (
    <form className={`fade-in move-up ${css.Form}`}>
      <h2>rellena los campos</h2>

      <div>
        <label htmlFor="">nombre</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">teléfono</label>
        <input type="tel" />
      </div>
    </form>
  );
}
