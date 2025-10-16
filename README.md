# 📘 Applying the Math Accessibility Enhancement Script

This guide walks you through uploading and applying the **`mathjax-accessibility.js`** or **`Canvas-Math-Accessibility-Enhancement.js`** file to your Canvas LMS instance.  
These scripts improve the **screen reader accessibility** of MathJax-rendered equations for tools like **ReadSpeaker**, **NVDA**, and **VoiceOver** — both now and in future MathJax versions.

---

## ✅ What the Scripts Do

Both versions ensure MathJax uses the most **accessibility-friendly renderer** available:

| MathJax Version | Renderer Enforced | Effect |
|-----------------|------------------|---------|
| v2.x (Canvas default) | **HTML-CSS** | Improves screen reader compatibility |
| v3.x+ | **CHTML** | Maintains accessibility in new versions |
| Future (v4+) | Detected, logged, and safely ignored | Prevents crashes |

### 🧩 Shared Features
- Automatically detects MathJax (v2 → v4+).  
- Enhances math **readability by screen readers** without changing visual appearance.  
- Adds **console logs** (when `DEBUG = true`) for verification and future debugging.  
- Fully **non-destructive**, **safe**, and **reversible**.  
- Complies with **WCAG 2.1** accessibility standards.

---

## 🧭 Choosing the Right Script

| Script | When to Use | Description |
|--------|--------------|-------------|
| **`mathjax-accessibility.js`** | 🟢 *Recommended for root themes* | Loads **before** MathJax initializes, allowing configuration **before rendering starts**. Future-proof and production-ready. |
| **`Canvas-Math-Accessibility-Enhancement.js`** | 🧩 *Fallback for course-level or delayed loading* | Runs **after** MathJax loads and **re-renders** math content. Best for testing or environments where pre-load scripts are not guaranteed. |

---

## 🛠️ Step-by-Step Instructions

### 🔐 Prerequisites

- **Admin access** to the **Canvas Theme Editor** at the **root account** level.  
- Either of the following JavaScript files:
  - [`mathjax-accessibility.js`](mathjax-accessibility.js) – *preferred pre-load version*  
  - [`Canvas-Math-Accessibility-Enhancement.js`](Canvas-Math-Accessibility-Enhancement.js) – *post-load fallback version*

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

1. Click the **Upload** tab in the Theme Editor.  
2. Scroll to the **JavaScript** section.

---

### 4. Upload the Script

1. Click **Choose File** under the JavaScript section.  
2. Select **one** of the following:
   - `mathjax-accessibility.js` *(preferred)*  
   - `Canvas-Math-Accessibility-Enhancement.js` *(fallback)*  
3. Click **Upload**.

---

### 5. Preview and Test

1. Click **Preview Your Changes**.  
2. Navigate to a Canvas page containing LaTeX or math expressions.  
3. Open your browser’s **Developer Console** (`F12` or `Ctrl+Shift+I`).  
4. Confirm:
   - ✅ Logs show MathJax detected (v2.x, v3.x, or v4+).  
   - ✅ Renderer applied: “HTML-CSS” (v2) or “CHTML” (v3+).  
   - ✅ Equations look unchanged but are now **readable by screen readers**.

> 🧠 Enable Debug Mode (`const DEBUG = true`) to display internal MathJax object keys.  
> This is useful for diagnosing future version changes (e.g., MathJax v4+).

---

### 6. Apply the Theme

- When satisfied, click **Apply Theme** in the upper right corner.  
- The script is now active across your **entire Canvas instance**.

---

## 🔁 To Remove or Revert

1. Return to **Theme Editor → Upload**.  
2. Remove the `mathjax-accessibility.js` or `Canvas-Math-Accessibility-Enhancement.js` file.  
3. Click **Apply Theme** again to revert.

---

## 💡 Additional Notes

- The script only affects **MathJax rendering**, never other Canvas elements or CSS.  
- Does **not** slow page loads or alter math appearance.  
- Improves compliance with **WCAG 2.1 (A/AA)** standards.  
- Logs are **local only** — nothing is transmitted externally.  
- Supports both **Classic Canvas** and **New UI (2025+)** themes.

---

## 🧪 Testing with Screen Readers

To verify the improvement:

1. Open a Canvas page with mathematical content.  
2. Start **ReadSpeaker**, **NVDA**, or **VoiceOver**.  
3. ✅ Confirm the math is now **spoken correctly and sequentially**, not skipped.

---

## 🧰 Troubleshooting

### ⚠️ MathJax Not Detected
**Console message:**  
`[MathJax Accessibility Script] MathJax not detected within timeout.`

**Cause:** Page didn’t load MathJax (or loaded it asynchronously).  
**Fix:** Refresh the page or test on a Canvas page known to contain equations.

---

### ⚠️ Unknown Version (Possibly v4+)
**Console message:**  
`[MathJax Accessibility Script] MathJax detected (unknown version). Possibly v4+. No renderer changes applied.`

**Cause:** Canvas upgraded MathJax to a new major version.  
**Fix:**  
1. Set `DEBUG = true` in the script.  
2. Reload and note the logged object keys.  
3. Send the keys to your accessibility or IT team to verify compatibility.

---

### ⚙️ Equations Not Rendering
1. Ensure no other custom JavaScript overrides MathJax configuration.  
2. Temporarily remove this script to confirm the source of the conflict.  
3. If fixed, re-add the script and enable Debug Mode to investigate.

---

## 🧩 Test Files
Sample MathJax test pages for **v2** and **v3** are provided for verification of the `Canvas-Math-Accessibility-Enhancement.js` file.

---
 
**Last Updated:** October 2025  
