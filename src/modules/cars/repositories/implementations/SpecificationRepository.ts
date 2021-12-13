import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({name, description})
    
        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne(
            {name: name}
        );
    }
}

export default new SpecificationRepository();
