"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Select
        onValueChange={(value) => setTheme(value)}
        defaultValue={theme || ""}
      >
        <SelectGroup className="flex items-center">
          <SelectLabel>Theme</SelectLabel>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="w-[100px]">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </SelectGroup>
      </Select>
    </>
  );
}
