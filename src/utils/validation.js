export const required = value => value == null ? 'Required' : undefined;

export const guestLimit = value => !/^[0-9]*$/.test(value) ? 'You can only have between 0 and 4 guests.' : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;