export async function sleepRequest(time: number = 500) {
  await new Promise(r => setTimeout(r, time))
}
