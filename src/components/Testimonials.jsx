import React from "react";
import styled from "styled-components";
import phone from "../assets/phone.jpg";
import email from "../assets/email.jpg";
import address from "../assets/address.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Contact Us</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p align="center"><i>
          Mobile No:
          </i>
            
          </p>
          <div className="info">
            <img src={phone} alt="" />
            <div className="details">
              <h4>9082478239</h4>
              <span> </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p align="center"><i>Address (Navi Mumbai Office)</i>
            
          </p>
          <div className="info">
            <img src={address} alt="" />
            <div className="details">
              <h4>Sector 6, Kalamboli, Navi mumbai- 410 218</h4>
              <span> </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p align="center"><i>
            E-mail Id
          </i>
            
          </p>
          <div className="info">
            <img src={email} alt="" />
            <div className="details">
              <h4>pramodyadavpy08@gmail.com</h4>
              <span> </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
