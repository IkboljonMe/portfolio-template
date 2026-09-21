# Portfolio Template

This is my personal portfolio website built with Next.js and Tailwind CSS. I built it to show my projects, my experience and my latest GitHub repos in one place. It also works as a template, so you can put your own data in and use it for yourself.

Live demo: https://portfolioo-puce-nu.vercel.app

The design is based on the developer portfolio template by [Manu Arora](https://github.com/manuarora700). I changed it with my own content and added some parts, like the EmailJS contact form.

## What it does

- Home page with a short intro, my favourite projects and my latest GitHub repos
- The "Latest Code" section loads my public repos from the GitHub API on every request
- About page with a short bio, social links and the tech I use
- Projects page with cards for each project
- Experience page with a simple timeline
- Contact page with a form that sends the message to my email with EmailJS
- Dark mode toggle

## Built with

- Next.js 13 (pages router)
- React 18
- Tailwind CSS
- next-themes (dark mode)
- EmailJS (`@emailjs/browser`) for the contact form
- react-toastify for the success / error messages
- react-rough-notation for the highlight animation on the home page
- GitHub REST API for the repo list

## How to run

You need Node.js 18 or newer.

```bash
git clone https://github.com/IkboljonMe/portfolio-template.git
cd portfolio-template
npm install
cp .env.example .env
npm run dev
```

Then open http://localhost:3000.

To make a production build:

```bash
npm run build
npm start
```

## Environment variables

The contact form uses EmailJS. Make a free account on [emailjs.com](https://www.emailjs.com/), create an email service and an email template, then put the values in `.env`:

| Variable | What it is |
| --- | --- |
| `NEXT_PUBLIC_YOUR_SERVICE_ID` | Service ID from the EmailJS dashboard |
| `NEXT_PUBLIC_YOUR_TEMPLATE_ID` | Template ID of your email template |
| `NEXT_PUBLIC_YOUR_PUBLIC_KEY` | Your EmailJS public key (Account page) |

The form sends the fields `user_name`, `email` and `message`, so use these names in your EmailJS template. Without these variables the site still works, only the contact form will show an error.

## Use it for yourself

Most of the content is in `constants/data.js` (name, links, projects, experience, about text, GitHub username). Change it to your own data and replace the images in `public/`. The three cards on the home page are in `components/FavouriteProjects.js`.

## Project structure

```
components/   page sections (Navbar, Hero, Contact, Footer, ...)
constants/    data.js with all my personal data
lib/          getAllRepos.js loads repos from GitHub
pages/        Next.js pages (index, about, projects, experience, contact)
public/       images
styles/       global CSS and fonts
fonts/        font files
```

## License

MIT, see [LICENSE.txt](LICENSE.txt).

---

Made by [IkboljonMe](https://github.com/IkboljonMe)
