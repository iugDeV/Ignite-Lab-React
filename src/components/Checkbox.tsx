import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";


export interface CheckboxProps {}

export function Checkbox() {
  return (
    <CheckboxPrimitive.Root className="h-6 w-6 p-[2px] bg-gray-800 rounded-lg">
      <CheckboxPrimitive.Indicator>
        <Check weight="bold" className="h-5 w-5 text-green-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
