/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display login page correctly", () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Username"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when username is empty", () => {
    // klik tombol login tanpa mengisi username
    cy.get("button")
      .contains(/^Login$/)
      .click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal('"id" is not allowed to be empty');
    });
  });

  it("should display alert when password is empty", () => {
    // mengisi username
    cy.get('input[placeholder="Username"]').type("testuser");

    // klik tombol login tanpa mengisi password
    cy.get("button")
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it("should display alert when username and password are wrong", () => {
    // mengisi username
    cy.get('input[placeholder="Username"]').type("testuser");

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type("wrong_password");

    // menekan tombol Login
    cy.get("button")
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal("User ID or password is wrong");
    });
  });

  it("should display homepage when username and password are correct", () => {
    // Login
    cy.get('input[placeholder="Username"]').type("gio.villando12@gmail.com");
    cy.get('input[placeholder="Password"]').type("07jan2003");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    // Wait for navigation to complete and homepage to load
    cy.url().should("include", "/"); // Change "/homepage" to the actual URL of the homepage
    cy.get("nav", { timeout: 10000 }).should("be.visible");

    // Verify that the "Sign out" button is visible
    cy.get("a").should("be.visible");
  });
});
