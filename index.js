const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input, data should be an array."
      });
    }

    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (typeof item === 'string' && item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          !highest_alphabet ||
          item.toLowerCase() > highest_alphabet.toLowerCase()
        ) {
          highest_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "sowmya13",
      email: "sowmya.21bce7114@vitapstudent.ac.in",
      roll_number: "21BCE7114",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
