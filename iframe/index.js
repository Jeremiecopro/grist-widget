grist.ready({
  requiredAccess: 'read table',
  columns: ['PageURL', 'Width', 'Height']
});

grist.onRecords(records => {
  const rows = grist.mapColumnNames(records);
  const container = document.getElementById('container');
  container.innerHTML = '';
  if (!rows || rows.length === 0) return;
  const row = rows[0];
  const url = row.PageURL + (row.PageURL.includes('?') ? '&embed=true' : '?embed=true');
  const width = row.Width ? row.Width + 'px' : '100%';
  const height = row.Height ? row.Height + 'px' : '600px';
  container.innerHTML = `<iframe src="${url}" width="${width}" height="${height}"
                             style="border:none;"></iframe>`;
});
