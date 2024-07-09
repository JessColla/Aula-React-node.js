function removeAccents(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function emailGenerator(completeName, existingEmails) {
    const accents = removeAccents(completeName.toLowerCase()).split(" ");
    const firstName = accents[0];
    const lastName = accents[accents.length - 1];
    const email = `${firstName}.${lastName}@contoso.com`;
    
    if (existingEmails.includes(email)) {
        const emailFormats = [
          `${firstName}.${accents.slice(1).join(".")}@contoso.com`,
          `${lastName}.${firstName}@contoso.com`
        ];
      
        for (let i = 1; i < Infinity; i++) {
          const newEmail = `${firstName}.${lastName}${i}@contoso.com`;
          emailFormats.push(newEmail);
        }
      
        const newEmail = emailFormats.find(email => !existingEmails.includes(email));
        email = newEmail;
      }
      

    return email;
}

module.exports = { emailGenerator };
