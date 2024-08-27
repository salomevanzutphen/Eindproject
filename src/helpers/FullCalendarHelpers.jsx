export const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

export const findPhaseForDate = (date, phases) => {
    const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return phases.find(phase => {
        const startDate = startOfDay(new Date(phase.startDate));
        const endDate = startOfDay(new Date(phase.endDate));
        endDate.setDate(endDate.getDate());
        return startDate <= date && date <= endDate;
    });
};

export const isSelectedDate = (selectedDate, date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
};
