import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./login.component";

describe("Login Component", () => {
  it("renders sign-in title", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const signInTitle = screen.getByText("Sign in");
    expect(signInTitle).toBeInTheDocument();
  });

  it("renders email and password input fields", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText("Email Address *");
    const passwordInput = screen.getByLabelText("Password *");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders Login Button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginButton = screen.getByText("LOGIN");
    expect(loginButton).toBeInTheDocument();
  });

  it("renders CREATE NEW ACCOUNT button", () => {
    render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
    )
    const createNewAccountButton = screen.getByText("CREATE NEW ACCOUNT");
    expect(createNewAccountButton).toBeInTheDocument();
  });

  it("renders GOOGLE button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const googleButton = screen.getByText("GOOGLE");
    expect(googleButton).toBeInTheDocument();
  });

});
