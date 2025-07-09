import { Close } from "@/components/icons/Close";
import { isModalActive, modalContent } from "@/stores";
import css from "@/styles/components/Modal.module.css";
import { useStore } from "@nanostores/react";
import { MainForm } from "./MainForm";

export function Modal() {
  function closeModal() {
    isModalActive.set(false);
    document.body.classList.remove("not-scrollable");
  }

  const $isModalActive = useStore(isModalActive);
  const $modalContent = useStore(modalContent);

  return (
    $isModalActive && (
      <div className={`${css.Modal} fade-in`}>
        <div className={`wrapper ${css.WrapModal}`}>
          <button
            id="btn-close-modal"
            className={css.Close}
            onClick={closeModal}
          >
            <Close size={40} />
          </button>

          <div className="">
            {$modalContent === "form" ? (
              <>
                <MainForm />
              </>
            ) : (
              <>
                <p>horarios</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
