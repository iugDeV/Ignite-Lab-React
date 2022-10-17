import { Meta, StoryObj} from "@storybook/react"
import { Heading, HeadingProps } from "./Heading";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: 'Lorem ipsum',
    }
} as Meta<HeadingProps>

export const Default : StoryObj<HeadingProps> = {}

export const Small : StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    }
}
export const Large : StoryObj<HeadingProps> = {
    args: {
        children: 'Lorem ipsum',
        size: 'lg'
    }
}

export const CustomComponent : StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (<p>radix Test</p>)
    },
    argTypes: {
        children: {
            table:{
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}