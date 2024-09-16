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
  const startTime = watch("endTime");

  if (!startTime) return generateTimes();

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const startTimeInMinutes = startHour * 60 + startMinute;

  return generateTimes().filter((time) => {
    const [endHour, endMinute] = time.split(":").map(Number);
    const endTimeInMinutes = endHour * 60 + endMinute;
    return endTimeInMinutes > startTimeInMinutes;
  });
};

export const calculateDuration = (
  startTime: string,
  endTime: string
): string => {
  if (!startTime || !endTime) return "0.00";

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const startDate = new Date();
  startDate.setHours(startHour, startMinute, 0, 0);

  const endDate = new Date();
  endDate.setHours(endHour, endMinute, 0, 0);

  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);

  return diffInHours.toFixed(2);
};
