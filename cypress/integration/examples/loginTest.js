describe('Harappa education', ()=>{

    it('login test', ()=>{

        // Open website
        cy.visit('https://harappa.education/')

        // clear cookies
        cy.clearCookies()

        // verify page title 
        cy.title().should('have' , 'Courses | Harappa')

        // click Sign-IN button
        cy.get('.btn-link').click()

        // enter UserName
        cy.get('input[type="email"]').type("rajesh.tiwari@harappa.education")

        // enter Password
        cy.get('input[type="password"]').type("qwerty123")

        //  click Sign-in Button 
        cy.get('button[class="btn btn-primary"]').click()

        // verify page title after landing dashboard page
        cy.title().should('have', 'Dashboard | Harappa')

      cy.title().should('have', 'Learn | Harappa')

      // click over Resume Course Button
      cy.get('.btn.min-width209.mb-3.mr-4.btn-primary').click()
    
      // click over get started
      cy.get('button.btn.btn-primary.long-btn30').click()

      // Type inside box
      cy.get('textarea.new-options--input.pr-5.small.ng-pristine.ng-valid.ng-touched').type("This is Automation script")

      // click SAVE & NEXT
      cy.get('button.btn.btn-primary.long-btn70.mr-4').click()

      // click radio button
      cy.get('[type="radio"]').check()

      // click SAVE & NEXT
      cy.get('next-button-spacing-position').click()


    })

})