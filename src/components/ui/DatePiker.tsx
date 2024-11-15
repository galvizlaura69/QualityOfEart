"use client";

import * as React from "react";
import { format, isAfter } from "date-fns";
import { FaCalendar } from "react-icons/fa";
import { Calendar } from "./Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DatePickerWithSingleDateProps {
  onChange?: (date: Date | undefined) => void;
  className: string;
}

export function DatePicker({
  className,
  onChange,
}: DatePickerWithSingleDateProps) {
  const today = new Date();
  const [date, setDate] = React.useState<Date>(today); 

  React.useEffect(() => {
    if (onChange) {
      onChange(date); 
    }
  }, [date]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <FaCalendar className="mr-2 h-4 w-4" />
            {date ? (
              format(date, "LLL dd, y")
            ) : (
              <span></span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            selected={date}
            onSelect={(newDate: Date | any) => {
              if (!isAfter(newDate, today)) {
                setDate(newDate);
              }
            }}
            disabled={(date) => isAfter(date, today)} 
            mode="single" 
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
