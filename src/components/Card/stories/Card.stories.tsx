/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Card from '../Card';
import type { StoryObj } from '@storybook/react';

export default {
    title: 'Style Guide /Card',
    component: Card,
    decorators: [],
};

const primaryImage = 'https://images.pexels.com/photos/326916/pexels-photo-326916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const secondaryImage = 'https://images.pexels.com/photos/1560093/pexels-photo-1560093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const tertiaryImage = "https://images.pexels.com/photos/11098559/pexels-photo-11098559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: () => <Card image={primaryImage} title="Hiking trails" />,
};

export const Secondary: Story = {
  render: () => <Card image={secondaryImage} title="Books" />,
};

export const Tertiary: Story = {
  render: () => <Card image={tertiaryImage} title="Art" />,
};