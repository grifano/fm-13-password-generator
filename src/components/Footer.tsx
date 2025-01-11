const Footer = () => {
  return (
    <footer className="mt-8 text-center">
      <p className="mb-2 text-sm">by Grifano Serhii Orlenko</p>
      <ul className="flex">
        <li>
          <a
            href="https://www.frontendmentor.io/profile/grifano"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            FrontendMentor
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/grifano"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
