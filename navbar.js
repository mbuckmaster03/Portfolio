

window.onscroll = () => {
  const header = document.querySelector('#navbar');
  if(this.scrollY <= 100) header.className = ''; 
  else header.className = 'scroll';
};