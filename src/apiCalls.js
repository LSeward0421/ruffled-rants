export const translateText = async (text) => {
  const url = 'https://api.funtranslations.com/translate/shakespeare.json';
  const body = new URLSearchParams({
    text: text,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-FunTranslations-Api-Secret': 'ywjQCXpoYSHN_ThTKQtOvgeF',
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
  