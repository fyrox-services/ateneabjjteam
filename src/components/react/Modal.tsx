import { Close } from "@/components/icons/Close";
import { isModalActive, modalContent, modality } from "@/stores";
import css from "@/styles/components/Modal.module.css";
import { useStore } from "@nanostores/react";
import { MainForm } from "./MainForm";
import { Hours } from "./Hours";

export function Modal() {
  function closeModal() {
    isModalActive.set(false);
    document.body.classList.remove("not-scrollable");
    modalContent.set("form");
    modality.set("");
  }

  const $isModalActive = useStore(isModalActive);
  const $modalContent = useStore(modalContent);

  function renderModalContent() {
    if ($modalContent === "form") return <MainForm />;
    if ($modalContent === "hours") return <Hours />;
  }

  return (
    $isModalActive && (
      <div className={`${css.Modal} fade-in`}>
        <div className={`wrapper ${css.WrapModal}`}>
          <button
            id="btn-close-modal"
            className={css.Close}
            onClick={closeModal}
          >
            <Close size={30} />
          </button>

          {renderModalContent()}
        </div>
      </div>
    )
  );
}
