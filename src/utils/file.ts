import fs from "fs";

export const deleteFile = async (fileName: string) => {
    await fs.promises
        .stat(fileName)
        .catch()
        .then(() => fs.promises.unlink(fileName));
};
