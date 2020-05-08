import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in local state", () => {
        const component = create(<ProfileStatus status="testStatus"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("testStatus");
    });

    test("After creation span with correct status should be displayed", () => {
        const component = create(<ProfileStatus status="testStatus"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="testStatus"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("In span we have text from props", () => {
        const component = create(<ProfileStatus status="testStatus"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("testStatus");
    });

    test("Input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="testStatus"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("testStatus");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="testStatus" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});