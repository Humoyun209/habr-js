export const dumpState = state => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (error) {
        console.error(error);
    }
}


export const loadState = () => {
    try {
        const json = localStorage.getItem('state')
        if (json === null) {
            return undefined
        }
        return JSON.parse(json)
    } catch (error) {
        console.error(error);
    }
}
