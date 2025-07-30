grist.ready({
  requiredAccess: 'read table',
  columns: ['PageURL']
});

grist.onRecords(records => {
  const rows = grist.mapColumnNames(records);
  const container = document.getElementById('container');
  container.innerHTML = '';

  if (!rows || rows.length === 0) return;
  const row = rows[0];
  const url = row.PageURL;

  if (!url) return;

  const iframe = document.createElement('iframe');
  iframe.src = url.includes('?') ? url + '&embed=true' : url + '?embed=true';

  container.appendChild(iframe);
});
