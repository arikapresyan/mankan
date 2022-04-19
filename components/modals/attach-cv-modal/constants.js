export const handleChange = (setFileList, message) => (info) => {
  try {
    let newFilesList = [...info.fileList];
    newFilesList = newFilesList.slice(-1);
    newFilesList = newFilesList.map((file) => {
      if (file.response) {
        if ((
          file.type !== 'image/jpeg'
          && file.type !== 'image/png'
          && file.type !== 'application/pdf'
          && !file.name.includes('.doc')
          && !file.name.includes('.docx')
        )) {
          throw new Error();
        }
        // file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFilesList);
  } catch (e) {
    message.error({ content: 'Invalid file type', duration: 2 });
    setFileList([]);
  }
};
