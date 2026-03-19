/*    PROJECT DATA*/
const PROJECTS = [
  {
    num: "01 / 06",
    title: "HR Analytics – Attrition Dashboard",
    problem: "Organizations lose billions annually to unexpected employee attrition. The challenge was to identify exactly which factors — department, salary, tenure, satisfaction — drive employees to leave, and surface those insights in a format that HR teams can act on immediately.",
    approach: "Loaded and cleaned an IBM HR dataset using Python and Pandas. Performed exploratory data analysis to surface attrition patterns across 35+ variables. Built an interactive Power BI dashboard with slicers for department, education, and job role, including KPI cards for attrition rate, average salary, and active employee count.",
    tools: ["Python","Pandas","Power BI","DAX","Excel","Matplotlib"],
    outcome: "A fully interactive HR dashboard surfacing attrition rates by department, age group, salary band, and job role — enabling HR teams to identify at-risk profiles and take data-driven retention decisions in real time.",
    github: "https://github.com/nitin-pie/HR-Analytics-Attrition-Dashboard"
  },
  {
    num: "02 / 06",
    title: "PowerBI Sales Dashboard",
    problem: "Sales teams often work with raw spreadsheets that make it difficult to track revenue trends, identify top-performing regions, or monitor product-level KPIs at a glance. A centralised visual dashboard was needed to turn data into decisions.",
    approach: "Imported and transformed sales dataset using Power Query. Designed a multi-page Power BI dashboard with DAX measures for revenue growth, monthly comparisons, and regional breakdowns. Added drill-through capability allowing stakeholders to explore data at product and territory level.",
    tools: ["Power BI","DAX","Power Query","Excel","Data Modelling"],
    outcome: "A professional, executive-ready sales dashboard providing real-time visibility into revenue performance, top products, regional contribution, and YoY growth — reducing reporting time from hours to seconds.",
    github: "https://github.com/nitin-pie/PowerBI-Sales-Dashboard"
  },
  {
    num: "03 / 06",
    title: "Student GPA Prediction — Linear Regression",
    problem: "Predicting academic performance early enables institutions to identify students at risk and offer timely support. The goal was to build a regression model that accurately predicts a student's GPA from measurable academic and behavioural features.",
    approach: "Performed end-to-end ML pipeline: data cleaning, feature selection, correlation analysis, and outlier treatment using Pandas and NumPy. Trained a Linear Regression model using Scikit-learn, evaluated with MSE and R² metrics, and visualised predictions vs actual values to assess model fit.",
    tools: ["Python","Scikit-learn","Pandas","NumPy","Matplotlib","Seaborn"],
    outcome: "A regression model capable of predicting student GPA with measurable accuracy, demonstrating practical application of supervised machine learning and end-to-end ML workflow on real-world educational data.",
    github: "https://github.com/nitin-pie/Student-GPA-Prediction-Linear-Regression"
  },
  {
    num: "04 / 06",
    title: "Monthly Task Tracker Web App",
    problem: "Managing monthly tasks manually in notes or spreadsheets is inefficient and non-persistent. The goal was to build a lightweight, browser-based task manager that persists data without any backend server.",
    approach: "Built entirely client-side with HTML, CSS, and vanilla JavaScript. Used the browser's localStorage API for data persistence across sessions. Implemented task creation, deletion, completion toggling, and real-time progress percentage display with a clean, responsive UI.",
    tools: ["HTML5","CSS3","JavaScript","localStorage API","DOM Manipulation"],
    outcome: "A fully functional, zero-dependency task management application that works in any browser. Demonstrates mastery of frontend fundamentals, event-driven programming, and client-side state management.",
    github: "https://github.com/nitin-pie/Monthly-tracker"
  },
  {
    num: "05 / 06",
    title: "Simple Calculator Web App",
    problem: "A focused frontend engineering exercise to demonstrate command of UI layout, arithmetic logic, and responsive design — the foundational building blocks of professional web development.",
    approach: "Designed a responsive calculator layout using CSS Grid. Implemented full arithmetic logic in JavaScript including chained operations, decimal handling, and edge-case input validation. Optimised for both mouse and keyboard interaction.",
    tools: ["HTML5","CSS3","JavaScript","CSS Grid","Responsive Design"],
    outcome: "A polished, production-quality calculator demonstrating clean component thinking, JavaScript logic implementation, and responsive UI design — foundational skills applied during the VaultofCodes internship.",
    github: "https://github.com/nitin-pie/Simple-Calculator-Web"
  },
  {
    num: "06 / 06",
    title: "Neural Network Lab — MNIST (24UADS1035)",
    problem: "As part of a structured university neural network lab series, the objective was to implement and train a multi-layer neural network from first principles to classify handwritten digits on the MNIST benchmark dataset.",
    approach: "Designed a fully connected deep neural network using Keras with multiple Dense layers, ReLU activations, and Softmax classification output. Applied Dropout regularisation to prevent overfitting. Systematically tuned hyperparameters including epochs, batch size, and learning rate, tracking training and validation accuracy.",
    tools: ["Python","Keras","TensorFlow","NumPy","Matplotlib","Jupyter Notebook"],
    outcome: "Successfully trained a neural network achieving strong digit classification accuracy on the MNIST test set. This lab series established a rigorous practical foundation in deep learning architecture design, loss optimisation, and model evaluation.",
    github: "https://github.com/nitin-pie/24UADS1035-NITINSAINI-NNLAB-2026"
  }
];

/* CUSTOM CURSOR */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('button, a, .project-card, .skill-tag, .contact-link, .info-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/*    PRELOADER */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2400);
});

/*    NAV SCROLL */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

/* NEURAL NETWORK BACKGROUND CANVAS */
(function(){
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], animId;
  const NODE_COUNT = 72;
  const MAX_DIST = 160;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.5
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < MAX_DIST) {
          const alpha = (1 - d/MAX_DIST) * 0.2;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59,130,246,0.55)';
      ctx.fill();
    });
  }

  function update() {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
  }

  function loop() {
    update(); draw();
    animId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); initNodes(); });
  resize(); initNodes(); loop();
})();

/* SCROLL REVEAL*/
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .project-card, .info-card, .metric-item, .philosophy-quote').forEach(el => {
  revealObserver.observe(el);
});

// Project cards stagger
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.12) + 's';
});

/*ANIMATED COUNTERS */
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = true;
      const el = e.target.querySelector('.metric-num');
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isDecimal = el.dataset.decimal === 'true';
      let start = 0; const duration = 1600;
      const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = isDecimal ? val.toFixed(2) + suffix : Math.round(val) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.metric-item').forEach(el => counterObs.observe(el));

/*    PROJECT MODAL*/
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.project);
    const p = PROJECTS[idx];
    document.getElementById('modal-num').textContent = p.num;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-problem').textContent = p.problem;
    document.getElementById('modal-approach').textContent = p.approach;
    document.getElementById('modal-outcome').textContent = p.outcome;
    const toolsEl = document.getElementById('modal-tools');
    toolsEl.innerHTML = p.tools.map(t => `<span class="modal-tool">${t}</span>`).join('');
    document.getElementById('modal-github').href = p.github;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal(e, force) {
  if (force || (e && e.target === document.getElementById('modal-overlay'))) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* Certificate image lightbox */
function openCertLight(img) {
  document.getElementById('cert-lightbox-img').src = img.src;
  document.getElementById('cert-lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('.cert-img-wrap img').forEach(img => {
  img.style.cursor = 'zoom-in';
});
document.getElementById('cert-lightbox').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('open');
    document.body.style.overflow = '';
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal(null, true);
    document.getElementById('cert-lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/*  EMAILJS CONFIG */

const EMAILJS_PUBLIC_KEY   = "zVfH4kovF2ydLIYrW";     
const EMAILJS_SERVICE_ID   = "service_pkp40r1";     
const EMAILJS_TEMPLATE_ID  = "template_x83b0ro";   
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

/*    CONTACT FORM  — EmailJS */
function sendMessage() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmessage').value.trim();
  const errEl = document.getElementById('form-error');
  const btn   = document.getElementById('btn-send');

  errEl.style.display = 'none';

  if (!name || !email || !msg) {
    errEl.textContent = 'Please fill in all fields before sending.';
    errEl.style.display = 'block';
    return;
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }

  btn.classList.add('loading');
  btn.textContent = 'Sending…';

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name:      name,
    email:     email,
    message:   msg,
    reply_to:  email,
  })
  .then(() => {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  })
  .catch((err) => {
    console.error('EmailJS error:', err);
    btn.classList.remove('loading');
    btn.textContent = 'Send Message →';
    errEl.textContent = 'Failed to send. Check your EmailJS keys or try again.';
    errEl.style.display = 'block';
  });
}