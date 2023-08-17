export const sidenav = (state: any, action: any) => {
    switch (action.type) {
        case "TOGGLE":
            console.log(action);
            return { ...state, isSidenavOpen: action.payload };
        default:
            return state;
    }
}
