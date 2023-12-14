"use strict";(self.webpackChunkfearlesss_application_2=self.webpackChunkfearlesss_application_2||[]).push([[413],{217:function(e,s,t){t.d(s,{BS:function(){return a},Sh:function(){return i},Zs:function(){return c},w:function(){return x}});t(791);var l=JSON.parse(localStorage.getItem("blogs"))||[],a=JSON.parse(localStorage.getItem("cards"))||[],r=JSON.parse(localStorage.getItem("users"))||[];JSON.parse(localStorage.getItem("login"));function i(e,s){if(r.find((function(s){return s.username===e})))alert("Username already registered");else{var t={username:e,password:s};r.push(t),localStorage.setItem("users",JSON.stringify(r)),window.location.href="/",alert("User Successfully Registered")}}function x(e,s,t,l,r){var i={id:e,link:s,img:t,heading:l,author:r};a.push(i),localStorage.setItem("cards",JSON.stringify(a))}function c(e,s,t,a,r,i,x,c,n,o,f,d){var m={id:e,link:s,img:t,heading:a,author:r,intro:i,quote:x,history:c,blogImg1:n,blogImg2:o,limitation:f,advantage:d};l.push(m),localStorage.setItem("blogs",JSON.stringify(l))}},413:function(e,s,t){t.r(s);t(791);for(var l=t(504),a=t(871),r=t(217),i=t(827),x=t(817),c=t(98),n=t(184),o=0;o<r.BS.length;o++)console.log(r.BS[o]);s.default=function(){(0,a.s0)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full",children:[(0,n.jsx)(c.Z,{className:"flex items-center justify-center md:px-5 w-full"}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center justify-start max-w-[1111px] mx-auto md:px-5 w-full",children:[(0,n.jsx)("div",{className:"flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full",children:(0,n.jsxs)("div",{className:"flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full",children:[(0,n.jsx)(i.zx,{className:"flex h-[76px] items-center justify-center w-[76px]",shape:"circle",color:"gray_300",size:"md",children:(0,n.jsx)(i.Ei,{className:"h-[50px]",src:"images/coding_icon_150x150.svg",alt:"microphone"})}),(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsxs)(i.xv,{className:"ml-0.5 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-gray-600",size:"txtMerriweatherBlack36",children:["All Posts"," "]}),(0,n.jsx)(i.xv,{className:"mt-[5px] text-2xl md:text-[22px] text-gray-601 sm:text-xl tracking-[0.12px]",size:"txtPublicSansRegular24",children:"View all the blog posts here"})]})]})}),(0,n.jsxs)(i.aV,{className:"sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full",orientation:"horizontal",children:[(0,n.jsx)(l.rU,{to:"/what-is-html",children:(0,n.jsx)("div",{className:"bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full",children:[(0,n.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full",style:{backgroundImage:"url('images/html_poster.png')"}}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-gray-600 w-full",size:"txtMerriweatherBold16",children:"An Overview of HTML: The Backbone of Web Development"}),(0,n.jsx)(i.xv,{className:"text-bluegray-600 text-sm",size:"txtPublicSansLight14",children:"By Prabal Tripathi"})]})]})})}),(0,n.jsx)(l.rU,{to:"/what-is-css",children:(0,n.jsx)("div",{className:"bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full",children:[(0,n.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full",style:{backgroundImage:"url('images/css_poster.png')"}}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-gray-600 w-full",size:"txtMerriweatherBold16",children:"Cascading Style Sheets (CSS) : Transforming Web Design ..."}),(0,n.jsx)(i.xv,{className:"text-bluegray-600 text-sm",size:"txtPublicSansLight14",children:"By Prabal Tripathi"})]})]})})}),(0,n.jsx)(l.rU,{to:"/what-is-react",children:(0,n.jsx)("div",{className:"bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full",children:[(0,n.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full",style:{backgroundImage:"url('images/react_poster.png')"}}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-gray-600 w-full",size:"txtMerriweatherBold16",children:"React JS : How it changed the internet"}),(0,n.jsx)(i.xv,{className:"text-bluegray-600 text-sm",size:"txtPublicSansLight14",children:"By Navya Sangwan"})]})]})})}),(0,n.jsx)(l.rU,{to:"/what-is-bootstrap",children:(0,n.jsx)("div",{className:"bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full",children:[(0,n.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full",style:{backgroundImage:"url('https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png')"}}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-gray-600 w-full",size:"txtMerriweatherBold16",children:"Bootstrap : The saviour for Front-end Developers"}),(0,n.jsx)(i.xv,{className:"text-bluegray-600 text-sm",size:"txtPublicSansLight14",children:"By Navya Sangwan"})]})]})})})]}),(0,n.jsx)("div",{className:"flex flex-col gap-5 items-center justify-start max-w-[1111px] mx-auto md:px-5 w-full",children:(0,n.jsx)(i.aV,{className:"sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full",orientation:"horizontal",children:r.BS.map((function(e,s){return(0,n.jsx)(l.rU,{to:"".concat(e.link),children:(0,n.jsx)("div",{className:"bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full",children:[(0,n.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full",style:{backgroundImage:"url('".concat(e.img,"')")}}),(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 items-start justify-start w-full",children:[(0,n.jsx)(i.xv,{className:"text-base text-gray-600 w-full",size:"txtMerriweatherBold16",children:e.heading}),(0,n.jsxs)(i.xv,{className:"text-bluegray-600 text-sm",size:"txtPublicSansLight14",children:["By ",e.author]})]})]})})},s)}))})})]})}),(0,n.jsx)(x.Z,{className:"bg-gray-600 flex items-center justify-center mt-[100px] md:px-5 w-full"})]})})}}}]);
//# sourceMappingURL=413.90810adc.chunk.js.map