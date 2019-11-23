import React from 'react';
import Hello from './Hello';
import { withKnobs,text,boolean } from '@storybook/addon-knobs';


export default {
    title: 'components|basic/Hello',
    component: Hello,
    decorators: [withKnobs],
};

export const hello = () => {
    const big = boolean('big', false);
    const name = text('name','Storybook');
    return <Hello name={name} big={big} />;
};

hello.story = {
    name: 'Default',
};

export const standard = () => <Hello name="storybook" />;
export const big = () => <Hello name="Storybook" big />;