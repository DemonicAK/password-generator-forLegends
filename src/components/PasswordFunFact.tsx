import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

const funFacts = [
  "The most common password is '123456'. It would take a hacker less than a second to crack it!",
  "A 12-character password with numbers, symbols and mixed-case letters would take 34,000 years to crack.",
  "The term 'password' dates back to ancient times. Roman military would use 'watchwords' to identify soldiers.",
  "The average person has 100 passwords.",
  "It's estimated that 51% of people use the same passwords for both work and personal accounts.",
];

export function PasswordFunFact() {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader className="flex flex-row items-center space-x-2">
        <LightbulbIcon className="w-6 h-6 text-yellow-500" />
        <CardTitle className="text-lg">Password Fun Fact</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{randomFact}</p>
      </CardContent>
    </Card>
  );
}
