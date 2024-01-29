import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repositories/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class MultCheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository[],
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ) { }

    public callLogsRepository(log: LogEntity) {
        this.logRepository.forEach(logRepository => {
            logRepository.saveLog(log);
        });
    }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) throw new Error(`Error on check service: ${url}`);
            const log = new LogEntity({
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'check-service.ts'
            });
            this.callLogsRepository(log);
            this.successCallback && this.successCallback();
            return true;
        } catch (error) {
            const errorMessage = `${error}`;
            const log = new LogEntity({
                message: `[X] Service ${url} NOT working (${errorMessage})`,
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            });
            this.callLogsRepository(log);
            this.errorCallback && this.errorCallback(errorMessage);
            return false;
        }
    }
}