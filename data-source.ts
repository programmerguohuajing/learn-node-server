import path from 'path';
import { DataSource } from 'typeorm';
const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "JingGuoHua6288102.",
    database: "jghadmin",
    synchronize: true,
    entities: [path.join(__dirname, 'src/**/*.entity.{js,ts}')],
    entityPrefix: 'jgh-',
    logging: true,
})

export default dataSource;