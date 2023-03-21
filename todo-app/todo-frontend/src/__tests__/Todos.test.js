/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";

import Todo from "../Todos/Todo";

describe("<Todo />", () => {
  const todo = {
    text: "Start to code",
    done: false,
  };

  let spanText, spanDone;

  beforeEach(() => {
    let { container } = render(<Todo todo={todo} />);

    spanText = container.querySelector(".text");
    spanDone = container.querySelector(".done");
  });
  test("it checks if properties of Todo are present", () => {
    expect(spanText).toBeInTheDocument();
    expect(spanDone).toBeInTheDocument();
  });
  test('it checks if text and done are visible', () => {
    expect(spanText).toBeVisible()
    expect(spanDone).toBeVisible()
  })
});
