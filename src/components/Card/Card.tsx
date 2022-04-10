import React, {MouseEventHandler} from 'react';

interface ICardProps {
  value: number;
  click: MouseEventHandler<HTMLElement>;
  isShown: boolean;
  id: string;
}

function Card({ value, click, isShown, id }: ICardProps) {
  return (
    <li id={id.toString()} onClick={click} >{ isShown && value }</li>
  );
}

export default Card;