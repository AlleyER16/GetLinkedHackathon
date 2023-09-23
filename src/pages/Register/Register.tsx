import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import api_client from "../../api/client";

import useAlert from "../../hooks/useAlert/useAlert";

import Header from "../../components/Header/Header";

import registerImg from "../../assets/img/register-img.png";
import registerImg1 from "../../assets/img/register-img-1.png";
import registerWalk from "../../assets/img/register-walk.png";

import back from "../../assets/img/back.svg";

import flare12 from "../../assets/img/flare-12.png";
import flare13 from "../../assets/img/flare-13.png";

import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";
import RegisterSuccessModal from "../../components/RegisterSuccessModal/RegisterSuccessModal";

const Register = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const [registerData, setRegisterData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: true,
  });

  const submitBtnRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  const [message, setMessage, clearMessage] = useAlert();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!registerData.privacy_poclicy_accepted)
      return setMessage(
        "warning",
        "You have to accept the terms and conditions"
      );

    if (Object.values(registerData).some((v) => !v))
      return setMessage("warning", "Fill in all fields");

    submitBtnRef.current.innerHTML = `<div class="ripple ripple--sm"><div></div><div></div></div>`;
    submitBtnRef.current.setAttribute("disabled", "disabled");

    api_client({
      url: "/hackathon/registration",
      method: "POST",
      data: JSON.stringify(registerData),
    })
      .then((res) => {
        setShowSuccessModal(true);
        clearRegisterData();
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          setMessage("warning", "Make sure to fill in valid data");
        } else {
          setMessage("error", err.message);
        }
      })
      .finally(() => {
        submitBtnRef.current.innerHTML = "Register Now";
        submitBtnRef.current.removeAttribute("disabled");
      });
  };

  const clearRegisterData = () => {
    setRegisterData({
      team_name: "",
      phone_number: "",
      email: "",
      group_size: "",
      project_topic: "",
      category: "",
      privacy_poclicy_accepted: true,
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setRegisterData((regData) => ({
      ...regData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    api_client({
      method: "GET",
      url: "/hackathon/categories-list",
    })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        // do nothing
      });
  }, []);

  useEffect(() => {
    clearMessage();
  }, [clearMessage, registerData]);

  return (
    <>
      <RegisterSuccessModal
        show={showSuccessModal}
        closeHandler={() => setShowSuccessModal(false)}
      />
      <div className="contact-section">
        <img src={flare12} alt="" className="contact-section__flare-1" />
        <img src={flare13} alt="" className="contact-section__flare-2" />
        <Header custom />
        <section className="register">
          <div className="container register__container">
            <div className="register__left">
              <img src={registerImg} alt="" />
            </div>
            <div className="register__main register-main">
              <img
                src={starFaint}
                alt=""
                className="register-main__star-1 star"
              />
              <img
                src={starLight}
                alt=""
                className="register-main__star-2 star"
              />
              <div className="register__back-block">
                <button
                  className="register__back"
                  onClick={() => navigate("/")}
                >
                  <img src={back} alt="" />
                </button>
                Register
              </div>
              <div className="register__img-block">
                <img src={registerImg1} alt="" className="register__img" />
              </div>
              <div className="register__text">
                Be part of this movement!
                <img src={registerWalk} alt="" />
              </div>
              <h3 className="register__heading">Create your account</h3>
              <form className="register__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Team’s Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter the name of your group"
                    name="team_name"
                    value={registerData.team_name}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Enter your phone number"
                    name="phone_number"
                    value={registerData.phone_number}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    name="email"
                    value={registerData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Project Topic</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="What is your group project topic"
                    name="project_topic"
                    value={registerData.project_topic}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="register__form-grid">
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-select"
                      name="category"
                      value={registerData.category}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                    >
                      <option value="">Select your category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Group Size</label>
                    <select
                      className="form-select"
                      name="group_size"
                      value={registerData.group_size}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                    >
                      <option value="">Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
                <div className="register__form-footer">
                  <p className="register__form-confirmation">
                    Please review your registration details before submitting
                  </p>
                  <div>
                    <label className="register__accept">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={registerData.privacy_poclicy_accepted}
                        onChange={(e) =>
                          setRegisterData((regData) => ({
                            ...regData,
                            privacy_poclicy_accepted: e.target.checked,
                          }))
                        }
                      />
                      I agree with the terms and conditions and privacy policy
                    </label>
                  </div>
                </div>
                {message}
                <div className="register__btn grid-full">
                  <button className="btn" ref={submitBtnRef}>
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
