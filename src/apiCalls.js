export const translateText = (text) => {
  const url = 'https://api.funtranslations.com/translate/shakespeare.json';
  const body = new URLSearchParams({
    text: text,
  });

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-FunTranslations-Api-Secret': 'ywjQCXpoYSHN_ThTKQtOvgeF',
    },
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
};
  