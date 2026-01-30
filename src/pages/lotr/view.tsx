import { Fragment, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { observer } from 'mobx-react-lite';
import { Title } from '../../shared/ui/title';
import { Star, Hammer } from './ui/icons';

import { Filter } from './ui/filter';
import { lotrStore } from './model/lotr-store';

console.log(lotrStore.heroesChunks);
export const LotrPage: FC = observer(() => {
  return (
    <>
      <Title className="mb-4">The Lord of The Rings</Title>
      <Filter />
      {lotrStore.heroesChunks.map((chunk, ind, l) => (
        <div
          className={twMerge(
            'grid grid-flow-row grid-cols-3 gap-0',
            ind <= l.length - 1 && 'break-after-page print:pt-10',
          )}
          key={chunk[0].mission}
        >
          {chunk.map(item => (
            <Fragment key={`${item.mission}${item.prepare}`}>
              <div
                className={twMerge(
                  'text-xs border-solid border border-gray-400 flex flex-col  justify-center p-2 font-roboto',
                  'relative',
                )}
                style={{
                  width: '62mm',
                  height: '30mm',
                  fontSize: '10px',
                }}
              >
                <div className="flex gap-1 mb-1">
                  <Star className="w-3 h-3" />
                  <div className="flex-1">{item.mission}</div>
                </div>
                <div className="flex gap-1">
                  <Hammer className="w-3 h-3" />
                  <div className="flex-1">{item.prepare}</div>
                </div>

                {item.number && (
                  <div className="absolute font-bold right-1 bottom-1">
                    {item.number}
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      ))}

      <div />
    </>
  );
});
