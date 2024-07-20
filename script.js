const data = document.getElementById('data')
const mainData = document.getElementById('mainData')
const addStyle = (index) => {
  document.querySelectorAll('.step-num').forEach((btn, btnIndex) => {
    btnIndex + 1 === index ? btn.classList.add('now-step') : btn.classList.remove('now-step');
  })
}
const setUp = () => {
  document.title = 'Personal Intro'
  // here form method="post"
  data.innerHTML = ` 
    <div class="intro">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form action="#" id="user-form" > 
      <div>
        <label for="name">Name</label> 
      <input type="text" name="name" id="name" placeholder="e.g. Abdullah ElMetwali" autocomplete="name" title="Username must be true" required>
      </div>
     <div>
       <label for="email">Email Address</label> 
      <input type="email" name="email" id="email" placeholder="e.g. abdullahelmetwali@lorem.com" autocomplete="email" title="Email address must be validated" required>
     </div>
      <div>
        <label for="phone">Phone Number</label> 
      <input type="number"  name="phone" id="phone" placeholder="e.g. +1 234 567 890" title="Phone number must be between 1 and 12 characters" autocomplete="tel-national" required>
      </div>
    </form>
  <button type="submit" class="next-step" form="user-form">
    Next Step
  </button>
  `
  addStyle(1);
  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    navigating('/plan')
  }
}
const planSelection = () => {
  document.title = 'Select Plan'
  addStyle(2)
  mainData.innerHTML =
    `
    <section id="data">
    <div class="intro">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <section class="plan-data">
        <div class="plan-box">
          <div class="img-box"><img src="/assets/images/icon-arcade.svg" alt="icon-arcade"></div>
          <div>
            <h2>Acrade</h2>
            <span class="price">$9/mo</span>
            <p class="free">2 months free</p>
          </div>
        </div>
        <div class="plan-box">
          <div class="img-box"><img src="/assets/images/icon-advanced.svg" alt="icon-advanced"></div>
          <div>
            <h2>Advanced</h2>
            <span class="price">$9/mo</span>
            <p class="free">2 months free</p>
          </div>
        </div>
        <div class="plan-box">
          <div class="img-box"><img src="/assets/images/icon-pro.svg" alt="icon-pro"></div>
          <div>
            <h2>Pro</h2>
            <span class="price">$9/mo</span>
            <p class="free">2 months free</p>
          </div>
        </div>
      </section>
      <div class="month-year">
        <p class="monthly">Monthly</p>
        <div>
        <input type="checkbox" id="check" >
        <label for="check" class="button"></label>
        </div>
        <p class="yearly">Yearly</p>
      </div>
      </section>
      <div class="btns">
        <button type="button">
          Go Back
        </button>
        <button type="button">
      Next Step
    </button>
      </div>
    `
  const path = location.pathname;
  path === '/plan'
  document.querySelector('.yearly').style.opacity = '0.5'; // Yearly Paragraph

  document.querySelector(".button").addEventListener('click', () => { // Toggle Opacities
    if (!document.querySelector("#check").checked) {
      document.querySelector('.monthly').style.opacity = '0.5'
      document.querySelector('.yearly').style.opacity = '1'
    } else {
      document.querySelector('.monthly').style.opacity = '1'
      document.querySelector('.yearly').style.opacity = '0.5'
    }
  })
}
const routering = () => {
  console.log(location)
  const path = location.pathname;
  if (path === '/') {
    setUp();
  } else if (path === '/plan') {
    planSelection();
  } else {
    document.getElementById('allContent').innerHTML = '<h1>404 Not Found</h1>';
  }
}
routering()
const navigating = (path) => {
  history.pushState({}, '', path);
  routering();
}
window.onpopstate = routering;