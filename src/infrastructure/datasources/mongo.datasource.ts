import { LogModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export class MongoLogDatasource implements LogDataSource {
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        console.log(`[MongoLogDatasource] Log saved [ID ${(newLog._id)}]`);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({ level: severityLevel });
        return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
    }

}