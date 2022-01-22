import { Meta, Story } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
    title: 'Component/Molecules/StepItem',
    component: StepItem,
} as Meta

// const Template = (args: StepItemProps) => <StepItem {...args} />
const Template: Story<StepItemProps> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: './icon/step1.svg',
    title: '1. Start',
    desc1: 'Pilih salah satu game',
    desc2: 'yang kamu inginkan'
}