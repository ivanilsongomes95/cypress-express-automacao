describe('Google Search Automation - Anti CAPTCHA', () => {

  it('Realiza pesquisa e tira screenshot sem acionar CAPTCHA', () => {

    // Acessar Google US (menos restrição de bot)
    cy.visit('/');

    // Garantir viewport (evita página com altura 0)
    cy.viewport(1280, 720);

    // Pausa humana
    cy.wait(1500);

    // Aceitar cookies se aparecer
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Aceitar")').length) {
        cy.contains('button', 'Aceitar').click({ force: true });
      }
      if ($body.find('button:contains("Accept all")').length) {
        cy.contains('button', 'Accept all').click({ force: true });
      }
    });

    // Clicar no campo de busca (imitando humano)
    cy.get('textarea[name="q"]').click();
    cy.wait(700);

    // Digitar devagar para não ser detectado
    cy.get('textarea[name="q"]').type('QA automação de testes', { delay: 110 });

    // Pressionar ENTER separado (mais humano)
    cy.wait(300);
    cy.get('textarea[name="q"]').type('{enter}');

    // Esperar página renderizar completamente (garante altura > 0)
    cy.wait(2000);

    // Garantir que o body tem altura válida antes de tirar screenshot
    cy.get('body', { timeout: 6000 })
      .should('be.visible')
      .and(($body) => {
        expect($body.height()).to.be.greaterThan(0);
      });

    // Screenshot da página (agora seguro)
    cy.screenshot('resultado-google');

  });

});
