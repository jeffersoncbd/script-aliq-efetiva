import attachments from '../anexos.config.ts'
import { AskTheUserForInformation } from './_domain/entities/AskTheUserForInformation/Entity.ts'
import { Sleep } from './_domain/entities/Sleep/Entity.ts'
import { AskAttachmentUseCase } from './_domain/useCases/AskAttachment/UseCase.ts'

const asker = new AskTheUserForInformation()
const attachmentAsker = new AskAttachmentUseCase(asker)
const sleep = new Sleep()


const RBT12 = Number(await asker.ask('RBT dos ultimos 12 meses'))
const attachment = await attachmentAsker.ask()

const selectedAttachment = attachments[attachment]

if (selectedAttachment !== null) {
  selectedAttachment.forEach(billingRange => {
    if (RBT12 > billingRange.RBT.min && RBT12 < billingRange.RBT.max) {
      const effectiveRate = ((RBT12 * billingRange.aliq) - billingRange.parcDed ) / RBT12
      console.log(`${effectiveRate * 100} %`)
    }
  })
} else {
  console.log('Anexo não cadastrado')
}

await sleep.for(120)
