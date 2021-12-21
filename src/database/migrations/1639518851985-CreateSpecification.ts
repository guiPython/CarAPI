import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpecification1639518851985 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "specifications",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications");
    }
}
