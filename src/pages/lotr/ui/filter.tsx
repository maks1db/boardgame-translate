import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { observer } from 'mobx-react-lite';
import { Input } from '../../../shared/ui/input';
import { lotrStore } from '../model/lotr-store';

export const Filter: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={twMerge(className, 'mb-4 print:hidden')}>
      <div className="flex gap-8">
        <InputFrom />
        <InputTo />
      </div>
    </div>
  );
};

const InputFrom: FC = observer(() => (
  <Input
    onChange={value => lotrStore.changeFilter('from', value)}
    value={lotrStore.from}
    title="Значение от"
    type="text"
    className="w-full"
  />
));

const InputTo: FC = observer(() => (
  <Input
    onChange={value => lotrStore.changeFilter('to', value)}
    value={lotrStore.to}
    title="Значение до"
    type="text"
    className="w-full"
  />
));
