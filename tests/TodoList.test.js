import React from "react";
import ReactDOM from "react-dom/client";
import { TodoList } from "../src/TodoList";
import { act } from "react-dom/test-utils";

describe("TodoList", () => {

    it("renders No task found", () => {

        const component = (
            <TodoList />
        );

        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act(() => 
            ReactDOM.createRoot(container).render(component)
        );

        expect(document.body.textContent).toContain("No task found");

    })

});