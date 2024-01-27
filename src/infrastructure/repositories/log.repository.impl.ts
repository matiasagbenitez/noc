import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repositories/log.repository";

export class LogRepositoryImpl implements LogRepository {

    constructor(
        private readonly logDatasouce: LogDataSource,
    ) { }

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDatasouce.saveLog(log);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.getLogs(severityLevel);
    }

}