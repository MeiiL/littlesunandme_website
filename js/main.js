async function loadData() {
  try {
    const res = await fetch('./data/experiments.json');
    const data = await res.json();

    render(data);
  } catch (err) {
    console.error('載入失敗', err);
    document.getElementById('expGrid').innerHTML =
      '<p>⚠️ 資料載入失敗</p>';
  }
}

function render(data) {
  const grid = document.getElementById('expGrid');

  data.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'exp-card';
    div.innerHTML = `
      <h3>${exp.title}</h3>
      <p>${exp.desc}</p>
    `;
    grid.appendChild(div);
  });
}

loadData();
