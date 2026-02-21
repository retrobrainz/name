import parse from './parse.js';

test('parseName()', () => {
  expect(parse('Greatest Striker (Japan)')).toEqual({
    title: 'Greatest Striker',
    name: 'Greatest Striker (Japan)',
    disc: null,
    regions: ['Japan'],
    languages: [],
    tags: [],
  });

  expect(parse('Resident Evil 4 (Europe) (En,Fr,De,Es,It)')).toEqual({
    title: 'Resident Evil 4',
    name: 'Resident Evil 4 (Europe) (En,Fr,De,Es,It)',
    disc: null,
    regions: ['Europe'],
    languages: ['En', 'Fr', 'De', 'Es', 'It'],
    tags: [],
  });

  expect(parse('Space Channel 5 - Special Edition (USA) (Disc 2)')).toEqual({
    title: 'Space Channel 5 - Special Edition',
    name: 'Space Channel 5 - Special Edition (USA)',
    disc: 2,
    regions: ['USA'],
    languages: [],
    tags: [],
  });

  expect(parse('Tomb Raider - The Last Revelation (USA) (Rev 1)')).toEqual({
    title: 'Tomb Raider - The Last Revelation',
    name: 'Tomb Raider - The Last Revelation (USA)',
    disc: null,
    regions: ['USA'],
    languages: [],
    tags: [],
  });

  expect(parse('Tekken 3 (Europe) (Alt)')).toEqual({
    title: 'Tekken 3',
    name: 'Tekken 3 (Europe)',
    disc: null,
    regions: ['Europe'],
    languages: [],
    tags: [],
  });

  expect(parse('Legend of Dragoon, The (Europe) (Disc 1)')).toEqual({
    title: 'Legend of Dragoon, The',
    name: 'Legend of Dragoon, The (Europe)',
    disc: 1,
    regions: ['Europe'],
    languages: [],
    tags: [],
  });

  expect(parse('Final Fantasy VII (USA) (Disc 1 of 2)')).toEqual({
    title: 'Final Fantasy VII',
    name: 'Final Fantasy VII (USA)',
    disc: 1,
    regions: ['USA'],
    languages: [],
    tags: [],
  });

  expect(parse('Policenauts (Japan) (Disc A)')).toEqual({
    title: 'Policenauts',
    name: 'Policenauts (Japan)',
    disc: 1,
    regions: ['Japan'],
    languages: [],
    tags: [],
  });

  expect(parse('Policenauts (Japan) (Disc B)')).toEqual({
    title: 'Policenauts',
    name: 'Policenauts (Japan)',
    disc: 2,
    regions: ['Japan'],
    languages: [],
    tags: [],
  });

  expect(parse('Policenauts (Japan) (Disc C)')).toEqual({
    title: 'Policenauts',
    name: 'Policenauts (Japan)',
    disc: 3,
    regions: ['Japan'],
    languages: [],
    tags: [],
  });

  expect(parse('688 Attack Sub (USA, Europe)')).toEqual({
    title: '688 Attack Sub',
    name: '688 Attack Sub (USA, Europe)',
    disc: null,
    regions: ['USA', 'Europe'],
    languages: [],
    tags: [],
  });

  expect(parse('Contra - Hard Corps (USA) (Contra Anniversary Collection)')).toEqual({
    title: 'Contra - Hard Corps',
    name: 'Contra - Hard Corps (USA) (Contra Anniversary Collection)',
    disc: null,
    regions: ['USA'],
    languages: [],
    tags: ['Contra Anniversary Collection'],
  });

  expect(parse('Atlantis no Nazo (Japan) (Virtual Console, Switch Online)')).toEqual({
    title: 'Atlantis no Nazo',
    name: 'Atlantis no Nazo (Japan) (Virtual Console, Switch Online)',
    disc: null,
    regions: ['Japan'],
    languages: [],
    tags: ['Virtual Console', 'Switch Online'],
  });

  expect(parse('Dong Dongnao II - Guozhong Yingwen (Yi) (Taiwan)')).toEqual({
    title: 'Dong Dongnao II - Guozhong Yingwen (Yi)',
    name: 'Dong Dongnao II - Guozhong Yingwen (Yi) (Taiwan)',
    disc: null,
    regions: ['Taiwan'],
    languages: [],
    tags: [],
  });
});
