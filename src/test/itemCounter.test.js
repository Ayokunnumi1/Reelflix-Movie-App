import calculateTotalMovies from '../modules/TotalMovies.js';

describe('Shows counter test', () => {
  const movies = [
    {
      id: '1',
      image: 'the100.png',
      title: 'The 100',
      likes: 7,
    },
    {
      id: '2',
      image: 'theflash.png',
      title: 'The flash',
      likes: 2,
    },
    {
      id: '3',
      image: 'Into the badlands.png',
      title: 'Into the badlands',
      likes: 17,
    },
  ];
  test('count number of shows', () => {
    const movieCount = calculateTotalMovies(movies);
    expect(movieCount).toBe(3);
  });
});