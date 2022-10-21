export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const copyToClickBoard = (htmlInputElement) => {
navigator.clipboard.writeText(htmlInputElement)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      alert("Something went wrong");
    });
};
