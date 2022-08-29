import { AskTheUserForInformation } from '../../entities/AskTheUserForInformation/Entity.ts'

const attachments = ['i', 'ii', 'iii', 'iv', 'v'] as const
type Attachments = typeof attachments[number]

export class AskAttachmentUseCase {
  constructor(private asker: AskTheUserForInformation) {}

  async ask(): Promise<Attachments> {
    const attachment = await this.asker.ask('Anexo do SN') as Attachments
    if(!attachments.includes(attachment)) {
      console.log(attachments.join(' - '))
      return await this.ask()
    }
    return attachment
  }
}