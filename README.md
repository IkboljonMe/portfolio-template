# Portfolio Template Project

This is a small portfolio template project built using Next.js. It's designed to serve as a simple starting point for creating a personal portfolio website. You can easily customize the content and styling to showcase your work, skills, and personal information.

# Table of Contents

1. [Getting Started](#getting-started)
2. [Contact Form Setup](#contact-form-with-email.js)
3. [Contributing](#contributing)
4. [License](#license)
5. [TODO](#todo)

## Features

- Home section with an introduction and profile image.
- Projects section to showcase your projects.
- About section for more detailed information about yourself.
- Contact section with your contact information.
- Experience section to show you experience if you have

## Getting Started

Follow these steps to set up and run the project on your local machine:

1. Clone the repository:

```bash
git clone git@github.com:IkboljonMe/portfolio-template.git
```

2. Install project dependencies using `npm` with the `--legacy-peer-deps` flag to address any peer dependency issues:

```bash
npm install --legacy-peer-deps
```

3. Start the development server:

```bash
npm run dev
```

## Contact Form with email.js

This portfolio template includes a contact form powered by [email.js](https://www.emailjs.com/), which allows you to send emails directly from your website. To set up and use the contact form, follow these steps:

1. Sign up on the [email.js website](https://www.emailjs.com/) and create an account.

2. After signing in, create an email service on email.js. This service will be used to send emails from your contact form.

3. Once you've created a service, configure your email template. You can customize the email content, subject, and other details to suit your needs.

4. In your project, you'll find a file named `components/Contact.js`. Open this file, and you'll see the following lines:

```bash
  .sendForm(
       process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
       process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
       form.current,
       process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
     )
     .then( other codes...)
```

5, Create .env file as .env.example file and configure required variables. Enjoy🤓

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. **Issues:** If you find a bug or have a suggestion, please [open an issue](https://github.com/IkboljonMe/portfolio-template/issues) to discuss it.

2. **Pull Requests:** To contribute code or documentation, submit a pull request to the [GitHub repository](https://github.com/IkboljonMe/portfolio-template/pulls).

3. **Coding Standards:** Ensure that your code follows the project's coding standards and conventions. If any guidelines or specific practices are required, mention them in the pull request description.

4. **Documentation:** Update the documentation, including the README file, if your changes impact how the project is used.

Thank you for your contributions to this project!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/IkboljonMe/portfolio-template/blob/main/LICENSE.txt) file for details. You are free to use, modify, and distribute this project in accordance with the terms of the MIT License.

## TODO

- [ ] Better theme(dark) in Contact.js
- [ ] Make better responsive friendly(Flag)
- [ ] Footer margin bug.
- [ ] Change content(add new projects and etc)
