export const getNextSixDays = (date) => {
    const dates = [];
    for (let i = 1; i <= 6; i++) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + i);
        dates.push(newDate);
    }
    return dates;
};

export const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getPhaseForDate = (date, phases) => {
    const targetDate = startOfDay(date);

    return phases.find(phase => {
        const startDate = startOfDay(new Date(phase.startDate));
        const endDate = new Date(new Date(phase.endDate).setHours(23, 59, 59, 999));

        return targetDate >= startDate && targetDate <= endDate;
    });
};

export const formatDate = (date) => {
    return date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
};

