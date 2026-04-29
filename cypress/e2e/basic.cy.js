describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero heading', () => {
    cy.get('h1').should('exist')
  })

  it('renders a visible image', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      })
  })

  it('has a title tag containing Vampire Therapist', () => {
    cy.title().should('include', 'Vampire Therapist')
  })

  it('has store links', () => {
    cy.get('a[href*="steampowered.com"]').should('exist')
  })
})
