import type { TextToSpeechPayload } from '~/models'

async function generateDeterministicFilename(params: TextToSpeechPayload): Promise<string> {
  const dataString = JSON.stringify({
    text: params.text,
    model: params.model || 'tts-1',
    voice: params.voice || 'alloy',
    response_format: params.response_format || 'mp3',
    speed: params.speed || 1.0,
  })

  const hasher = new Bun.CryptoHasher('sha256')
  hasher.update(dataString)
  const hashHex = hasher.digest('hex')

  const fileExtension = params.response_format || 'mp3'
  return `${hashHex}.${fileExtension}`
}

export { generateDeterministicFilename }
