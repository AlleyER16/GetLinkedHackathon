import cls from "classnames";

import modalImg from "../../assets/img/modal-img.png";

import starPurple from "../../assets/img/star-purple.png";
import starPurpleSm from "../../assets/img/star-purple-sm.png";
import starFaint from "../../assets/img/star-faint.png";

const RegisterSuccessModal = ({
  show,
  closeHandler,
}: {
  show: boolean;
  closeHandler: () => void;
}) => {
  return (
    <>
      <div className={cls("modal", show && "modal--open")}>
        <img src={starPurple} alt="" className="modal__star-1 star" />
        <img src={starFaint} alt="" className="modal__star-2 star" />
        <img src={starPurpleSm} alt="" className="modal__star-3 star" />
        <img src={modalImg} alt="" className="modal__img" />
        <h3 className="modal__heading">
          Congratulations <br />
          you have successfully Registered!
        </h3>
        <p className="modal__text">
          Yes, it was easy and you did it! <br />
          check your mail box for next step
        </p>
        <button className="btn modal__btn" onClick={closeHandler}>
          Back
        </button>
      </div>
      {show ? (
        <div className="modal-overlay" onClick={closeHandler}></div>
      ) : null}
    </>
  );
};

export default RegisterSuccessModal;
