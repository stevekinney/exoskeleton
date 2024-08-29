figma.showUI(__html__, { themeColors: true, width: 600, height: 400 });

figma.ui.onmessage = async (msg: { type: string }) => {
  console.log('Message received', msg);
};
