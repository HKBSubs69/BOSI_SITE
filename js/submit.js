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

  const { data, error } = await supabaseClient
    .from("submissions")
    .insert([{ name, email, type, title, file_link: link, notes }])
    .select();

  if (error) {
    status.innerText = "Error: " + error.message;
    return;
  }

  status.innerText = "Submitted successfully!";
  trackingBox.innerText = "Your Tracking ID: " + data[0].id;
});

