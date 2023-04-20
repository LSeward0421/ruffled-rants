describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "POST",
        url: "https://api.funtranslations.com/translate/shakespeare.json",
      },
      {
        statusCode: 200,
        body: {
          success: {
            total: 1,
          },
          contents: {
            translated:
              "Thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket.",
            text: "You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.",
            translation: "shakespeare",
          },
        },
      }
    );
    cy.visit("http://localhost:3000/");
  });
  
  it('should display the logo', () => {
    cy.get('.logo-container .logo').should('be.visible');
  });

  it('should display the history icon', () => {
    cy.get('.nav-link .history-icon').should('be.visible');
  });

  it('should display the tooltip on hover', () => {
    cy.get('.nav-link').trigger('mouseover');
    cy.get('.tooltip').should('be.visible');
  });

  it('should translate text when submitted', () => {
    cy.get('textarea').type('You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.');
    cy.get('.submit-btn').click();
    cy.get('.translated-text-container').should('contain.text', 'Thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket.');
  });

});
