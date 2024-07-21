import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start text-white"
      style={{
        maxHeight: "644px",
        overflow: "hidden",
        fontSize: "14px",
        padding: "10px",
      }}
    >
      <MDBContainer className="p-3 pb-0">
        <section className="mb-3">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
            style={{ fontSize: "12px" }}
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="mb-3">
          <p style={{ fontSize: "16px", margin: "0 10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2" style={{ fontSize: "15px" }}>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  placeholder="Email Address"
                  className="mb-3"
                  style={{ fontSize: "12px" }}
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn
                  outline
                  color="light"
                  type="submit"
                  className="mb-3"
                  style={{ fontSize: "12px" }}
                >
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* <section className="mb-3">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-3 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: "14px" }}>
                Resources
              </h5>

              <ul className="list-unstyled mb-0" style={{ fontSize: "12px" }}>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  ></a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 3
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-3 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: "14px" }}>
                Links
              </h5>

              <ul className="list-unstyled mb-0" style={{ fontSize: "12px" }}>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 3
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-3 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: "14px" }}>
                Links
              </h5>

              <ul className="list-unstyled mb-0" style={{ fontSize: "12px" }}>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 3
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-3 mb-md-0">
              <h5 className="text-uppercase" style={{ fontSize: "14px" }}>
                Links
              </h5>

              <ul className="list-unstyled mb-0" style={{ fontSize: "12px" }}>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 3
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section> */}
      </MDBContainer>

      <div
        className="text-center p-2"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          fontSize: "12px",
          margin: "0 10px",
        }}
      >
        &copy; {new Date().getFullYear()} Copyright:
        <a
          className="text-white"
          style={{ textDecoration: "none" }}
          href="https://www.facebook.com/ThanhDang.203/"
        >
          By ThanhDangDepTrai
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
