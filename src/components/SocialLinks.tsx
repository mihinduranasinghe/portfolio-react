const socialLinks = [
  { href: 'https://www.linkedin.com/in/mihindu-ranasinghe-b532a8155/', icon: 'bxl-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/mihinduranasinghe', icon: 'bxl-github', label: 'GitHub' },
  { href: 'https://www.facebook.com/mihindu.ranasinghe', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://www.instagram.com/mihindu_ranasinghe/', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://orcid.org/0000-0002-1855-0305', icon: 'bxl-orcid', label: 'ORCID' },
  { href: 'https://www.credly.com/users/mihinduranasinghe', icon: 'bx-certification', label: 'Credly' },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          className="social-chip"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <i className={`bx ${link.icon} bx-sm`}></i>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
