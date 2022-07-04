export class AskTheUserForInformation {
  async ask(inputName: string) {
    const buffer = new Uint8Array(1024)

    await Deno.stdout.write(new TextEncoder().encode(`${inputName}: `))
  
    const n = await Deno.stdin.read(buffer) as number
  
    const value = new TextDecoder().decode(buffer.subarray(0, n))
  
    return value.trim()
  }
}