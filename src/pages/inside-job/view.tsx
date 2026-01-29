import { Fragment, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { gameData } from './model/data';
import { Title } from '../../shared/ui/title';

const cards = gameData.getUniq('color');

export const InsideJobPage: FC = () => {
  return (
    <>
      <Title className="mb-4">Inside job</Title>

      {cards.map((color, ind) => (
        <Fragment key={color}>
          <div className="font-roboto text-lg mb-2 font-bold">{color}</div>
          <div
            className={twMerge(
              'grid grid-flow-row grid-cols-3 gap-0',
              ind !== cards.length - 1 && 'break-after-page',
            )}
          >
            {gameData.list
              .filter(x => x.color === color)
              .map(x => (
                <div
                  key={x.title}
                  className="text-lg border-solid border border-gray-400 flex items-center justify-center p-2 font-roboto"
                  style={{ width: '60mm', height: '35mm' }}
                >
                  <div>{x.title}</div>
                </div>
              ))}
          </div>
        </Fragment>
      ))}
      <div />
    </>
  );
};
