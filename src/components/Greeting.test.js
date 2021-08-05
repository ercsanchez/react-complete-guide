import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// test suite 1
describe("Greeting component", () => {
  // test 1
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true }); // default: true (no need to specify) | false matches substrings & case insensitive
    expect(helloWorldElement).toBeInTheDocument();
  });
});
