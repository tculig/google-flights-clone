export const clamp = (value, min, max) => {
    return Math.max(min, Math.min(value, max));
}

export const getTimeOnly = (timedate) => {
    const fullTime = timedate.split("T")[1];
    return fullTime.substring(0, 5);
}

export const getDuration = (starttime, endtime) => {
    // @ts-ignore
    const diff = (new Date(endtime)) - (new Date(starttime));
    return msToTime(diff);
}

export function msToTime(duration) {
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} hrs ${minutes} min`;
}
