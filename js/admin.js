async function loadData() {
  const { data } = await supabaseClient.from("submissions").select("*");

  const container = document.getElementById("list");

  data.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${item.title}</p>
      <p>Status: ${item.status}</p>

      <select onchange="update('${item.id}', this.value)">
        <option>Pending</option>
        <option>In Review</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>
    `;

    container.appendChild(div);
  });
}

async function update(id, status) {
  await supabaseClient
    .from("submissions")
    .update({ status })
    .eq("id", id);

  location.reload();
}

loadData();