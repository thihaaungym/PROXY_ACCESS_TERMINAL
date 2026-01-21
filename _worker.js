// Owner Name
const STATIC_OWNER_NAME = "THIHA AUNG (YONE MAN)";

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      // KV Store Data
      const SITE_PASSWORD = await env.MY_KV.get("PASSWORD") || "1234";
      const NODE_DATA = await env.MY_KV.get("NODE_DATA") || "No Node Data";

      // POST Request (Login)
      if (request.method === "POST") {
        const formData = await request.formData();
        const inputPassword = formData.get("password");

        if (inputPassword === SITE_PASSWORD) {
          return new Response(renderDashboard(NODE_DATA), {
            headers: { "Content-Type": "text/html" },
          });
        } else {
          return new Response(renderLogin(true), {
            headers: { "Content-Type": "text/html" },
          });
        }
      }

      // Default GET (Show Login)
      return new Response(renderLogin(false), {
        headers: { "Content-Type": "text/html" },
      });

    } catch (err) {
      return new Response(`System Error: ${err.message}`, { status: 500 });
    }
  },
};

// --- Footer UI ---
function getFooterUI() {
  return `
    <div class="footer-container">
      <div class="app-icons-grid">
        <div class="app-icon" title="Karing">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        </div>
        <div class="app-icon center-icon" title="v2rayNG">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"/></svg>
        </div>
        <div class="app-icon" title="Nekobox">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8m0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>
      
      <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
        <a href="https://t.me/thihaaung44" target="_blank" class="app-icon" style="text-decoration:none; display:flex; align-items:center; justify-content:center;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:24px;height:24px;"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
        <a href="https://www.facebook.com/share/1GSj8Jxf9b/" target="_blank" class="app-icon" style="text-decoration:none; display:flex; align-items:center; justify-content:center;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:24px;height:24px;"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.15L15.71 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z"/></svg>
        </a>
      </div>

      <div class="owner-signature-tech">
         <div class="corner tl"></div><div class="corner tr"></div>
         <div class="corner bl"></div><div class="corner br"></div>
         
         <div class="owner-label">SERVER INFRASTRUCTURE BY</div>
         <div class="owner-highlight">${STATIC_OWNER_NAME}</div>
      </div>
    </div>
  `;
}

// --- HTML Templates ---

function renderLogin(isError) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SECURE ACCESS</title>
    <style>${getCSS()}</style>
  </head>
  <body>
    <canvas id="rectCanvas"></canvas>
    <div class="main-wrapper">
      
      <div class="tech-card">
        <div class="corner tl"></div><div class="corner tr"></div>
        <div class="corner bl"></div><div class="corner br"></div>
        
        <div class="card-header">
           <div class="sys-label">PROXY_ACCESS_TERMINAL // SECURE_NODE</div>
           <div class="status-badge orange">LOCKED</div>
        </div>

        <div class="card-body">
            <h1 class="main-title">AUTHORIZED ACCESS ONLY</h1>
            <p class="sub-title">IDENTITY VERIFICATION REQUIRED</p>
            
            <form method="POST" autocomplete="off">
                <div class="input-frame">
                    <input type="password" name="password" id="pwdInput" required autofocus class="cyber-input">
                    <label for="pwdInput" class="static-label">ENTER ACCESS KEY</label>
                </div>
                
                ${isError ? '<div class="error-box">ACCESS DENIED</div>' : ''}
                
                <button type="submit" class="cyber-btn">
                   <span class="btn-text">INITIALIZE UPLINK</span>
                </button>
            </form>
        </div>
      </div>
      
      ${getFooterUI()}
    </div>
    ${getRectFlowScript()}
  </body>
  </html>
  `;
}

function renderDashboard(nodeData) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACCESS GRANTED</title>
    <style>${getCSS()}</style>
  </head>
  <body>
    <canvas id="rectCanvas"></canvas>
    <div class="main-wrapper">
      
      <div class="tech-card">
        <div class="corner tl"></div><div class="corner tr"></div>
        <div class="corner bl"></div><div class="corner br"></div>

        <div class="card-header">
           <div class="sys-label">UPLINK_ESTABLISHED</div>
           <div class="status-badge green blinking">ACTIVE</div>
        </div>

        <div class="card-body">
            <h1 class="main-title text-orange">SECURE DATA STREAM</h1>
            
            <button onclick="copyAllData(this)" class="cyber-btn" style="margin-bottom: 20px;">
                <span class="btn-text">COPY ALL DATA</span>
            </button>

            <div id="linkContainer" class="links-list-container"></div>

            <button onclick="window.location.href='/'" class="cyber-btn action-btn" style="margin-top: 30px;">
                <span class="btn-text">TERMINATE CONNECTION</span>
            </button>
        </div>
      </div>
      
      ${getFooterUI()}
    </div>
    
    <script>
      // Load Data
      const rawData = \`${nodeData}\`;
      const lines = rawData.split('\\n').filter(line => line.trim() !== '');
      const container = document.getElementById('linkContainer');

      if (lines.length === 0) {
          container.innerHTML = '<div class="no-data">NO DATA STREAMS FOUND</div>';
      } else {
          lines.forEach((line, index) => {
              const row = document.createElement('div');
              row.className = 'data-row';
              
              // PARSE TITLE | LINK
              let title = "";
              let link = "";
              
              if (line.includes('|')) {
                  const parts = line.split('|');
                  title = parts[0].trim();
                  link = parts.slice(1).join('|').trim();
              } else {
                  const num = (index + 1).toString().padStart(2, '0');
                  title = "SERVER NODE " + num;
                  link = line.trim();
              }
              
              row.innerHTML = \`
                  <div class="row-left">
                      <div class="row-icon">🔒</div>
                      <div class="row-info">
                          <div class="row-title">\${title}</div>
                          <div class="row-meta">ENCRYPTED PROTOCOL</div>
                      </div>
                  </div>
                  <button onclick="copyLink('\${link}', this)" class="copy-btn">COPY</button>
              \`;
              container.appendChild(row);
          });
      }

      // Function to Copy Individual Link
      function copyLink(text, btn) {
          navigator.clipboard.writeText(text).then(() => {
              const originalText = btn.innerText;
              btn.innerText = "COPIED";
              btn.classList.add('success-btn');
              setTimeout(() => {
                  btn.innerText = originalText;
                  btn.classList.remove('success-btn');
              }, 2000);
          }).catch(err => {
              btn.innerText = "ERROR";
          });
      }

      // Function to Copy ALL Data (Cleaned)
      function copyAllData(btn) {
          let allLinks = "";
          lines.forEach(line => {
              let link = "";
              if (line.includes('|')) {
                  link = line.split('|').slice(1).join('|').trim();
              } else {
                  link = line.trim();
              }
              if(link) allLinks += link + "\\n";
          });

          navigator.clipboard.writeText(allLinks).then(() => {
              const span = btn.querySelector('.btn-text');
              const originalText = span.innerText;
              span.innerText = "ALL DATA COPIED ✅";
              btn.classList.add('success-btn'); // Turn green
              setTimeout(() => {
                  span.innerText = originalText;
                  btn.classList.remove('success-btn');
              }, 2000);
          }).catch(err => {
              alert("Failed to copy all data");
          });
      }
    </script>
    ${getRectFlowScript()}
  </body>
  </html>
  `;
}

// --- CSS ---
function getCSS() {
  return `
    :root {
      --bg-dark: #0b0b0d;
      --card-bg: #141416;
      --neon-orange: #ff9d00;
      --neon-yellow: #ffcc00;
      --neon-green: #00ff66;
      --text-main: #ffb84d; 
      --border-color: #333;
      --font-stack: 'Courier New', 'Roboto Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: var(--bg-dark); color: var(--text-main); font-family: var(--font-stack); height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; }
    canvas { position: fixed; top: 0; left: 0; z-index: -1; }

    .main-wrapper { width: 100%; max-width: 800px; padding: 30px; display: flex; flex-direction: column; gap: 30px; align-items: center; z-index: 10; }

    /* CARD STYLES */
    .tech-card, .owner-signature-tech {
      position: relative; background: var(--card-bg); border: 1px solid var(--border-color);
      clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    }
    .tech-card { width: 100%; box-shadow: 0 0 50px rgba(0,0,0,0.8); padding: 5px; }
    
    .corner { position: absolute; width: 15px; height: 15px; border: 2px solid var(--neon-orange); z-index: 2; }
    .tl { top: 0; left: 0; border-right: none; border-bottom: none; }
    .tr { top: 0; right: 0; border-left: none; border-bottom: none; }
    .bl { bottom: 0; left: 0; border-right: none; border-top: none; }
    .br { bottom: 0; right: 0; border-left: none; border-top: none; }

    .card-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: rgba(255, 157, 0, 0.05); border-bottom: 1px dashed #444; }
    .sys-label { font-size: 0.7rem; letter-spacing: 2px; color: #c77d00; font-weight: bold; }
    .status-badge { font-size: 0.7rem; font-weight: bold; padding: 4px 8px; background: #000; border: 1px solid; letter-spacing: 1px; }
    .status-badge.orange { color: var(--neon-orange); border-color: var(--neon-orange); }
    .status-badge.green { color: var(--neon-green); border-color: var(--neon-green); }
    .status-badge.green.blinking { animation: blink-active 1.5s ease-in-out infinite; }

    .card-body { padding: 50px 40px; text-align: center; }
    .main-title { font-size: 1.5rem; margin-bottom: 10px; letter-spacing: 3px; color: var(--neon-orange); text-transform: uppercase; font-weight: bold; }
    .sub-title { font-size: 0.8rem; color: #c77d00; margin-bottom: 40px; letter-spacing: 2px; text-transform: uppercase; border-bottom: 1px solid #c77d00; display: inline-block; padding-bottom: 5px; }
    .text-orange { color: var(--neon-orange); text-shadow: 0 0 15px rgba(255, 157, 0, 0.4); }

    /* INPUT FRAME & STATIC LABEL */
    .input-frame { position: relative; margin-bottom: 30px; height: 50px; }
    
    .cyber-input {
      width: 100%; height: 100%; padding: 15px;
      background: #000; border: 1px solid #333;
      color: var(--neon-orange); font-family: var(--font-stack);
      font-size: 1rem; text-align: center; outline: none; letter-spacing: 2px;
      border-radius: 4px; z-index: 5;
    }
    .cyber-input:focus { border-color: var(--neon-orange); box-shadow: 0 0 15px rgba(255, 157, 0, 0.2); }
    
    .static-label {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      color: #c77d00; font-size: 0.9rem; letter-spacing: 2px;
      text-transform: uppercase; pointer-events: none;
      animation: soft-pulse 3s infinite ease-in-out;
      z-index: 1;
    }
    .cyber-input:focus + .static-label, .cyber-input:valid + .static-label { display: none; }

    /* LIST CONTAINER */
    .links-list-container {
        display: flex; flex-direction: column; gap: 15px;
        max-height: 400px; overflow-y: auto;
        padding-right: 5px;
    }
    .links-list-container::-webkit-scrollbar { width: 5px; }
    .links-list-container::-webkit-scrollbar-track { background: #000; }
    .links-list-container::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

    .data-row {
        display: flex; justify-content: space-between; align-items: center;
        background: rgba(255, 157, 0, 0.05); border: 1px solid #333;
        padding: 15px; border-radius: 4px;
        transition: 0.2s;
    }
    .data-row:hover { border-color: var(--neon-orange); background: rgba(255, 157, 0, 0.1); }

    .row-left { display: flex; align-items: center; gap: 15px; text-align: left; }
    .row-icon { font-size: 1.2rem; }
    .row-title { font-size: 0.9rem; font-weight: bold; color: var(--neon-orange); letter-spacing: 1px; }
    .row-meta { font-size: 0.7rem; color: #666; letter-spacing: 1px; }

    .copy-btn {
        background: transparent; border: 1px solid var(--neon-orange);
        color: var(--neon-orange); padding: 8px 15px;
        font-family: var(--font-stack); font-size: 0.8rem;
        cursor: pointer; transition: 0.2s; font-weight: bold;
    }
    .copy-btn:hover { background: var(--neon-orange); color: #000; box-shadow: 0 0 15px rgba(255, 157, 0, 0.3); }
    .success-btn { background: var(--neon-green) !important; border-color: var(--neon-green) !important; color: #000 !important; }

    /* BUTTONS */
    .cyber-btn { width: 100%; padding: 20px; background: var(--neon-orange); border: none; color: #000; font-weight: 900; font-size: 1rem; cursor: pointer; letter-spacing: 2px; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); transition: 0.2s; }
    .cyber-btn:hover { background: var(--neon-yellow); transform: translateY(-2px); box-shadow: 0 0 20px var(--neon-orange); }
    .action-btn { background: transparent; border: 2px solid var(--neon-orange); color: var(--neon-orange); }
    .action-btn:hover { background: var(--neon-orange); color: #000; }
    
    .error-box { color: #ff3333; border: 1px solid #ff3333; padding: 10px; margin-bottom: 20px; font-weight: bold; background: rgba(255, 51, 51, 0.1); }

    /* FOOTER */
    .footer-container { text-align: center; width: 100%; display: flex; flex-direction: column; gap: 20px; align-items: center; }
    .app-icons-grid { display: flex; justify-content: center; gap: 30px; align-items: center; }
    .app-icon { width: 50px; height: 50px; padding: 10px; background: #000; border: 1px solid #333; color: var(--neon-orange); transition: 0.3s; cursor: pointer; clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); display:flex; align-items:center; justify-content:center;}
    .app-icon:hover { background: var(--neon-orange); color: #000; transform: translateY(-5px); box-shadow: 0 5px 20px rgba(255, 157, 0, 0.3); }

    .owner-signature-tech { padding: 20px 40px; display: inline-block; box-shadow: 0 0 25px rgba(255, 157, 0, 0.1), inset 0 0 15px rgba(255, 157, 0, 0.05); margin-top: 10px; text-align: center; width: 100%; max-width: 500px; }
    .owner-signature-tech .corner { width: 10px; height: 10px; border-width: 1px; }
    .owner-label { font-size: 0.6rem; color: #c77d00; letter-spacing: 3px; margin-bottom: 8px; text-transform: uppercase; }
    .owner-highlight { font-size: 1.2rem; font-weight: 900; color: var(--neon-orange); letter-spacing: 3px; text-transform: uppercase; text-shadow: 0 0 15px var(--neon-orange); }

    @keyframes soft-pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.02); text-shadow: 0 0 5px var(--neon-orange); } }
    @keyframes blink-active { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  `;
}

// --- FASTER BACKGROUND ANIMATION ---
function getRectFlowScript() {
  return `
    <script>
      const canvas = document.getElementById('rectCanvas');
      const ctx = canvas.getContext('2d');
      let width, height;
      let rects = [];
      const count = 40; 

      function resize() { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; }
      
      class RectBeam {
        constructor() { this.reset(); }
        reset() {
          this.x = Math.random() * width;
          this.y = height + Math.random() * 500;
          this.w = Math.random() * 60 + 20;
          this.h = Math.random() * 200 + 100;
          // INCREASED SPEED
          this.speed = Math.random() * 15 + 8; 
          this.opacity = Math.random() * 0.2 + 0.05;
        }
        update() {
          this.y -= this.speed;
          if (this.y + this.h < 0) { this.reset(); }
        }
        draw() {
          ctx.beginPath();
          ctx.rect(this.x, this.y, this.w, this.h);
          const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
          gradient.addColorStop(0, "rgba(255, 157, 0, 0)");
          gradient.addColorStop(0.5, "rgba(255, 157, 0, " + this.opacity + ")");
          gradient.addColorStop(1, "rgba(255, 157, 0, 0)");
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      function init() { resize(); for (let i = 0; i < count; i++) { rects.push(new RectBeam()); } animate(); }
      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let r of rects) { r.update(); r.draw(); }
        requestAnimationFrame(animate);
      }
      window.addEventListener('resize', resize); init();
    </script>
  `;
}
