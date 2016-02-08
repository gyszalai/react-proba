export const logger = store => next => action => {
    console.group(action.type);
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

export const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
};
