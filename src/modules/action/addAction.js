const types = {
    ADD_COUNTER: 'ADD_COUNTER',
    INC_COUNTER: 'INC_COUNTER'
}

const addCounter = (data) => {
    return {
        type: types.ADD_COUNTER,
        payload: {
            value: data
        }
    }
}

export {types}
export default addCounter;