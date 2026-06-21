import { useStore } from "@nanostores/react";
import { season } from "@/stores";

export function SeasonToggle() {
  const $season = useStore(season);
  const isVerano = $season === "verano";

  function toggle() {
    season.set(isVerano ? "normal" : "verano");
  }

  return (
    <div className="season-toggle">
      <span className={!isVerano ? "active" : ""}>Normal</span>
      <button
        onClick={toggle}
        className={`toggle-btn ${isVerano ? "verano" : "normal"}`}
        aria-label="Cambiar temporada"
      >
        <span className="thumb" />
      </button>
      <span className={isVerano ? "active" : ""}>Verano ☀️</span>
    </div>
  );
}
