import { UseFormReturn } from "react-hook-form";
import { UpdateBookingInfoProps } from "../components/ui/admin/UpdateBookingModal";

type FilterTimesParams = {
  watch: UseFormReturn<UpdateBookingInfoProps>["watch"];
};

export const generateTimes = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      times.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return times;
};

export const filterTimes = ({ watch }: FilterTimesParams) => {
  const startTime = watch("endTime"); // Get current value of endTime from form

  if (!startTime) return generateTimes();

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const startTimeInMinutes = startHour * 60 + startMinute;

  return generateTimes().filter((time) => {
    const [endHour, endMinute] = time.split(":").map(Number);
    const endTimeInMinutes = endHour * 60 + endMinute;
    return endTimeInMinutes > startTimeInMinutes;
  });
};
