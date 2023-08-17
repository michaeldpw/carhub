export const sidenav = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            console.log(action);
            return { ...state, isSidenavOpen: action.payload };
        default:
            return state;
    }
}
