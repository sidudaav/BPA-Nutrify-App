export const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

export const getMealsForDate = (user, date) => {
    let currentDayMeals = [];
    user.meals.forEach((meal) => {
        const mealDate = new Date(meal.date);
        if (datesAreOnSameDay(mealDate, date)) {
            currentDayMeals.push(meal);
        }
    });

    return currentDayMeals;
};
