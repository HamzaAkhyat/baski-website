/* BASKI Automation — shared interactions */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Solutions: brutalist card hover
  document.querySelectorAll('.brutalist-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translate(-4px, -4px)';
      card.style.boxShadow = '8px 8px 0px 0px #ff571a';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translate(0, 0)';
      card.style.boxShadow = 'none';
    });
  });

  // Contact: highlight label of focused field
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', () => {
      const label = input.parentElement.querySelector('label');
      if (label) label.classList.add('text-primary');
    });
    input.addEventListener('blur', () => {
      const label = input.parentElement.querySelector('label');
      if (label) label.classList.remove('text-primary');
    });
  });

  // Contact form: open a pre-filled email until a form service is connected
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const type = document.getElementById('cf-type').value;
      const brief = document.getElementById('cf-brief').value.trim();
      const subject = encodeURIComponent('[BASKI] New project request: ' + type);
      const body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\nProject type: ' + type + '\n\nBrief:\n' + brief
      );
      window.location.href = 'mailto:hamzaakhyat09@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
