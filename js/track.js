async function checkStatus() {
  const id = document.getElementById("trackId").value;
  const email = document.getElementById("trackEmail").value;

  const { data, error } = await supabaseClient
    .from("submissions")
    .select("*")
    .eq("id", id)
    .eq("email", email);

  if (error || data.length === 0) {
    document.getElementById("result").innerText = "Not found";
    return;
  }

  document.getElementById("result").innerText =
    "Status: " + data[0].status;
}

