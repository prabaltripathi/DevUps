import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const isLoggedIn = JSON.parse(localStorage.getItem("login"));

function LoggedInComponent() {
  return <p>Welcome! You are logged in.</p>;
  }
  
  function LoggedOutComponent() {
  return <div>
    <Link to="/signup">
          <Img
            className="ml-[2rem] sm:hidden mb-0.5 md:ml-[0] ml-[4px] w-[50px]"
            src="../images/Register_icon.svg"
            alt="register"

          />
          </Link>
          <Link to="/signup">
          <Text
              className="ml-[1rem] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Register
            </Text>
            </Link>
  </div>;
  }



const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img className="h-6 w-6" src="../images/code-icon-100x100.svg" alt="edit" />
              <Link to="/"
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl uppercase"
                size="txtNunitoSansExtraBold24"
              >
                DevUp
              </Link>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start w-1/5 sm:w-full">
              <Link to="/"
                className="text-indigo-900 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18Indigo900"
              >
                Home
              </Link>
              <Line className="bg-indigo-900 h-px mt-1 w-[64%]" />
            </div>
            {/* <Link to="/bloggerdetails"
              className="text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Authors
            </Link> */}
            <Link to="/all"
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Blogs
            </Link>
            <Link to="/login"
              className="ml-[30px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Login
            </Link>
            
            {isLoggedIn ? (
            <Link to="/new-post">
            <Text
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
            POST
            </Text>
            </Link>
            ):(
            <Text
              className="ml-[29px] text-indigo-900 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              <button onClick={()=>{
                alert("Only Registered Users can Post");
              }}>POST</button>
            </Text>)}
          </div>

          
          {isLoggedIn ? (
            <LoggedInComponent />
          ) : (
            <LoggedOutComponent />
          )}


        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
