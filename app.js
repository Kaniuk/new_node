const fs = require('node:fs/promises');
const path = require('node:path');

const foo = async () => {
    try {
        const fileArr = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt',];
        const folderArr = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5',];

        const basePath = path.join(process.cwd(), 'base-path');

        await fs.mkdir(basePath, {recursive: true});
        await Promise.all([
            ...folderArr.map(async (name) => {
                await fs.mkdir(path.join(basePath, name));
            }),
            ...fileArr.map(async (name) => {
                await fs.writeFile(path.join(basePath, name), 'Hello!');
            })
        ]);
        const arr = await fs.readdir(basePath);
        for (const item of arr) {
            const stat = await fs.stat(path.join(basePath, item));
            console.log(stat.isFile() ? 'FILE -' : 'FOLDER -', item);
        }

    } catch (e) {
        console.log(e.message);
    }

};


foo().then();