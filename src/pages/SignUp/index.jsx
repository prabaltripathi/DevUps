import React from "react";

import { Button, Img, Line, List, Text , Input } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { addCardData , addBlogData , addUsers } from "BlogsData";
import { func } from "prop-types";

const users = JSON.parse(localStorage.getItem("users")) || [];

function  addNewUsers(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    addUsers(username,password);


    

    
 }   






const signUp = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="mt-[100px] flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              
              <div className=" bg-white-A700 flex flex-col items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  Username 

                  <input type="text" id="username" className="ml-[5rem] w-[20rem]" placeholder="keshav"></input>
                </Text>  
                <Text
                  className="mt-[42px] text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                  size="txtMerriweatherBold24Bluegray600"
                >
                  Password 
                  <input type="password" id="password" className="ml-[5rem] w-[20rem]" placeholder="password@123"></input>
                </Text>     
                  <br></br>
                  <br></br>
                  
                  {/* <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between mt-[50px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[31%] sm:w-full">
                      <Img
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        src="images/img_ellipse5.png"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-bluegray-600 sm:text-xl"
                          size="txtPublicSansSemiBold24"
                        >
                          By <textarea id="newAuthor" className="h-[5rem]" placeholder="Author Name"></textarea>
                        </Text>
                        <Text
                          className="mt-[5px] text-bluegray-600 text-sm"
                          size="txtPublicSansLight14"
                        >
                          {
                          }
                        </Text>
                      </div>
                    </div>
                    
                    <Button onClick={()=> {
                    //

              } }
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="3xl"
                  >
                    Post
                  </Button>

                  </div> */}
                  <Button onClick={()=> {
                    addNewUsers();

              } }
                    className="cursor-pointer leading-[normal] min-w-[221px] rounded-[35.5px] shadow-bs1 text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.12px]"
                    color="indigo_900"
                    size="3xl"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
          
          <Footer className="bg-gray-600 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default signUp;
