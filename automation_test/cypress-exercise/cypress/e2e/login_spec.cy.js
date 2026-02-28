describe('Kiểm thử đăng nhập', () => {
  it('Nên đăng nhập thành công với thông tin hợp lệ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Nên hiển thị thông báo lỗi với thông tin không hợp lệ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('contain', 'Username and password do not match');
  });
});
