describe('MyTestSuite', function()
{
    it('Verify The Title Of Page-positive', function()
     {
         cy.visit('https://dev.harappa.education')
         cy.title().should('eq','Online courses for workplace success | Harappa')
    })

    it('Verify The Title Of Page-Negative', function()
     {
         cy.visit('https://dev.harappa.education')
         cy.title().should('eq','node_modules/.bin/cypress opencourses for workplace success | Harappa')
    })

    it('login-Scenario', function()
     {
         cy.visit('https://dev.harappa.education')
         cy.get('.btn-link').click()
         cy.get('.control-label').type('shivam23@yopmail.com')
         cy.get('.control-label').type('qwerty123')
    })
    
  })