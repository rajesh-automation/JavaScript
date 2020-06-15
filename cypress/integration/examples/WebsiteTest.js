
describe('launch my website' , ()=>{

    it('website testing', ()=>{
    
    cy.visit('https://harappa.education')
    cy.contains('COURSES')
    cy.contains('COURSES').click()
    cy.url().should('include' , '/courses')
    
    
    
    })
    
});
    