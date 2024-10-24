import React, { useState } from "react";
import { View, Alert } from "react-native";
import HeaderHead from "../components/HeaderHead";
import { Calendar } from 'react-native-calendars';

const SearchAttendance = () => {
    const [markedDates, setMarkedDates] = useState({});

    const handleDayPress = (day) => {
        // Prompt user for attendance status
        Alert.alert(
            "Select Attendance Status",
            "Choose the status for " + day.dateString,
            [
                { text: "Absent", onPress: () => markDate(day.dateString, 'absent') },
                { text: "Holiday", onPress: () => markDate(day.dateString, 'holiday') },
                { text: "Leave", onPress: () => markDate(day.dateString, 'leave') },
                { text: "Cancel", style: "cancel" }
            ]
        );
    };

    const markDate = (dateString, status) => {
        const dotColor = getColorByStatus(status);
        const newMarkedDates = {
            ...markedDates,
            [dateString]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
                marked: true,
                dotColor: dotColor, // Use dotColor instead of color
            }
        };
        setMarkedDates(newMarkedDates);
    };

    const getColorByStatus = (status) => {
        switch (status) {
            case 'absent':
                return 'red'; // Absent - Red
            case 'holiday':
                return 'green'; // Holiday - Green
            case 'leave':
                return 'yellow'; // Leave - Yellow
            default:
                return 'transparent'; // Default
        }
    };

    return (
        <View>
            <HeaderHead />
            <Calendar
                onDayPress={handleDayPress}
                markedDates={markedDates}
            />
        </View>
    );
}

export default SearchAttendance;