import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoryRepository") private repository: ICategoryRepository
    ) {}

    private async loadCategories(
        file: Express.Multer.File
    ): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = parse();

            stream.pipe(parseFile);
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => resolve(categories))
                .on("error", (err) => reject(err));
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category;
            const existCategory = await this.repository.findByName(name);

            if (!existCategory)
                await this.repository.create({ name, description });
        });

        await deleteFile(file.path);
    }
}

export { ImportCategoryUseCase };
