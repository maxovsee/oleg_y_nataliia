const repo = 'maxovsee/oleg_y_nataliia';
const folder = 'properties';

fetch(`https://api.github.com/repos/${repo}/contents/${folder}`)
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
      if (file.type === 'dir') {
        const folderName = file.name;
        const folderUrl = `https://api.github.com/repos/${repo}/contents/${folder}/${folderName}`;

        fetch(folderUrl)
          .then(response => response.json())
          .then(files => {
            files.forEach(file => {
              if (file.name.endsWith('.jpg')) {
                const imageUrl = `https://raw.githubusercontent.com/${repo}/${folder}/${folderName}/${file.name}`;

                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = file.name;

                document.body.appendChild(imgElement);
              }
            });
          });
      }
    });
  });
