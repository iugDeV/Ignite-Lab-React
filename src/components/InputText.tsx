
import {Slot} from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputTextRootProps {
  children: ReactNode;
}

export interface InputTextIconProps {
  children: ReactNode;
}

function InputTextRoot(props: InputTextRootProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-3 rounded-lg w-full h-auto bg-gray-800 focus-within:ring-2 ring-green-500">
      {props.children}
    </div>
  );
}

function InputTextIcon (props: InputTextIconProps){
  Slot : 'span';
  return (
    <Slot className="text-green-500 w-6 h-6">
      {props.children}
      </Slot>
  )
}

function InputTextInput(props: InputTextInputProps) {
  return (
    <input
      className="outline-none bg-transparent flex-1 placeholder:text-gray-400 text-gray-100"
      {...props}
    />
  );
}

export const InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Icon: InputTextIcon,
};
