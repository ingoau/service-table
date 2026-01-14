"use client";

import { useState } from "react";
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
import { authClient } from "@/lib/auth-client";

export default function CreateTicketPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fruit, setFruit] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState([0]);
  const [howHeard, setHowHeard] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [orderId, setOrderId] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [moreDetails, setMoreDetails] = useState("");
  const [evenMoreDetails, setEvenMoreDetails] = useState("");

  const session = authClient.useSession();

  return (
    <>
      <div className="max-w-3xl mx-auto w-full">
        <h1>Create Ticket</h1>
      </div>
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-10">
        <div>
          Name
          <ShadcnInput
            placeholder="Enter your name"
            disabled={!!session.data}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value={!!session.data ? {} : name}
            onChange={(e) => setName(e.target.value)}
          />
          {session.data && <div>Prefilled from account</div>}
        </div>
        <div>
          Email
          <AntdInput
            placeholder="Enter your email"
            disabled={!!session.data}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value={!!session.data ? {} : email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {session.data && <div>Prefilled from account</div>}
        </div>
        <Select value={fruit} onValueChange={setFruit}>
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
            <MUISelect
              label="Reason"
              value={contactReason}
              onChange={(e) => setContactReason(e.target.value)}
            >
              <MenuItem value={"support"}>Support</MenuItem>
            </MUISelect>
          </FormControl>
        </div>
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          Enter your message
        </textarea>
        <div className="p-4 flex flex-col gap-2">
          Phone number
          <Slider
            value={phoneNumber}
            onValueChange={setPhoneNumber}
            min={0}
            max={100000000000}
          />
          +{phoneNumber}
        </div>
        <input
          type="text"
          placeholder="How did you hear about us"
          value={howHeard}
          onChange={(e) => setHowHeard(e.target.value)}
        />
        <MUIInput
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div>
          Day of brith
          <Calendar
            mode="single"
            selected={dateOfBirth}
            onSelect={setDateOfBirth}
          />
          year of birth
          <select
            name=""
            id=""
            value={yearOfBirth}
            onChange={(e) => setYearOfBirth(e.target.value)}
          >
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
        <input
          type="text"
          placeholder="Reference number (if you have one)"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
        />
        <MUIInput
          type="text"
          placeholder="Order ID (if you have one)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <ShadcnInput
          type="text"
          placeholder="Prefered contact method and time"
          value={preferredContact}
          onChange={(e) => setPreferredContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Device serial number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="More details"
          value={moreDetails}
          onChange={(e) => setMoreDetails(e.target.value)}
        />
        <input
          type="text"
          placeholder="Even more details"
          value={evenMoreDetails}
          onChange={(e) => setEvenMoreDetails(e.target.value)}
        />
      </div>
    </>
  );
}
