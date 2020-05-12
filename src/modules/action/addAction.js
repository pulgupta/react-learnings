const addCounter = (data) => {
    return {
        type: 'ADD_COUNTER',
        payload: {
            value: data
        }
    }
}

export default addCounter;