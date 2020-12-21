import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Button from "../src/components/Button";
import InputText from "../src/components/InputText";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("capture clicks", (done) => {
  function handleClick() {
    done();
  }
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const node = getByText("Click me");
  fireEvent.click(node);
});

it("capture changes", (done) => {
  function handleChange(evt) {
    expect(evt.target.value).toEqual("whamo");
    done();
  }

  const { getByPlaceholderText } = render(
    <InputText onChange={handleChange} placeholder="Change me" />
  );

  const node = getByPlaceholderText("Change me");
  fireEvent.change(node, { target: { value: "whamo" } });
});

afterEach(cleanup);
