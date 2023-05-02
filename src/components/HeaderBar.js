import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export default function HeaderBar() {
    return (
      <div className="header-bar-wrapper">
        <div className="logo-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 26" fill="none" stroke="#FFF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z" />
          </svg>
        </div>
        <div className="navigation-bar-wrapper">
          <div className="explore-wrapper">
            EXPLORE
          </div>
          <div className="navigation-bar">
            <div className="navblock">
              Pens
            </div>
            <div className="navblock">
              Projects
            </div>
            <div className="navblock">
              Posts
            </div>
            <div className="navblock">
              Collections
            </div>
            <div className="navblock">
              <div className="sparkwrapper">
                Spark
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-bar-wrapper">
          <div className="create-btn">
            Create <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="mag-glass-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="login-btn">
            Log In
          </div>
          <div className="signup-btn">
            Sign Up
          </div>
        </div>
      </div>
    );
  }