import { query } from '.';

const discs = [
  [
    'Appetite for Destruction',
    '1987',
    'Hard rock, heavy metal, glam metal',
    'Geffen',
    'Mike Clink',
    'https://upload.wikimedia.org/wikipedia/pt/0/06/Appetite_for_Destruction.jpg',
  ],
  [
    'The Dark Side of the Moon',
    '1973',
    'Art rock, rock progressivo, rock psicodélico',
    'Harvest Records (UK) ,Capitol Records ,(US) CBS/Columbia',
    'Pink Floyd',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/Dark_Side_of_the_Moon.png/220px-Dark_Side_of_the_Moon.png',
  ],
  [
    'The Joshua Tree',
    '1987',
    'Rock',
    'Islands Records',
    'Brian Eno, Daniel Lanois',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5b/U2_-_The_Joshua_Tree.png/220px-U2_-_The_Joshua_Tree.png',
  ],
  [
    'Mylo Xyloto',
    '2011',
    'Rock alternativo, pop rock, rock eletrônico',
    'Parlophone',
    'Markus Dravs, Daniel Green, Rik Simpson',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/Myloxyloto.jpg/220px-Myloxyloto.jpg',
  ],
  [
    'When We All Fall Asleep, Where Do We Go?',
    '2019',
    'Pop, avant-pop, art pop, electropop',
    'Darkroom, Interscope',
    "Finneas O'Connell",
    'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8f/When_We_Fall_Asleep%2C_Where_Do_We_Go.png/220px-When_We_Fall_Asleep%2C_Where_Do_We_Go.png',
  ],
  [
    'Come on Over',
    '1987',
    'Country, pop, rock',
    'Mercury',
    'Robert John "Mutt" Lange',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e4/Shania_Twain_-_Come_on_Over.jpg/220px-Shania_Twain_-_Come_on_Over.jpg',
  ],
  [
    'Slippery When Wet',
    '1986',
    'Hard rock, glam metal',
    'Vertigo Records',
    'Bruce Fairbairn',
    'https://upload.wikimedia.org/wikipedia/pt/a/a3/Slippery_When_Wet.jpg',
  ],
  [
    'A Rush of Blood to the Head',
    '2002',
    'Alternative rock, post-Britpop',
    'Parlophone, Capitol',
    'Coldplay Ken Nelson',
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Coldplay_-_A_Rush_of_Blood_to_the_Head.jpg/220px-Coldplay_-_A_Rush_of_Blood_to_the_Head.jpg',
  ],
];


const insertDiscs = async () => {
  try {
    const rawQuery = `INSERT INTO Discs(
      name, releaseYear, genre, recordCompany, production, cover
      ) VALUES ?`;

    await query(rawQuery, [discs]);
    console.log('Discs inserted successfully.');
  } catch (error) {
    console.log(error);
  }
};

const runSeeds = async () => {
  await insertDiscs();
  process.exit(0);
};

runSeeds();
