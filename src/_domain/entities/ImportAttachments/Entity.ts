interface BillingRange {
  RBT: { min: number; max: number }
  aliq: number
  parcDed: number
}

interface Attachments {
  i: null | BillingRange[]
  ii: null | BillingRange[]
  iii: null | BillingRange[]
  iv: null | BillingRange[]
  v: null | BillingRange[]
}

export class ImportAttachments {
  async import(): Promise<Attachments> {
    const buffer = await Deno.readFile('anexos.json')
    const attachments = JSON.parse(new TextDecoder('utf-8').decode(buffer)) as Attachments
    return attachments
  }
}