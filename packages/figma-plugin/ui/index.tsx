const button = document.getElementById('get-variables');

button?.addEventListener('click', async () => {
  parent.postMessage({ pluginMessage: { type: 'get-variables' } }, '*');
});

window.onmessage = (event) => {
  const { type, variables }: { type: string; variables: Record<string, unknown> } = event.data.pluginMessage;
  const list = document.getElementById('variables');

  if (type === 'variables') {
    console.log(variables);
    for (const [key, value] of Object.entries(variables)) {
      const item = document.createElement('li');
      item.textContent = `${key}: ${value}`;
      list?.appendChild(item);
    }
  }
};
