import { Meta, StoryObj} from "@storybook/react"
import { Button, ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: 'Create Account',
    }
} as Meta<ButtonProps>

export const Default : StoryObj<ButtonProps> = {}

export const Small : StoryObj<ButtonProps> = {
    args: {
        children: 'Create Account',
        size: 'sm'
    }
}
export const Medium : StoryObj<ButtonProps> = {
    args: {
        children: 'Create Account',
        size: 'md'
    }
}
