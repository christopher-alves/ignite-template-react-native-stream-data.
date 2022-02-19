import React from 'react';
import { ActivityIndicatorProps } from 'react-native';
import {SpinLoader} from './styles';

interface LoaderProps extends ActivityIndicatorProps {
  size: number;
}

export const Loader = ({ size, ...rest }: LoaderProps) => {
  return (
    <SpinLoader size={size} {...rest} />
  )
}