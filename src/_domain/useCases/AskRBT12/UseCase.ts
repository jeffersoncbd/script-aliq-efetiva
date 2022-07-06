import { AskTheUserForInformation } from '../../entities/AskTheUserForInformation/Entity.ts'

export class AskRBT12UseCase {
  constructor(private asker: AskTheUserForInformation) {}

  async ask(): Promise<number> {
    const value = await this.asker.ask('RBT dos ultimos 12 meses')
    const sanitizedParts = value.replaceAll('.', '').replace(',', '.').split('.')
    sanitizedParts[0] = sanitizedParts[0].replace(/\D/g, '')
    const rbt12 = Number(sanitizedParts.join('.'))
    return rbt12
  }
}