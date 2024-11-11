const toggleBtn = document.querySelector('.btn');

const toggleEvent = () => {
  document.documentElement.classList.toggle('dark-theme');
};

toggleBtn.addEventListener('click', toggleEvent);

export default toggleBtn;
