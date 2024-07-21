const mainData = document.getElementById('mainData')
const collectedData = new Map();
const error = document?.querySelector('.error')
const goBack = () => {
  window.history.back();
  routering()
}
const addStyle = (index) => {
  document.querySelectorAll('.step-num').forEach((btn, btnIndex) => {
    btnIndex + 1 === index ? btn.classList.add('now-step') : btn.classList.remove('now-step');
  })
}
const personalInfo = () => {
  document.title = 'Personal Intro'
  addStyle(1);
  // here form method="post"
  mainData.innerHTML = ` 
  <section id="data">
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
  </section>
  `
  document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    navigating('/plan')
  })
}
const planSelection = () => {
  document.title = 'Select Plan';
  addStyle(2)
  mainData.innerHTML = `
        <section id="data">
            <div class="intro">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <p class="error"></p>
            <section class="plan-data">
                <div class="plan-box">
                    <div class="img-box"><img src="./assets/images/icon-arcade.svg" alt="icon-arcade"></div>
                    <div>
                        <h2>Acrade</h2>
                        <span class="price"><span>90</span></span>
                        <p class="free">2 months free</p>
                    </div>
                </div>
                <div class="plan-box">
                    <div class="img-box"><img src="./assets/images/icon-advanced.svg" alt="icon-advanced"></div>
                    <div>
                        <h2>Advanced</h2>
                        <span class="price"><span>120</span></span>
                        <p class="free">2 months free</p>
                    </div>
                </div>
                <div class="plan-box">
                    <div class="img-box"><img src="./assets/images/icon-pro.svg" alt="icon-pro"></div>
                    <div>
                        <h2>Pro</h2>
                        <span class="price"><span>150</span></span>
                        <p class="free">2 months free</p>
                    </div>
                </div>
            </section>
            <div class="month-year">
                <p class="monthly">Monthly</p>
                <div>
                    <input type="checkbox" id="check">
                    <label for="check" class="button"></label>
                </div>
                <p class="yearly">Yearly</p>
            </div>
            <div class="btns">
                <button type="button" id="go-back">Go Back</button>
                <button type="button" id="next-step">Next Step</button>
            </div>
        </section>
    `;

  const checkBox = document.getElementById('check');
  const prices = document.querySelectorAll('.price span');

  // Update the price view and opacity based on checkbox state
  function updatePlanPrices() {
    const isChecked = checkBox.checked;
    prices.forEach(price => {
      price.innerHTML = isChecked ?
        `$${parseInt(price.innerHTML.match(/\d+/)[0]) * 10}/yr` :
        `$${parseInt(price.innerHTML.match(/\d+/)[0]) / 10}/mo`
    });
    document.querySelectorAll('.free').forEach(free => {
      free.style.display = isChecked ? 'block' : 'none'
    })
    document.querySelector('.monthly').style.opacity = isChecked ? '0.5' : '1';
    document.querySelector('.yearly').style.opacity = isChecked ? '1' : '0.5';
  }
  updatePlanPrices();

  // For every changing
  checkBox.addEventListener('change', updatePlanPrices);

  document.querySelectorAll('.plan-box').forEach(box => {
    box.addEventListener('click', (e) => {
      document.querySelector('.selectedBox')?.classList.remove('selectedBox')
      e.currentTarget.classList.add('selectedBox')
    })
  })
  document.getElementById('go-back').addEventListener('click', goBack);

  document.getElementById('next-step').addEventListener('click', (e) => {
    if (document.querySelector('.selectedBox')) {
      collectedData.set('planName', `${document.querySelector('.selectedBox h2').innerHTML}`)
      collectedData.set('planPrice', `${document.querySelector('.selectedBox .price span').innerHTML}`)
      navigating('add-ons')
    } else {
      e.preventDefault();
      document.querySelector('.error').textContent = 'Please select a box'
    }
  })


}
const addOns = () => {
  document.title = 'Add-Ons'
  addStyle(3)
  mainData.innerHTML =
    `
    <section id="data">
      <div class="intro">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <p class='error'></p>
      <section class="add-boxs">
        <div class="add-box">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div><input type="checkbox" name="checkAdd" class="checkAdd"></div>
          <div>
            <h2>Online service</h2>
            <p>Access to multiplayer games</p>
          </div>
          </div>
          <div class="price">
            <span>+$1/mo</span>
          </div>
        </div>
        <div class="add-box">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div><input type="checkbox" name="checkAdd" class="checkAdd"></div>
          <div>
            <h2>Larger storage</h2>
            <p>Extra 1TB of cloud save</p>
          </div>
          </div>
          <div class="price">
            <span>+$2/mo</span>
          </div>
        </div>
        <div class="add-box">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div><input type="checkbox" name="checkAdd" class="checkAdd"></div>
          <div>
            <h2>Customizable profile</h2>
            <p>Custom theme on your profile</p>
          </div>
          </div>
          <div class="price">
            <span>+$2/mo</span>
          </div>
        </div>
      </section>
      <div class="btns">
                <button type="button" id="go-back">Go Back</button>
                <button type="button" id="next-step">Next Step</button>
            </div>
    </section>
    `
  const prices = document.querySelectorAll('.price span')
  prices.forEach(price => {
    if (collectedData.get('planPrice').includes('yr')) {
      price.innerHTML = `+$${parseInt(price.innerHTML.match(/\d+/)[0]) * 10}/yr`
    }
  })
  const addBoxs = document.querySelectorAll('.add-box');
  const allAddsArray = new Set();

  addBoxs.forEach(box => {
    const boxData = {
      name: box.querySelector('h2')?.innerHTML,
      price: box.querySelector('span')?.innerHTML
    };

    box.addEventListener('click', () => {
      const checkBox = box.querySelector('.checkAdd');
      checkBox.checked = !checkBox.checked;

      if (checkBox.checked) {
        box.classList.add('selectedBox');
        checkBox.setAttribute('active', true);
        allAddsArray.add(boxData);
      } else {
        box.classList.remove('selectedBox');
        checkBox.removeAttribute('active');
        allAddsArray.delete(boxData);
      }
      collectedData.set('addData', allAddsArray)
    });
  });

  document.getElementById('next-step').addEventListener('click', () => {
    allAddsArray.size === 0 ? document.querySelector('.error').innerHTML = 'Please choose minimum one from add-ons' : navigating('/summary')
  })
  document.getElementById('go-back').addEventListener('click', goBack);
}
const summary = () => {
  document.title = 'Summary'
  addStyle(4)
  mainData.innerHTML =
    `
    <section id="data">
       <div class="intro">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
        <p class="error"></p>
        <section class="confirm-data">
          <div class="flexed">
            <div class="confirm-plan">
              <h2></h2>
              <a href="/plan" style="text-decoration: underline;">Change</a>
            </div>
            <div>
              <span class="price" style="color: var(--marine); font-weight: 600; font-size: 1rem;">$9/mo</span>
            </div>
          </div>
          <hr style="margin: 1rem;">
          <div class='plan-collector'>
          </div>
        </section>
        <div class="total flexed" style="padding: 1rem;">
          <h2></h2>
          <div></div>
        </div>
        <div class="btns">
          <button type="button" id="go-back">Go Back</button>
          <button type="button" id="confirm">Confirm</button>
        </div>
    </section>
  `
  const totalPriceArr = []
  document.querySelector('.price').textContent = `${collectedData.get('planPrice')}`
  totalPriceArr.push(parseInt(collectedData.get('planPrice').match(/\d+/)[0]))
  const planName = document.querySelector('.confirm-plan h2')

  collectedData.get('addData').forEach(data => {
    const p = document.createElement('p');
    const span = document.createElement('span');
    const div = document.createElement('div')
    div.className = 'flexed';

    p.textContent = data.name;
    span.textContent = data.price;

    div.appendChild(p);
    div.appendChild(span);
    document.querySelector('.plan-collector').appendChild(div);
    totalPriceArr.push(parseInt(data.price.match(/\d+/)[0]))
  })
  const totalPrice = totalPriceArr.reduce((accPrice, currPrice) => accPrice + currPrice, 0)
  if (collectedData.get('planPrice').includes('yr')) {
    planName.textContent = `${collectedData.get('planName')} (Yearly)`;
    document.querySelector('.total h2').textContent = 'Total (per year)';
    document.querySelector('.total div').textContent = `$${totalPrice}/yr`;
  } else {
    planName.textContent = `${collectedData.get('planName')} (Monthly)`;
    document.querySelector('.total h2').textContent = 'Total (per month)';
    document.querySelector('.total div').textContent = `$${totalPrice}/mo`;
  }
  document.getElementById('go-back').addEventListener('click', goBack);
  document.getElementById('confirm').addEventListener('click', () => {
    mainData.innerHTML =
      ` 
    <section class="thnks">
      <div><img src="./assets/images/icon-thank-you.svg" alt=""></div>
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have <br> fun using our platform. If you ever need any support, please feel <br> free to email us to support @loremgaming.com .
      </p>
    </section>
    `
  })
}

const routering = () => {
  const path = location.pathname;
  if (path === '/') {
    personalInfo();
  } else if (path === '/plan') {
    planSelection();
  } else if (path === '/add-ons') {
    addOns();
  } else if (path === '/summary') {
    summary()
  } else {
    document.getElementById('allContent').innerHTML = '<h1>404 Not Found</h1>';
  }
}
const navigating = (path) => {
  history.pushState({}, '', path);
  routering();
}
window.onpopstate = routering;
routering()