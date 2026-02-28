describe('Kiểm thử thanh toán', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Nên hoàn thành quy trình thanh toán thành công', () => {
    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Vào trang giỏ hàng
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    
    // Tiến hành thanh toán
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');
    
    // Điền thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // Xác minh chuyển đến trang bước 2
    cy.url().should('include', '/checkout-step-two.html');
    
    // Xác minh sản phẩm có trong trang tổng quan
    cy.get('.cart_item').should('have.length', 1);
    
    // Hoàn tất thanh toán
    cy.get('#finish').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });
});
