import React from 'react';
import { ReactComponent as EventIcon } from "../assets/icons/event.svg";
import { ReactComponent as CelebrationIcon } from "../assets/icons/celebration.svg";
import { ReactComponent as CaregiversIcon } from "../assets/icons/caregivers.svg";
import { ReactComponent as MealIcon } from "../assets/icons/meal.svg";
import { ReactComponent as OtherIcon } from "../assets/icons/other.svg";
import { ReactComponent as PlaytimeIcon } from "../assets/icons/playtime.svg";
import { ReactComponent as TripIcon } from "../assets/icons/trip.svg";

export const categoryOptions = [
    {
        label: "Event",
        value: "Event",
        icon: <EventIcon />
    },
    {
        label: "Celebration",
        value: "Celebration",
        icon: <CelebrationIcon />
    },
    {
        label: "Trip",
        value: "Trip",
        icon: <TripIcon />
    },
    {
        label: "With caregiver(s)",
        value: "With caregiver(s)",
        icon: <CaregiversIcon />
    },
    {
        label: "Meal",
        value: "Meal",
        icon: <MealIcon />
    },
    {
        label: "Playtime",
        value: "Playtime",
        icon: <PlaytimeIcon />
    },
    {
        label: "Other",
        value: "Other",
        icon: <OtherIcon />
    },
];

export const getTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const formattedHour = hour.toString().padStart(2, '0');
            const formattedMinute = minute.toString().padStart(2, '0');
            options.push({
                value: `${formattedHour}:${formattedMinute}`,
                label: `${formattedHour}:${formattedMinute}`,
            });
        }
    }
    return options;
};