"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(11);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = lowercase + uppercase;
    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Password Generator
      </h2>

      <div className="space-y-2">
        <Label htmlFor="length-slider">Password Length: {length}</Label>
        <Slider
          id="length-slider"
          min={6}
          max={30}
          step={1}
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          className="w-full"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="include-numbers"
          checked={includeNumbers}
          onCheckedChange={setIncludeNumbers}
          className="border-2 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
        />
        <Label
          htmlFor="include-numbers"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        //   className="checkbox-custom"
        >
          Include Numbers
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="include-special-chars"
          checked={includeSpecialChars}
          onCheckedChange={setIncludeSpecialChars}
            className="border-2 border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
        //   className="checkbox-custom"
        />
        <Label
          htmlFor="include-special-chars"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Include Special Characters
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="generated-password">Generated Password</Label>
        <div className="flex space-x-2">
          <Input
            id="generated-password"
            value={password}
            readOnly
            className="flex-grow"
          />
          <Button
            onClick={copyToClipboard}
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}
