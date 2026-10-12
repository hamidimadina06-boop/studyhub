# StudyHub — Academic Portal 🎓

A modern, responsive academic portal for First-Year Computer Science students to access semester course materials, recommended YouTube channels, verified lecture notes, and past exams.

Built with **React**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and full **English / Arabic (LTR / RTL)** support.

---

## 🚀 Quick Start Guide (Windows)

### Step 1: Install Node.js (If not already installed)

Node.js (LTS version) is required to run this project. If you haven't installed it yet:

#### Option A: Quick Installer via Command Line (Recommended)
Open PowerShell or Windows Terminal and run:
```powershell
winget install OpenJS.NodeJS.LTS
```
*Note: If Windows prompts you with a User Account Control (UAC) dialog, click **Yes** to allow installation.*

#### Option B: Official Web Download
1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** installer for Windows (`.msi`).
3. Run the installer and click **Next** through default settings.
4. Restart your terminal or editor (VS Code) so `node` and `npm` are added to your PATH.

To verify your installation, open PowerShell and run:
```powershell
node -v
npm -v
```

---

### Step 2: Install Project Dependencies

Navigate to this project folder in PowerShell:
```powershell
cd c:\Users\Snow\Desktop\studyhub
npm install
```

---

### Step 3: Run the Development Server

Start the local development server:
```powershell
npm run dev
```

Open your browser at:
👉 **`http://localhost:3000`**

---

### Step 4: Build for Production & Preview

To create an optimized production build:
```powershell
npm run build
```

To test the production build locally:
```powershell
npm run preview
```
👉 **`http://localhost:4173`**

---

## 📁 Project Architecture & Components

- **`src/context/LanguageContext.jsx`**: Global language provider with persistent storage and automatic HTML `dir="rtl"` / `dir="ltr"` management.
- **`src/data/modulesData.js`**: Single source of truth containing all modules, YouTube channels, lecture notes, and exam archives.
  - **Semester 1**: Exactly 5 modules (`analyse-1`, `algebre-1`, `algo-1`, `structure-machine`, `se`).
  - **Semester 2**: Exactly 7 modules (`analyse-2`, `algebre-2`, `algo-2`, `proba-1`, `archi`, `lm`, `tco`).
- **`src/data/translations.js`**: Complete bilingual dictionaries (English and Arabic).
- **`src/components/Header.jsx`**: Brand header with responsive search bar and language switcher.
- **`src/components/Footer.jsx`**: Minimal copyright footer matching the design specifications.
- **`src/components/SemesterCard.jsx`**: Academic portal semester entry cards.
- **`src/components/ModuleCard.jsx`**: Reusable course cards with category icons and direct navigation.
- **`src/components/Search.jsx`**: Real-time accessible search across modules, codes, topics, and descriptions.
- **`src/components/LanguageSwitcher.jsx`**: One-click English/Arabic toggle.
- **`src/components/Breadcrumbs.jsx`**: Navigation bar with back links and academic tags.
- **`src/components/ModuleDetail.jsx`**: Full curriculum view (YouTube channels, downloadable chapters, past exams).
- **`src/pages/HomePage.jsx`**: Main Academic Portal landing page (`/`).
- **`src/pages/SemesterPage.jsx`**: Dynamic directory for Semester 1 (`/semester-1`) and Semester 2 (`/semester-2`).
- **`src/pages/ModulePage.jsx`**: Module detail route (`/module/:moduleId`).
- **`src/pages/NotFoundPage.jsx`**: Accessible 404 page for invalid URLs with a return button.

---

## 🧪 Verified Design & Functional Features

- **Exact Card Counts**:
  - `/semester-1` renders exactly 5 module cards.
  - `/semester-2` renders exactly 7 module cards.
- **Deep Routing**: Direct navigation to `/module/algo-1`, `/module/analyse-1`, etc. Refreshing preserves route without blank screens.
- **Bilingual & RTL**: Instant switch between English and Arabic with layout inversion.
- **Search**: Instant querying with keyboard accessible dropdown.
- **Stitch Design Fidelity**: Pixel-accurate color schemes, rounded cards, typography, badge pills, and stat counters.
