type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const DayOfWeek = {
  Monday: 'Monday' as DayOfWeek,
  Tuesday: 'Tuesday' as DayOfWeek,
  Wednesday: 'Wednesday' as DayOfWeek,
  Thursday: 'Thursday' as DayOfWeek,
  Friday: 'Friday' as DayOfWeek,
  Saturday: 'Saturday' as DayOfWeek,
  Sunday: 'Sunday' as DayOfWeek,
};

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log(isWeekend(DayOfWeek.Saturday)); 