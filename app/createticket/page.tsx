"use client";

import * as shenanigans from "@/components/shenanigans";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Input as MUIInput,
  Select as MUISelect,
} from "@mui/material";
import AntdInput from "antd/es/input/Input";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Command, CommandInput } from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";

export default function CreateTicketPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto w-full">
        <h1>Create Ticket</h1>
      </div>
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-10">
        <ShadcnInput placeholder="Enter your name" />
        <AntdInput placeholder="Enter your email" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          Contact reason
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Contact reason
            </InputLabel>
            <MUISelect label="Reason">
              <MenuItem value={"support"}>Support</MenuItem>
            </MUISelect>
          </FormControl>
        </div>
        <textarea placeholder="Enter your message">Enter your message</textarea>
        <div className="p-4 flex flex-col gap-2">
          Phone number
          <Slider />
        </div>
        <input type="text" placeholder="How did you hear about us" />
        <MUIInput type="text" placeholder="Address" />
        <div>
          Day of brith
          <Calendar />
          year of birth
          <select name="" id="">
            {Array.from({ length: 3000 }, (_, i) => i)
              // eslint-disable-next-line react-hooks/purity
              .sort(() => Math.random() - 0.5)
              .map((value, i) => (
                <option key={i} value={value.toString()}>
                  {value}
                </option>
              ))}
          </select>
        </div>
        <input type="text" placeholder="Reference number (if you have one)" />
        <MUIInput type="text" placeholder="Order ID (if you have one)" />
        <ShadcnInput type="text" placeholder="Prefered contact method and time" />
        <input type="text" placeholder="Device serial number" />
        <input type="text" placeholder="More details" />
        <input type="text" placeholder="Even more details" />
      </div>
    </>
  );
}
