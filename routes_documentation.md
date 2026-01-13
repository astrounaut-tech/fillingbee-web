# FillingBee Route & Architecture Documentation

This document provides a map of all available routes in the FillingBee application and explains how the data flow works after the backend refactor.

## 🗺️ Route Map

### 🌐 Landing & Public Pages
| Route | Description | Status |
| :--- | :--- | :--- |
| `/` | **Home Page**: Hero section, interactive demo, ad placeholder, and features grid. | ✅ Active |
| `/features` | **Features**: Detailed breakdown of product capabilities. | ✅ Active |
| `/pricing` | **Pricing**: Subscription tiers and pricing cards. | ✅ Active |
| `/docs` | **Documentation**: Introduction and guides for users/developers. | ✅ Active |

### 🔐 Authentication Pages
| Route | Description | Status |
| :--- | :--- | :--- |
| `/auth/signin` | **Sign In**: Login form for existing users. | ✅ Active |
| `/auth/signup` | **Sign Up**: Account creation and organization setup. | ✅ Active |
| `/onboarding` | **Onboarding**: Multi-step wizard after account creation. | ✅ Active |

### 🏗️ Application (Dashboard & Tools)
| Route | Description | Status |
| :--- | :--- | :--- |
| `/dashboard` | **Main Dashboard**: View all forms, submissions, and status. | ✅ Active |
| `/builder` | **Form Builder**: Drag-and-drop (simulated) interface to create forms. | ✅ Active |

### 📝 Form Interaction
| Route | Description | Status |
| :--- | :--- | :--- |
| `/forms/[slug]` | **Public Form**: The view shared with respondents. Features the Email -> OTP -> Form flow. | ✅ Active |

---

## ⚙️ Data Flow & API Architecture

### 1. Client-Side API (`src/lib/api.ts`)
Since the local `src/app/api` routes were removed, all data interactions now go through a unified abstraction layer. This allows the frontend to be "backend-agnostic".

- **Simulated Mode**: Currently, the API calls are simulated with real delays to show loading states and success animations.
- **External API**: When you are ready to connect a real backend, simply update the `NEXT_PUBLIC_API_URL` environment variable.

### 2. Form Submission Flow
1. **Request**: The user enters their email on `/forms/[slug]`.
2. **OTP**: `api.auth.sendOtp` is called. Use code `123456` to verify in the demo.
3. **Verified**: Upon verification, the actual form fields are revealed.
4. **Submit**: Data is collected and sent via `api.forms.submit`.

---

## 🛠️ Key Components
- **`Logo`**: Global branding component with Bee icon.
- **`Navbar`**: Responsive navigation used on most pages.
- **`Footer`**: Site-wide footer with status indicator.
- **`AdContainer`**: Promotional slot on the homepage.
- **`InteractiveDemo`**: Visual simulation of the builder on the landing page.
