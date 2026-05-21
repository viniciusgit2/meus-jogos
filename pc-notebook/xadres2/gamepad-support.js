(() => {
  const DEADZONE = 0.2;
  const CURSOR_SPEED = 12;
  const PRIMARY_IDS = ["start-btn", "startBtn", "start-button", "new-game-btn"];

  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let connected = false;
  let rafId = null;
  let lastFrame = performance.now();
  let lastPad = null;
  let prevButtons = [];
  const keyState = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };

  const cursor = document.createElement("div");
  cursor.id = "gamepad-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.style.cssText = [
    "position:fixed",
    "left:0",
    "top:0",
    "width:16px",
    "height:16px",
    "border:2px solid #fff",
    "border-radius:50%",
    "background:rgba(0,0,0,0.25)",
    "box-shadow:0 0 10px rgba(0,0,0,0.5)",
    "pointer-events:none",
    "transform:translate(-50%,-50%)",
    "z-index:2147483647",
    "display:none"
  ].join(";");
  document.body.appendChild(cursor);

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function showCursor(show) {
    cursor.style.display = show ? "block" : "none";
  }

  function moveCursor(dx, dy) {
    cursorX = clamp(cursorX + dx, 0, window.innerWidth);
    cursorY = clamp(cursorY + dy, 0, window.innerHeight);
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  }

  function dispatchMouseClick() {
    const target = document.elementFromPoint(cursorX, cursorY);
    if (!target) return;
    const mouseDown = new MouseEvent("mousedown", { bubbles: true, cancelable: true, clientX: cursorX, clientY: cursorY });
    const mouseUp = new MouseEvent("mouseup", { bubbles: true, cancelable: true, clientX: cursorX, clientY: cursorY });
    const click = new MouseEvent("click", { bubbles: true, cancelable: true, clientX: cursorX, clientY: cursorY });
    target.dispatchEvent(mouseDown);
    target.dispatchEvent(mouseUp);
    target.dispatchEvent(click);
    if (typeof target.focus === "function") target.focus();
  }

  function dispatchKey(type, key) {
    const event = new KeyboardEvent(type, { key, bubbles: true, cancelable: true });
    const target = document.activeElement && document.activeElement !== document.body ? document.activeElement : document;
    target.dispatchEvent(event);
    window.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true, cancelable: true }));
  }

  function setArrowKey(key, pressed) {
    if (keyState[key] === pressed) return;
    keyState[key] = pressed;
    dispatchKey(pressed ? "keydown" : "keyup", key);
  }

  function releaseArrows() {
    setArrowKey("ArrowUp", false);
    setArrowKey("ArrowDown", false);
    setArrowKey("ArrowLeft", false);
    setArrowKey("ArrowRight", false);
  }

  function clickPrimaryAction() {
    for (const id of PRIMARY_IDS) {
      const element = document.getElementById(id);
      if (element && !element.disabled) {
        element.click();
        return;
      }
    }
    dispatchKey("keydown", "Enter");
    dispatchKey("keyup", "Enter");
  }

  function isNintendoPad(pad) {
    const id = String(pad?.id || "").toLowerCase();
    return id.includes("nintendo") || id.includes("switch") || id.includes("joy-con") || id.includes("joycon") || id.includes("pro controller");
  }

  function processButtons(pad) {
    const buttons = pad.buttons || [];
    const justPressed = (index) => buttons[index]?.pressed && !prevButtons[index];
    const isNintendo = isNintendoPad(pad);

    const primaryButton = isNintendo ? 1 : 0;
    const cancelButton = isNintendo ? 0 : 1;
    const altActionButton = isNintendo ? 3 : 2;
    const quickStartButton = isNintendo ? 2 : 3;

    if (justPressed(primaryButton)) dispatchMouseClick();
    if (justPressed(cancelButton)) {
      dispatchKey("keydown", "Escape");
      dispatchKey("keyup", "Escape");
    }
    if (justPressed(altActionButton)) {
      dispatchKey("keydown", " ");
      dispatchKey("keyup", " ");
    }
    if (justPressed(quickStartButton)) clickPrimaryAction();
    if (justPressed(8)) {
      dispatchKey("keydown", "Tab");
      dispatchKey("keyup", "Tab");
    }
    if (justPressed(9)) clickPrimaryAction();

    setArrowKey("ArrowUp", !!buttons[12]?.pressed);
    setArrowKey("ArrowDown", !!buttons[13]?.pressed);
    setArrowKey("ArrowLeft", !!buttons[14]?.pressed);
    setArrowKey("ArrowRight", !!buttons[15]?.pressed);

    prevButtons = buttons.map((button) => !!button.pressed);
  }

  function tick(now) {
    const dt = Math.min(2, (now - lastFrame) / 16.67);
    lastFrame = now;

    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    lastPad = null;
    for (const pad of pads) {
      if (pad && pad.connected) {
        lastPad = pad;
        break;
      }
    }

    if (!lastPad) {
      if (connected) {
        connected = false;
        showCursor(false);
        releaseArrows();
      }
      rafId = requestAnimationFrame(tick);
      return;
    }

    if (!connected) {
      connected = true;
      showCursor(true);
      moveCursor(0, 0);
    }

    const ax = Math.abs(lastPad.axes[0] || 0) > DEADZONE ? (lastPad.axes[0] || 0) : 0;
    const ay = Math.abs(lastPad.axes[1] || 0) > DEADZONE ? (lastPad.axes[1] || 0) : 0;
    if (ax || ay) moveCursor(ax * CURSOR_SPEED * dt, ay * CURSOR_SPEED * dt);

    processButtons(lastPad);
    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener("gamepadconnected", () => {
    if (!rafId) {
      lastFrame = performance.now();
      rafId = requestAnimationFrame(tick);
    }
  });

  window.addEventListener("gamepaddisconnected", () => {
    const hasConnected = (navigator.getGamepads ? navigator.getGamepads() : []).some((pad) => pad && pad.connected);
    if (!hasConnected) {
      connected = false;
      showCursor(false);
      releaseArrows();
    }
  });

  window.addEventListener("resize", () => {
    cursorX = clamp(cursorX, 0, window.innerWidth);
    cursorY = clamp(cursorY, 0, window.innerHeight);
    moveCursor(0, 0);
  });

  if (!rafId) {
    lastFrame = performance.now();
    rafId = requestAnimationFrame(tick);
  }
})();