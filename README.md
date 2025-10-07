# 📘 Applying the Math Accessibility Enhancement Script

This guide walks you through uploading and applying the `Canvas-Math-Accessibility-Enhancement.js` file to your Canvas LMS instance. This script enhances the accessibility of math content for screen readers like **ReadSpeaker**, **NVDA**, and **VoiceOver**.

---

## ✅ What the Script Does

- Forces **MathJax v2.7.7** to use the **HTML-CSS renderer** instead of SVG.
- Makes mathematical expressions **readable by screen readers**.
- Does **not** affect visual appearance or performance.
- Applies to **all math rendered with MathJax** in Canvas.
- **Safe**, **reversible**, and **non-destructive**.

---

## 🛠️ Step-by-Step Instructions

### 🔐 Prerequisites

- Admin access to the **Canvas Theme Editor** at the **root account** level.
- The JavaScript file:  
  [`Canvas-Math-Accessibility-Enhancement.js`](Canvas-Math-Accessibility-Enhancement.js)

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

1. In the Theme Editor, click the **Upload** tab at the top.
2. Scroll down to the **JavaScript** section.

---

### 4. Upload the Script

1. Click **Choose File** under the JavaScript section.
2. Select the file:  
   `Canvas-Math-Accessibility-Enhancement.js`
3. Click **Upload**.

---

### 5. Preview the Changes

1. Click **Preview Your Changes**.
2. Navigate to a Canvas page with math content (e.g., LaTeX-based equations).
3. Confirm:
   - ✅ Equations render the same visually.
   - ✅ Screen readers like **ReadSpeaker** now read them aloud.

---

### 6. Apply the Theme

- If everything looks good, click **Apply Theme** (top-right corner).
- The updated theme will now be deployed across your Canvas instance.

---

## 🔁 To Remove or Revert

1. Go back to the **Theme Editor**.
2. Remove the `Canvas-Math-Accessibility-Enhancement.js` file from the JavaScript section.
3. Click **Apply Theme** again.

---

## 💡 Additional Notes

- This script only affects **math rendering** — it does **not** interfere with other content or styles.
- Helps meet **accessibility standards** (e.g., WCAG 2.1) by improving screen reader support for math.
- No impact on **performance** or **appearance** for sighted users.

---

## 🧪 Testing with ReadSpeaker

To test:

1. Open a Canvas page with math content.
2. Activate ReadSpeaker’s **“Listen”** feature.
3. ✅ You should hear the equations read aloud correctly.

---


