describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.cermati.com/app/gabung')
    cy.contains('div','Email').find('input').first().type('nvita6513@gmail.com')
    cy.contains('div','No. Handphone').find('input').first().type('085742880956')
    cy.contains('div','Kata Sandi').find('input').first().type('Nvita6513')
    cy.contains('div','Ulangi Kata Sandi').find('input').first().type('Nvita6513')
    cy.contains('div','Nama Depan').find('input').first().type('Novi')
    cy.contains('div','Nama Belakang').find('input').first().type('Ta')
    cy.contains('div','Kabupaten/Kota').find('input').first().type('KABUPATEN BANTUL')
    cy.contains('KABUPATEN BANTUL').click()
    cy.contains('Daftar').click()
  })
})