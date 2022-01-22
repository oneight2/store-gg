import { Meta, Story } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
    title: 'Component/Molecules/GameItem',
    component: GameItem,
} as Meta

// const Template = (args: GameItemProps) => <GameItem {...args} />
const Template: Story<GameItemProps> = (args) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Super Mechs',
    platform: 'Mobile',
    thumbnail: './img/Thumbnail-1.png'
}