# 📘 Applying the Math Accessibility Enhancement Script

This guide walks you through uploading and applying the **`Canvas-Math-Accessibility-Enhancement.js`** file to your Canvas LMS instance.  
The script enhances the accessibility of math content for screen readers like **ReadSpeaker**, **NVDA**, and **VoiceOver** — both now and after future MathJax updates.

---

## ✅ What the Script Does

- Detects and supports **MathJax v2.x** (currently in Canvas) and **v3.x+** (future versions).  
- Forces MathJax to use an **accessibility-friendly renderer**:
  - **HTML-CSS** for v2.x  
  - **CHTML** for v3.x  
- Automatically detects **future versions (v4+)** and logs details for future compatibility.  
- Makes mathematical expressions **readable by screen readers** without changing how they look.  
- Fully **safe**, **reversible**, and **non-destructive**.

---

## 🛠️ Step-by-Step Instructions

### 🔐 Prerequisites

- Admin access to the **Canvas Theme Editor** at the **root account** level.  
- The JavaScript file (pick one):
  + Presets MathJax:[`Canvas-Math-Accessibility-Enhancement.js`](mathjax-accessibility.js)
  + Rerenders after MathJax loads: [`Canvas-Math-Accessibility-Enhancement.js`](Canvas-Math-Accessibility-Enhancement.js)

---

### 1. Log In to Canvas as an Admin

1. Visit your institution’s Canvas URL.  
2. Click **Admin** in the global navigation.  
3. Select your **Root Account**.

---

### 2. Open the Theme Editor

1. In the left-hand menu, go to:  
   **Themes → [Your Active Theme]**  
2. Click **Open in Theme Editor**.

---

### 3. Go to the Upload Tab

1. In the Theme Editor, click the **Upload** tab.  
2. Scroll down to the **JavaScript** section.

---

### 4. Upload the Script

1. Click **Choose File** under the JavaScript section.  
2. Select the file:  
   `Canvas-Math-Accessibility-Enhancement.js`  
3. Click **Upload**.

---

### 5. Preview and Test

1. Click **Preview Your Changes**.  
2. Navigate to a Canvas page containing LaTeX or math expressions.  
3. Open your browser’s **Developer Console** (press **F12** or **Ctrl+Shift+I**).  
4. Confirm:
   - ✅ Console logs show detection of MathJax v2 or v3 (or v4+ in future).  
   - ✅ Equations render the same visually.  
   - ✅ Screen readers like **ReadSpeaker** can read them aloud correctly.

> 🧩 If **Debug Mode** is enabled in the script (`const DEBUG = true`),  
> you’ll also see internal MathJax object keys logged — helpful for future Canvas updates.

---

### 6. Apply the Theme

- When satisfied, click **Apply Theme** in the top-right corner.  
- The updated script will now apply across your entire Canvas instance.

---

## 🔁 To Remove or Revert

1. Go back to the **Theme Editor**.  
2. Remove the `Canvas-Math-Accessibility-Enhancement.js` file from the JavaScript section.  
3. Click **Apply Theme** again.

---

## 💡 Additional Notes

- The script affects **only MathJax rendering**, not any other page content or style.  
- Improves compliance with **WCAG 2.1** accessibility standards.  
- Has **no visual or performance impact** for sighted users.  
- Logs are visible only in the **browser console** (safe for production).  
- Optional **Debug Mode** can be turned on by setting `DEBUG = true` in the script  
  to inspect new MathJax versions (v4+) when Canvas updates.

---

## 🧪 Testing with Screen Readers

To test the improvement:

1. Open a Canvas page with math content.  
2. Activate **ReadSpeaker**, **NVDA**, or **VoiceOver**.  
3. ✅ Confirm the math expressions are now spoken aloud correctly.

---

## 🧰 Troubleshooting

### ⚠️ MathJax Not Detected
If you see this console message:
[MathJax Accessibility Script] MathJax not detected within timeout.

It means the page didn’t load MathJax within the expected time.  
Try refreshing the page or testing in a Canvas course page that contains math content.

---

### ⚠️ "Unknown Version (Possibly v4+)"
If you see:
[MathJax Accessibility Script] MathJax detected (unknown version). Possibly v4+. No renderer changes applied.

Canvas may have upgraded to a newer MathJax version.  
You can:
1. Set `const DEBUG = true` in the script.
2. Reload the page.
3. Check the console for a list of detected object keys.  
   This helps determine how MathJax’s API has changed.

---

### ⚙️ Equations Stop Rendering
If math fails to appear after applying the theme:
1. Ensure no other Canvas JS customizations conflict with MathJax.  
2. Temporarily remove this script to confirm the issue.  
3. If the problem resolves, re-add the script and set `DEBUG = true` to capture logs.

---

### Test Files
Files to test the script for MathJax v2 and v3 have been included.
