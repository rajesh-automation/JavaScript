it('harrappa',function(){    
        cy.visit('https://harappa.education')  
        cy.get('.navbar-nav>li:nth-child(7)').click()  
        cy.get('div.form-group>input[formcontrolname="firstName"').type("Mehar") 
        cy.get('div.form-group>input[formcontrolname="lastName"').type("kumar")
        cy.get('div.form-group>input[formcontrolname="email"').type("mehar0948@yopmail.com")
        cy.get('div.form-group>input[formcontrolname="password"').type("qwerty123")

        // check box for Terms and conditions
        cy.get('.square-check--icon.mr-2').click() 
        cy.get('div.action-button.mg-t30>button').click()

        // For Cookies
       // Cypress.Cookies.debug(enable, options)

        // Courses for mySelf
        cy.get('input[value="isIndividualUser"]').click()

        // Courses for My Organization
      //  cy.get('input[value="isBusinessUser"]').click()

      // Phone number
      cy.get('input[name="phone"]').type("8777886677")

      // Designation
      cy.get('input[name="designation"]').type("QA")

      // Organization
      cy.get('input[name="organization"]').type("Harappa education")

      // 
      cy.get('button[class="btn long-btn30 btn-primary"]').click()

      // click Learn Button
      cy.get('#navbarSupportedContent2 > ul > li:nth-child(2) > a > span').click()

      // verify url
      cy.url().should('include', '/learn')

      // verify Assigned course
      //cy.get()

      // Enrolled course
      cy.get('a#careerprogram-tab').click()

      // verify header data
      cy.get('#purchasedCourses')
      .should('be.visible')
      .and('contain', 'EMBRACING')
      
      // click over course
      cy.get('#purchasedCourses').click()

      // click over video
      cy.get('a.btn-video.various').click()
        
   })