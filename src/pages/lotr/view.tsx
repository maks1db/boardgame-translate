import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { observer } from 'mobx-react-lite';
import { Title } from '../../shared/ui/title';
import { Star, Hammer } from './ui/icons';

import { Filter } from './ui/filter';
import { lotrStore } from './model/lotr-store';

export const LotrPage: FC = observer(() => {
  return (
    <>
      <Title className="mb-4">The Lord of The Rings</Title>
      <Filter />
      <div className="grid grid-flow-row grid-cols-3 gap-0">
        {lotrStore.heroes.map(item => (
          <div
            className={twMerge(
              'text-xs border-solid border border-gray-400 flex flex-col  justify-center p-2 font-roboto',
              'relative',
            )}
            style={{
              width: '62mm',
              height: '25mm',
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
        ))}
      </div>
      <div />
    </>
  );
});
