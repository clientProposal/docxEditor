import WebViewer from '@pdftron/webviewer';

const app = document.getElementById('app');
const fileInput = document.getElementById('file-upload');

let webviewerInstance;

WebViewer(
  {
    path: '/webviewer',
    initialDoc: '/docx_example.docx',
    licenseKey: import.meta.env.VITE_PDFTRONKEY,
    enableOfficeEditing: true,
    officeMode: 'docx'
  },
  app
).then(instance => {
  webviewerInstance = instance;
});

fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (file && webviewerInstance) {
    webviewerInstance.loadDocument(file, { filename: file.name, officeOptions: { enableOfficeEditing: true } });
  }
});