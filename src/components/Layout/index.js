import React from 'react';
import GridLayout from './Grid';
import MS from './MS'

export const Grid = GridLayout;
export const MS_left = MS;
export const MS_right = (props) => <MS { ...props } master="right" />;