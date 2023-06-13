function formatPhoneNumber(phoneNumber) {
  let phoneArray = phoneNumber.split('');
  phoneArray = phoneArray.map(char => isNaN(char) ? '*' : char);

  while (phoneArray.length < 11) {
    phoneArray.push('*');
  }

  let formattedPhone = '+';
  
  for (let i = 0; i < 11; i++) {
    formattedPhone += phoneArray[i];

    if (i === 0) {
      formattedPhone += ' (';
    } else if (i === 3) {
      formattedPhone += ') ';
    } else if (i === 6 || i === 8) {
      formattedPhone += '-';
    }
  }

  return formattedPhone;
}

export default formatPhoneNumber;
