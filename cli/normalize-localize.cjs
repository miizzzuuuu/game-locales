const fs = require('fs/promises');

const mode = process.argv[2] ?? 'development';
const folderBuild = mode === 'development' ? 'dist-dev' : 'dist';

const remove = async () => {
    await fs.rm(`${folderBuild}/locales`, { recursive: true });
};

remove();
