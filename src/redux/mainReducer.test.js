import mainReducer, {setCurrenciesToUsd, setCurrency, setInputValue} from "./mainReducer";

let state = {
    currenciesToUsd: {},
    leftValue: "",
    leftCurrency: "",
    rightValue: "",
    rightCurrency: "",
};

describe("MainReducer testing", () => {

    test('Check LeftValue & rightValue', () => {
        const action1 = setInputValue('leftValue', 20);
        const action2 = setInputValue('rightValue', 15);

        let newState = mainReducer(state, action1);
        newState = mainReducer(newState, action2);

        expect(newState.leftValue).toBe(20);
        expect(newState.rightValue).toBe(15);
    });

    test('Check Left & Right Currency', () => {
        const action1 = setCurrency('leftCurrency', "UAH");
        const action2 = setCurrency('rightCurrency', "USD");

        let newState = mainReducer(state, action1);
        newState = mainReducer(newState, action2);

        expect(newState.leftCurrency).toBe("UAH");
        expect(newState.rightCurrency).toBe("USD");
    });

    test("Correct formation the object check", () => {
        const data = {
            "AED": {"code": "AED", "value": 3.67},
            "AFN": {"code": "AFN", "value": 91.80},
            "ALL": {"code": "ALL", "value": 108.22},
            "AMD": {"code": "AMD", "value": 480.41},
        }

        const action = setCurrenciesToUsd(data);
        const newState = mainReducer(state, action);

        expect(Object.keys(newState.currenciesToUsd).length).toBe(4);
        expect(newState.currenciesToUsd).toEqual({"AED": 3.67, "AFN": 91.80, "ALL": 108.22, "AMD": 480.41});
    })

});