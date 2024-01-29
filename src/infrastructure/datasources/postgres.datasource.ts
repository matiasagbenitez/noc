import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { PrismaClient, SeverityLevel } from '@prisma/client';

const prismaClient = new PrismaClient();

const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH
}

export class PostgresLogDatasource implements LogDataSource {
    async saveLog(log: LogEntity): Promise<void> {
        const level = severityEnum[log.level];
        const newLog = await prismaClient.logModel.create({
            data: {
                ...log,
                level: level
            }
        });
        console.log(`[PostgresLogDatasource] Log saved [ID ${(newLog.id)}]`);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const level = severityEnum[severityLevel];
        const logs = await prismaClient.logModel.findMany({
            where: {
                level
            }
        });
        return logs.map(postgresLog => LogEntity.fromObject(postgresLog));
    }

}