/*ATENDIMENTO WHATSAPP*/

  const whatsappButton = document.getElementById('whatsappButton');
  const chatPopup = document.getElementById('chatPopup');
  const closePopup = document.getElementById('closePopup');
  
  whatsappButton.addEventListener('click', () => {
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
  });
  
  closePopup.addEventListener('click', () => {
    chatPopup.style.display = 'none';
  });
  
