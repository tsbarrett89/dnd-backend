
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('alignment').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('alignment').insert([
        {
          alignment: "Lawful Good",
          description: "Lawful good (LG) creatures can be counted on to do the right thing as expected by society."
        },
        {
          alignment: "Neutral Good",
          description: "Nuetral good (NG) fold do the best they can to help others according to their needs."
        },
        {
          alignment: "Chaotic Good",
          description: "Chaotic good (CG) creatures act as their conscience directs, with litte regard for what others expect."
        },
        {
          alignment: "Lawful Neutral",
          description: "Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes."
        },
        {
          alignment: "Neutral",
          description: "Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time."
        },
        {
          alignment: "Chaotic Neutral",
          description: "Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else."
        },
        {
          alignment: "Lawful Evil",
          description: "Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order."
        },
        {
          alignment: "Nuetral Evil",
          description: "Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms."
        },
        {
          alignment: "Chaotic Evil",
          description: "Chaotic evil (CE) creatures act with arbritrary violence, spurred by their greed, hatred, or bloodlust."
        }
      ]);
    });
};
