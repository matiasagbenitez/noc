import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email-service";

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource());
const emailService = new EmailService();
export class Server {
    public static start() {
        console.log('Server started...');

        // * ------------- LOGS -------------
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = `https://google.com`;
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log('success', url),  // or undefined
        //             (error) => console.log(error),      // or undefined
        //         ).execute(url);
        //     }
        // );

        // * ------------- EMAIL -------------
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute(['matiasagbenitez@gmail.com', 'matias.benitez.mab@gmail.com']);
        emailService.sendEmail({
            to: 'matiasagbenitez@gmail.com',
            subject: 'Logs de sistema',
            htmlBody: `
                <h3>Logs de sistema - NOC</h3>
                <p>Lorem velit non veniam ullamco ex eu laborum deserunt.</p>
                <p>Ver logs adjuntos</p>
            `,
        })
        // emailService.sendEmailWithFileSystemLogs(
        //     ['matiasagbenitez@gmail.com', 'matias.benitez.mab@gmail.com']
        // );

    }

}