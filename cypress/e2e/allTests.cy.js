describe("Home Page", () => {
  beforeEach(() => {
    cy.fixture('translation').then((data) => {
      cy.intercept(
        {
          method: "POST",
          url: "https://api.funtranslations.com/translate/shakespeare.json",
        },
        {
          statusCode: 200,
          body: data
        }
      );
    });
    cy.visit("http://localhost:3000/");
  });
  
  it('should display the logo', () => {
    cy.get('.logo-container .logo').should('be.visible');
  });

  it('should display the history icon', () => {
    cy.get('.nav-link .history-icon').should('be.visible');
  });

  it('should display the left cat image', () => {
    cy.get('.left-cat').should('be.visible');
  });

  it('should display the right cat image', () => {
    cy.get('.right-cat').should('be.visible');
  });

  it('should display the textarea', () => {
    cy.get('textarea').should('be.visible');
  });

  it('should display the submit button', () => {
    cy.get('.submit-btn').should('be.visible');
  });

  it('should translate text when submitted', () => {
    cy.get('textarea').type('You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.');
    cy.get('.submit-btn').click();
    cy.get('.translated-text-container').should('contain.text', 'Thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket.');
  });

  it('should clear the text when clear button is clicked', () => {
    cy.get('textarea').type('Some text to clear');
    cy.get('.clear-btn').click();
    cy.get('textarea').should('have.value', '');
  });  

  it('should navigate to history page when history icon is clicked', () => {
    cy.get('.nav-link .history-icon').click();
    cy.url().should('include', '/history');
  });
  
  it('should navigate to history page, display translation history, and show history-cat image', () => {
    cy.get('textarea').type('You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.');
    cy.get('.submit-btn').click();
    cy.get('.nav-link .history-icon').click();
    cy.url().should('include', '/history');
  
    cy.get('.insult').should('have.length', 1);
    cy.get('.original-text').should('have.text', '"You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die."');
    cy.get('.translated-text').should('have.text', '"Thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket."');
    cy.get('.date-created').should('be.visible');
    cy.get('.history-cat').should('be.visible');
  });
  

  it('should display an error message if API is not available', () => {
    cy.intercept(
      {
        method: "POST",
        url: "https://api.funtranslations.com/translate/shakespeare.json",
      },
      {
        statusCode: 404,
        body: {}
      }
    );
    cy.get('textarea').type('You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.');
    cy.get('.submit-btn').click();
    cy.get('.error').should('contain.text', 'Oh no! Something went wrong! Please try again. 404');
  });

  it('should display an error message if API returns a 500 status code', () => {
    cy.intercept(
      {
        method: "POST",
        url: "https://api.funtranslations.com/translate/shakespeare.json",
      },
      {
        statusCode: 500,
        body: {}
      }
    );
    cy.get('textarea').type('You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.');
    cy.get('.submit-btn').click();
    cy.get('.error').should('contain.text', 'Oh no! Something went wrong! Please try again. 500');
  });
});