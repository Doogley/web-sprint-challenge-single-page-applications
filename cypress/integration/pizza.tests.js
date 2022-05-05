it('sanity check', ()=>{
     expect(9+9).to.equal(18)
     })
     
     
     describe('order a pizza', ()=>{
          beforeEach(()=>{ 
              cy.visit('http://localhost:3000/%27')
             }) 
             it('can visit the home page', ()=>{ 
                 cy.contains('Lambda Eats')
                 }) 
                 it('can order a pizza', ()=>{
                      cy.get(`[data-test-id='/pizza']`).click() 
                      const submitBtn = () => cy.get(`[data-test-id='subBtn']`) 
                      submitBtn().should('be.disabled') 
                      cy.get(`[data-test-id='ordername']`).type('Dougy')
                       submitBtn().should('not.be.disabled')
                        submitBtn().click()
                         cy.contains('Name on Order: Dougy')
                         }) 
                        })