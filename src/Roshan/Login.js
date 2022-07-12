import React, { useState } from "react";
import logo from "../components/images/parivar.svg";
import eyeopen from "../components/images/eye.svg";
import eye from "../components/images/eye-off.svg";
import "../index.css";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [secure, setSecure] = useState(true);

  return (
    <div className="vh-100 container_main">
      <div className="all_center h-100 w-100 ">
        <div class="card card_body">
          <div className="all_center">
            <img src={logo} class="img-fluid image_logo" alt="..." />
          </div>
          <div class="card-body pt-2">
            <h5 className="text-center text-black">User Login</h5>
            <div class="input-group mb-3 pt-2 p-2 item_center">
              <input
                type="text"
                class="form-control-lo"
                id="loginfrom"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input_icon">
              <div class="input-group mb-3 p-2 pt-0 item_center">
                <input
                  type={secure ? "password" : "text"}
                  class="form-control-lo"
                  id="loginfrom1"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
                <button
                  onClick={() => setSecure(!secure)}
                  class="eye_btn"
                  type="button"
                  id="button-addon1"
                >
                  {/* <img src={secure ? eye : eyeopen} className="" alt=".." /> */}
                </button>
              </div>
            </div>
            <div class="input-group mb-3 p-2 item_center">
              <button
                onClick={() => navigate("/dashboard")}
                type="button"
                class="btn btn-primary"
                aria-describedby="basic-addon1"
              >
                Login
              </button>
            </div>
            <h6 className="text-center fw-bolder ">
              Forget <span className=" text-primary fw-normal">password </span>{" "}
              ?
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
