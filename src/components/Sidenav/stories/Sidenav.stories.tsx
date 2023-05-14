/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Sidenav from '../Sidenav';
import type { StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Style Guide /Sidenav',
    component: Sidenav,
    decorators: [],
};

type Story = StoryObj<typeof Sidenav>;

export const Primary: Story = {
  render: () => <BrowserRouter><Sidenav  /></BrowserRouter>,
};