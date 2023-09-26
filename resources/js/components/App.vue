<template>
    <div>
      <header>
        <div class="px-3 py-2 custom-bg-color text-white navbar-with-shadow">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <span class="my-2 my-lg-0 me-lg-auto text-white text-decoration-none title-text">CRUD-APP</span>
              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;font-family: 'Nunito', sans-serif;"><svg class="bi d-block mx-auto mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 21q-.625 0-1.063-.438T3 19.5v-1.9l4-3.55V21H4.5ZM8 21v-4h8v4H8Zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.438 1.063T19.5 21H17ZM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .537.088T13 3.9l2 1.775L3 16.25Z"/></svg>Inicio</router-link>
                </li>
                <li>
                  <router-link to="/products/create" class="nav-link text-white" style="text-decoration: none; color: white;font-family: 'Nunito', sans-serif;"><svg class="bi d-block mx-auto mb-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 9h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21ZM3 21V3h18v8.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.013t-.487.062V11H7v2h6.1q-.425.425-.787.925T11.675 15H7v2h4.075q-.05.25-.063.488T11 18q0 .825.15 1.538T11.675 21H3Z"/></svg>Añadir producto</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  
      <div style="margin-left: 300px; margin-right: 300px;">
          <div class="card-body">
            <div class="container-fluid">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <svg viewBox="0 0 120 16">
          <defs> 
            <mask id="xxx">
              <circle cx="7" cy="12" r="40" fill="#fff" />
            </mask>
            
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="
                    1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 13 -9" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
              <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
            </defs> 

            <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
            <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
        
            <g class="gooeff"/>
            <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
            <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
            <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
            <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
                    
          </svg>
        </footer>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
    .custom-bg-color {
      background-color: #5874fc; 
    }
    .title-text {
      font-family: 'Nunito', sans-serif; 
      font-size: 36px; 
      font-weight: bold;
    }
    .navbar-with-shadow {
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2); 
    }
    .nav-link {
      transition: background-color 0.3s, color 0.3s, box-shadow 0.3s; 
      border-radius: 10px; 
    }

    .nav-link:hover {
      background-color: #fc5874; 
      color: #ffffff; 
      box-shadow: 0 0 10px rgba(252, 88, 116, 0.8); 
      border-radius: 10px; 
    }
    
    @import url("https://fonts.googleapis.com/css?family=Lato:400,400i,700");

    body {
      font-family: Lato, sans-serif;
    }

    footer {
      width: 100vw;
      position: fixed;
      bottom: 0;
    }
    footer div {
      background-color:#4478e3;
      margin: -5px 0px 0px 0px;
      padding:0px;
      color: #fff;
      text-align:center;
    }
    svg {
      width:100%;
    }
    .arrow {
      stroke-width: .3px;
      stroke:yellow;
    }
    .topball {
      animation: ball 1.5s ease-in-out;
      animation-iteration-count:infinite;
      animation-direction: alternate;
      animation-delay: 0.3s;
      cursor:pointer;
    }

    .wave {
      animation: wave 3s linear;
      animation-iteration-count:infinite;
      fill: #4478e3;
    }
    .drop {
      fill: transparent;
      animation: drop 5s ease infinite normal;
      stroke: #4478e3;
      stroke-width:0.5;
      opacity:.6; 
      transform: translateY(80%);
    }
    .drop1 {
      transform-origin: 20px 3px;
    }
    .drop2 {
      animation-delay: 3s;
      animation-duration:3s;
      transform-origin: 25px 3px;
    }
    .drop3 {
      animation-delay: -2s;
      animation-duration:3.4s;
      transform-origin: 16px 3px;
    }
    .gooeff {
        filter: url(#goo);
    }
    #wave2 {
      animation-duration:5s;
      animation-direction: reverse;
      opacity: .6
    }
    #wave3 {
      animation-duration: 7s;
      opacity:.3;
    }
    @keyframes drop {
      0% {
        transform: translateY(80%); 
        opacity:.6; 
      }
      80% {
        transform: translateY(80%); 
        opacity:.6; 
      }
      90% { 
        transform: translateY(10%) ; 
        opacity:.6; 
      }
      100% { 
        transform: translateY(0%) scale(1.5);  
        stroke-width:0.2;
        opacity:0; 
      }
    }
    @keyframes wave {
      to {transform: translateX(-100%);}
    }
    @keyframes ball {
      to {transform: translateY(20%);}
    }

  </style>
  