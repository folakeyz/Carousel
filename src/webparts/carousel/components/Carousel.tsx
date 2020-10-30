import * as React from 'react';
import { ICarouselProps } from './ICarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import DemoCarousel from './Carousel/Carousel';

export default class Carousel extends React.Component<ICarouselProps, {}> {
  public render(): React.ReactElement<ICarouselProps> {
    return (
      <>
      <DemoCarousel />
      </>
    );
  }
}
