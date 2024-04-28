const bookingForm = document.getElementById('bookingForm');
const bookingStatus = document.getElementById('bookingStatus');

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const name = formData.get('name');
  const checkin = formData.get('checkin');
  const checkout = formData.get('checkout');
  const roomType = formData.get('roomType');

  // Here you can perform booking logic, like sending data to a server or displaying a confirmation message
  const bookingDetails = `
    <p>Thank you, ${name}!</p>
    <p>Your ${roomType} room has been booked from ${checkin} to ${checkout}.</p>
  `;
  
  bookingStatus.innerHTML = bookingDetails;
});
