import React from "react";
import styled from "styled-components";

import { FaDiscord, FaInstagram,} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      

      

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h1>Food For Everyone</h1>
            <h3>Food for everyone</h3>
            <p>Registered as hunger heroes.
                Under indian society registrationact XXI 1860
            </p>

            <p>all the donations are tax-exempted as eligible under section 80G of the income tax act 1961</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Get involved</h3>
            <p>Donate</p>
            <p>Request for food</p>
            <p>Partner with us</p>
            
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} FoodForAll. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;