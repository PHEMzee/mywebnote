import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("renders the app header", () => {
  render(<Header />);

  expect(screen.getByText(/my webnote/i)).toBeInTheDocument();
});
