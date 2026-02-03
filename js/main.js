const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));

const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const role = formData.get('role');
    const topic = formData.get('topic');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Orylian inquiry: ${topic || 'Consulting'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nEstimated Budget: ${budget}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@orylian.com?subject=${subject}&body=${body}`;
  });
}
