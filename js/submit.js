function generateShortId() {
  return "BOSI-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

document.getElementById("submissionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const status = document.getElementById("submissionStatus");
  const trackingBox = document.getElementById("trackingBox");

  const name = document.getElementById("submitName").value;
  const email = document.getElementById("submitEmail").value;
  const type = document.getElementById("submitType").value;
  const title = document.getElementById("submitTitle").value;
  const link = document.getElementById("submitLink").value;
  const notes = document.getElementById("submitNotes").value;

  const shortId = generateShortId();

  const { error } = await supabaseClient
    .from("submissions")
    .insert([{ id: shortId, name, email, type, title, file_link: link, notes }]);

  if (error) {
    status.innerText = "Error: " + error.message;
    return;
  }

  status.innerText = "Submitted successfully!";
  trackingBox.innerText = "Your Tracking ID: " + shortId;
});
