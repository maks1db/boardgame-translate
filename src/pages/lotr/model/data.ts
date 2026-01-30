import { GameData } from '../../../shared/lib/game-data';

export const heroes = new GameData<{
  mission: string;
  prepare: string;
  number?: string;
}>();

heroes.add({
  number: '2.16',
  mission:
    'Выиграйте 3 или более карты, совпадающее с оставшейся картой в конце раунда',
  prepare: 'Возьмите потерянную карту. Обменяйтесь с Frodo',
});
// heroes.add({
//   number: '',
//   mission: '',
//   prepare: '',
// });
heroes.add({
  number: '2.12',
  mission: 'Выиграйте ровно одну взятку',
  prepare: 'Отдайте карту каждому персонажу, но не берите ничего обратно',
});
heroes.add({
  number: '2.03',
  mission: 'Выиграйте 1 или 2 взятки',
  prepare: 'Обменяйтесь с Frodo, Sam или Pippin',
});
heroes.add({
  number: '1.05',
  mission: 'Выиграйте наименьшее количество взяток (или равное наименьшему)',
  prepare: 'Обменяйтесь с Frodo, Sam или Merry',
});
heroes.add({
  number: '2.24',
  mission:
    'Выиграйте больше или меньше взяток, чем на карте угроз, полученной в начале',
  prepare:
    'Вытяните карту угроз. Выберите больше или меньше. Обменяйтесь с Фродо',
});
heroes.add({
  number: '2.29',
  mission: 'Выиграйте ровно одну взятку',
  prepare: 'Обменяйте одну карту с Sam и 1 карту с Frodo одновременно',
});
