import { calculateCommentLength } from '../modules/popUp.js';

describe('Comments counter test', () => {
  const comments = [
    {
      creation_date: '2023-09-09',
      username: 'Ayokunnumi',
      comment: 'I am happy',
    },
    {
      creation_date: '2023-09-09',
      username: 'Hydaline',
      comment: 'Hi i am so excited today, i took my drugs',
    },
  ];
  test('Count of length 2 equals 2', () => {
    const value = calculateCommentLength(comments);
    expect(value).toBe(2);
  });
});