// For review submission and storage
document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const review = document.getElementById("review").value.trim();
    const imageInput = document.getElementById("image");

    let hasError = false;

    // Validate input
    if (!name || !review) {
      alert("Name and review are required.");
      hasError = true;
    }

    if (!hasError) {
      if (imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
          const image = e.target.result;
          saveReview(name, review, image);
        };

        reader.readAsDataURL(file);
      } else {
        saveReview(name, review);
      }

      document.getElementById("reviewForm").reset();
    }
  });

function saveReview(name, review, image = null) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({
    name,
    review,
    image,
    date: new Date().toLocaleString(),
  });
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
