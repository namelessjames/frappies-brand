/* Frappies brand preview: theme toggle, swatches from tokens, the rolling ball. */
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const param = new URLSearchParams(location.search).get("theme");
  const stored = param === "dark" || param === "light" ? param : localStorage.getItem("frappies-theme");
  if (stored === "dark" || stored === "light") root.classList.add(stored);

  function current() {
    if (root.classList.contains("dark")) return "dark";
    if (root.classList.contains("light")) return "light";
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paint() {
    const dark = current() === "dark";
    toggle.querySelector("i").className = dark ? "ph-bold ph-sun" : "ph-bold ph-moon";
    toggle.setAttribute("aria-label", dark ? "Helles Theme" : "Dunkles Theme");
  }
  toggle.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.classList.remove("dark", "light");
    root.classList.add(next);
    localStorage.setItem("frappies-theme", next);
    paint();
  });
  paint();

  // Swatches, straight from the tokens.
  const T = window.FRAPPIES_TOKENS;
  const GROUPS = [
    ["Signal", ["primary", "primary-foreground", "primary-soft", "primary-hover", "warning", "warning-foreground", "warning-ink"]],
    ["Grün", ["brand", "success"]],
    ["Tinte und Boden", ["background", "foreground", "card", "secondary", "secondary-foreground", "accent", "accent-foreground", "muted-foreground", "border"]],
    ["Schale", ["shell", "shell-foreground", "shell-muted", "shell-raised"]],
    ["Alarm", ["destructive", "destructive-foreground"]],
  ];
  const NAMES = {
    primary: "Tennisball-Filz", "primary-foreground": "Tinte auf Filz", "primary-soft": "Filzwäsche", "primary-hover": "Filz, tiefer",
    warning: "Frisbee-Orange", "warning-foreground": "Tinte auf Frisbee", "warning-ink": "Frisbee-Tinte",
    brand: "Wiesengrün", success: "Erfolg",
    background: "Kleeboden", foreground: "Kleetinte", card: "Kartenweiß", secondary: "Tintenfüllung", "secondary-foreground": "Boden auf Tinte",
    accent: "Kleedunst", "accent-foreground": "Dunsttinte", "muted-foreground": "Salbei", border: "Heckenlinie",
    shell: "Kleeschale", "shell-foreground": "Schalentext", "shell-muted": "Schale gedämpft", "shell-raised": "Schale erhöht",
    destructive: "Alarmrot", "destructive-foreground": "Text auf Alarmrot",
  };
  const lum = (hex) => {
    const c = hex.match(/[0-9a-f]{2}/gi).map((h) => parseInt(h, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const labelColor = (hex) => (lum(hex) > 0.4 ? "#14301F" : "#F2F4EC");
  const host = document.getElementById("swatches");
  if (host && T) {
    for (const [title, keys] of GROUPS) {
      const h = document.createElement("h3");
      h.className = "t-title";
      h.textContent = title;
      host.appendChild(h);
      const grid = document.createElement("div");
      grid.className = "swatches";
      for (const k of keys) {
        const light = T.color.light[k].$value;
        const dark = T.color.dark[k].$value;
        const el = document.createElement("div");
        el.className = "swatch";
        el.innerHTML = `
          <div class="chips">
            <div class="chip" style="background:${light}"><span style="color:${labelColor(light)}">Hell</span></div>
            <div class="chip" style="background:${dark}"><span style="color:${labelColor(dark)}">Dunkel</span></div>
          </div>
          <div class="meta">
            <div class="t-row-title">${NAMES[k] || k}</div>
            <code>${k}</code>
            <code>${light}${light !== dark ? " · " + dark : ""}</code>
          </div>`;
        grid.appendChild(el);
      }
      host.appendChild(grid);
    }
  }

  // The ball rolls onto the next open row.
  const list = document.getElementById("next-list");
  if (list) {
    const ball = list.querySelector(".rolling-ball");
    let turn = 0;
    function place(animate) {
      const rows = [...list.querySelectorAll(".next-row")];
      const next = rows.find((r) => !r.classList.contains("done"));
      if (!next) { ball.style.opacity = "0"; return; }
      const top = next.offsetTop + next.offsetHeight / 2;
      ball.style.top = `${top}px`;
      const urgency = next.dataset.urgency;
      ball.className = `rolling-ball ball ${urgency}`;
      ball.style.left = urgency === "today" ? "3px" : urgency === "week" ? "9px" : "15px";
      if (animate) { turn += 300; ball.style.rotate = `${turn}deg`; }
    }
    list.querySelectorAll(".done-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        btn.closest(".next-row").classList.add("done");
        place(true);
      }),
    );
    const reset = document.getElementById("next-reset");
    reset?.addEventListener("click", () => {
      list.querySelectorAll(".next-row").forEach((r) => r.classList.remove("done"));
      ball.style.opacity = "1";
      place(true);
    });
    place(false);
    addEventListener("resize", () => place(false));
  }
})();
