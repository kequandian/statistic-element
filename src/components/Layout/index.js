import React from 'react';
import GridLayout from './Grid';
import WrappedGridLayout from './WrappedGrid';
import MS from './MS'

export const Grid = GridLayout;
export const WrappedGrid = WrappedGridLayout;

export const MS_left = MS;
export const MS_right = (props) => <MS { ...props } master="right" />;