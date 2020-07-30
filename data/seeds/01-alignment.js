
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
          description: "Nuetral Good (NG) fold do the best they can to help others according to their needs."
        },
        {
          alignment: "Chaotic Good",
          description: "Chaotic Good (CG) creatures act as their conscience directs, with litte regard for what others expect."
        }
      ]);
    });
};
