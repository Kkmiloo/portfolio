import React from 'react';
import CardTimeLine from '../Card/CardTimeLine';
import CardTitle from '../Card/CardTitle';
import CardContent from '../Card/CardContent';
import CardDataRange from '../Card/CardDataRange';

export default function Card({ work, side = 'right' }) {
  return (
    <div
      className={`flex ${
        side === 'left' ? 'flex-row-reverse' : ''
      } md:contents`}
    >
      {side == 'right' && (
        <>
          <CardDataRange work={work} side={side} />
          <CardTimeLine />
          <CardContent work={work} side={side} />
        </>
      )}

      {side == 'left' && (
        <>
          <CardContent work={work} side={side} />
          <CardTimeLine />
          <CardDataRange work={work} side={side} />
        </>
      )}
    </div>
  );
}
