export const time = times => {
    const start = new Date(times.start);
    const end = new Date(times.end);
    const startString = `${start.getHours() % 12}:${start.getMinutes().toString().padStart(2, '0')}
                   ${(start.getHours() >= 12) ? "PM" : "AM"}`;
    const endString = `${end.getHours() % 12}:${end.getMinutes().toString().padStart(2, '0')}
                   ${(end.getHours() >= 12) ? "PM" : "AM"}`;
    return `${startString} - ${endString}`;
};

export const formatDate = d => {
    return ((d.getMonth() <= 8) ? "0" + (d.getMonth() + 1) : d.getMonth() + 1)
        + "/"
        + ((d.getDate() <= 9) ? "0" + d.getDate() : d.getDate())
        + "/"
        + ((d.getFullYear() <= 9) ? "0" + d.getFullYear() : d.getFullYear());
};