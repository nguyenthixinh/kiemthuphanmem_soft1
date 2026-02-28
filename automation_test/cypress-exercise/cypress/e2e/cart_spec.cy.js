describe('Kiểm thử giỏ hàng', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Nên thêm sản phẩm vào giỏ hàng thành công', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('Nên sắp xếp sản phẩm theo giá từ thấp đến cao', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  it('Nên xóa sản phẩm khỏi giỏ hàng thành công', () => {
    // Thêm sản phẩm vào giỏ hàng trước
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Xóa sản phẩm khỏi giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
