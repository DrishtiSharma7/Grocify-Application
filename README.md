# Grocify

A responsive grocery e-commerce front end built with React and Tailwind CSS — a curated shop of fresh produce with cart, wishlist, authentication, and a full checkout flow. Built as a UI-recreation assignment and then extended into a fuller shopping experience.

## Live Link

Link: https://grocify-application.vercel.app/home

## Features

- **Shop** — searchable, filterable (category, price range, availability), sortable (popularity, price, freshness) product grid with grid/list view toggle
- **Cart** — quantity steppers, remove items, order summary, persisted across reloads
- **Wishlist** — like/unlike products from any card, dedicated "Liked Products" page, persisted across reloads
- **Auth** — sign up / log in (mock, client-side only — see [Notes](#notes) below), session persisted across reloads
- **Checkout gate** — placing an order requires being logged in; an unauthenticated checkout attempt redirects to Login and returns to the cart afterward
- **Order confirmation** — a dedicated "Order Placed" page with an order ID and itemized summary; order history is saved locally so the confirmation still renders after a page refresh
- **Dark mode** — toggle in the navbar, persisted, respects system preference on first visit
- **Responsive** — mobile, tablet, and desktop layouts throughout, with a hamburger nav on small screens
- **Animations** — Framer Motion for page/section transitions, card hover states, and the mobile menu

## Tech Stack

- [React 19](https://react.dev/) + [React Compiler](https://react.dev/learn/react-compiler)
- [Vite](https://vitejs.dev/) — dev server & build
- [React Router](https://reactrouter.com/) — routing
- [Tailwind CSS](https://tailwindcss.com/) — styling (with `class`-based dark mode)
- [Framer Motion](https://www.framer.com/motion/) — animation
- [lucide-react](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run eslint
```

## Project Structure

```
src/
├── assets/                 # images (basket, hero, etc.)
├── components/
│   ├── shop/                # ProductCard, FilterBar, SortDropdown
│   ├── Navbar.jsx, Footer.jsx
│   ├── Home.jsx, About.jsx, Process.jsx, Contact.jsx
│   ├── Shop.jsx, Cart.jsx, Wishlist.jsx, OrderPlaced.jsx
│   ├── Login.jsx, Signup.jsx
│   └── ScrollToTop.jsx
├── context/                 # CartContext, WishlistContext, AuthContext
├── hooks/                   # useCart, useWishlist, useAuth, useFilter, useTheme
├── data/products.js         # mock product catalog
├── utils/orders.js          # localStorage order history helpers
├── App.jsx                  # routes & provider tree
└── main.jsx
```

## Routes

| Path            | Page                          |
| --------------- | ------------------------------ |
| `/home`         | Landing / hero                 |
| `/shop`         | Product catalog                |
| `/about`        | About page                     |
| `/process`      | How it works                   |
| `/contact`      | Contact form                   |
| `/cart`         | Cart (checkout requires login) |
| `/wishlist`     | Liked products                 |
| `/order-placed` | Order confirmation             |
| `/login`        | Log in                         |
| `/signup`       | Sign up                        |

## Notes

- All state (cart, wishlist, auth session, order history) is persisted to `localStorage` — there is no backend. Signup stores credentials in plain text in `localStorage` purely to simulate an account system for this demo; **do not reuse this auth approach for anything handling real user data.**
- Product images use placeholder URLs (`picsum.photos`) rather than the original assignment asset pack.

