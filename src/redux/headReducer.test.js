import headReducer, {setNewExchangeRates, setThemeColor} from "./headReducer";

let state = {
    isDarkMode: false,
    UsdToUah: null,
    EurToUah: null,
}

describe("HeadReducer testing", () => {

    test('Theme change test', () => {
        let action = setThemeColor();
        let newState = headReducer(state, action);

        expect(newState.isDarkMode).toBe(true);
    });

    test('Setting exchange rates test', () => {
        let action = setNewExchangeRates(15.2, 22.1);
        let newState = headReducer(state, action);

        expect(newState.UsdToUah).toBe(15.2);
        expect(newState.EurToUah).toBe(22.1);
    });

});